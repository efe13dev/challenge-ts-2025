export function uniqueInOrder<T>(sequence: string | T[]): T[] {
  if (!sequence) {
    return [];
  }

  const arr = typeof sequence === "string" ? sequence.split("") : sequence;
  const result: T[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      result.push(arr[i] as T);
    }
  }

  return result;
}
