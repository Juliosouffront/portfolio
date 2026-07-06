import { createHash, timingSafeEqual } from "crypto";

const WORK_PROJECT_PASSWORD = process.env.WORK_PROJECT_PASSWORD ?? "julio-work-2026";
const WORK_AUTH_SECRET = process.env.WORK_AUTH_SECRET ?? "hellojulio-work-auth-secret";

export const WORK_AUTH_COOKIE = "work-project-access";

export function createWorkAuthToken() {
  return createHash("sha256").update(`${WORK_AUTH_SECRET}:${WORK_PROJECT_PASSWORD}`).digest("hex");
}

export function isValidWorkAuthToken(token: string | undefined) {
  if (!token) return false;

  const expected = createWorkAuthToken();

  if (token.length !== expected.length) return false;

  try {
    return timingSafeEqual(Buffer.from(token), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function verifyWorkPassword(password: string) {
  if (password.length !== WORK_PROJECT_PASSWORD.length) return false;

  try {
    return timingSafeEqual(Buffer.from(password), Buffer.from(WORK_PROJECT_PASSWORD));
  } catch {
    return false;
  }
}
