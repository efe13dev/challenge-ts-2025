// biome-ignore lint/suspicious/noExplicitAny: i dont need to fix this
export function typeOfSum(a: any, b: any): string {
  return typeof (a + b); // good luck
}
