export function checkchoose(m: number, n: number): number {
  function binomial(n: number, k: number): number {
    if (k < 0 || k > n) return 0;
    if (k === 0 || k === n) return 1;
    let res = 1;

    for (let i = 1; i <= k; i++) {
      res = (res * (n - i + 1)) / i;
    }

    return res;
  }
  for (let x = 1; x <= n; x++) {
    if (binomial(n, x) === m) {
      return x;
    }
  }

  return -1;
}
