export function intRac(n: number, guess: number): number {
  let count = 1;
  let xPrev = guess;
  let xNext = Math.floor((xPrev + n / xPrev) / 2);

  while (Math.abs(xPrev - xNext) >= 1) {
    count++;
    xPrev = xNext;
    xNext = Math.floor((xPrev + n / xPrev) / 2);
  }

  return count;
}
