const windowMs = 10 * 60 * 1000;
const maxRequests = 5;
const requests = new Map<string, number[]>();

export function isRateLimited(identifier: string) {
  const now = Date.now();
  const recent = (requests.get(identifier) ?? []).filter(
    (timestamp) => now - timestamp < windowMs,
  );

  if (recent.length >= maxRequests) {
    requests.set(identifier, recent);
    return true;
  }

  recent.push(now);
  requests.set(identifier, recent);
  return false;
}
