export function remove(s: string): string {
  return s.endsWith('!') ? s.slice(0, -1) : s;
}
