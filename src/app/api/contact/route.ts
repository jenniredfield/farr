import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Honeypot — real users never fill this in. */
  company?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

// In-memory only, so this resets on every deploy/restart and doesn't share
// state across serverless instances. Swap for a shared store (e.g. Upstash
// Redis) once a hosting target is chosen — see GOAL.md "Hosting/deployment
// target".
const requestLog = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    requestLog.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(ip, timestamps);
  return false;
}

function validate(payload: Partial<ContactPayload>): string | null {
  if (payload.company) return "Spam detected.";
  if (
    !payload.name ||
    payload.name.trim().length === 0 ||
    payload.name.length > 100
  ) {
    return "Please provide a valid name.";
  }
  if (
    !payload.email ||
    payload.email.length > 200 ||
    !EMAIL_PATTERN.test(payload.email)
  ) {
    return "Please provide a valid email address.";
  }
  if (
    !payload.subject ||
    payload.subject.trim().length === 0 ||
    payload.subject.length > 150
  ) {
    return "Please provide a subject.";
  }
  if (
    !payload.message ||
    payload.message.trim().length === 0 ||
    payload.message.length > 2000
  ) {
    return "Please provide a message.";
  }
  return null;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let payload: Partial<ContactPayload>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const validationError = validate(payload);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  // No mail/CRM destination configured yet (see GOAL.md "Contact method").
  // Logging server-side for now; wire up real delivery once that's decided.
  // A single formatted string is used rather than extra console args, since
  // some log capture setups don't reliably serialize object arguments.
  console.info(
    `Contact form submission: name="${payload.name}" email="${payload.email}" subject="${payload.subject}"`
  );

  return NextResponse.json({ ok: true });
}
