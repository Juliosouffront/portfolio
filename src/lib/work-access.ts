import { createHash, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { WORK_ACCESS_DEFAULT_PASSWORD } from "@/lib/work-access-config";

export const WORK_ACCESS_COOKIE = "work_access";

export function getWorkAccessPassword() {
  return process.env.WORK_ACCESS_PASSWORD ?? WORK_ACCESS_DEFAULT_PASSWORD;
}

export function createWorkAccessToken() {
  const secret = process.env.WORK_ACCESS_SECRET ?? getWorkAccessPassword();

  return createHash("sha256").update(`work-access:${secret}`).digest("hex");
}

export function verifyWorkAccessToken(token: string | undefined) {
  if (!token) return false;

  try {
    const expected = createWorkAccessToken();
    const actual = Buffer.from(token);
    const expectedBuffer = Buffer.from(expected);

    if (actual.length !== expectedBuffer.length) return false;

    return timingSafeEqual(actual, expectedBuffer);
  } catch {
    return false;
  }
}

export async function isWorkAccessGranted() {
  const cookieStore = await cookies();
  const token = cookieStore.get(WORK_ACCESS_COOKIE)?.value;

  return verifyWorkAccessToken(token);
}
