export function rot90Clock(strng: string): string {
  if (!strng) { return ''; }

  const lines = strng.split('\n');
  const n = lines.length;
  const matrix = lines.map((line) => line.split(''));
  const result = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(''));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }

  return result.map((row) => row.join('')).join('\n');
}

export function diag1Sym(strng: string): string {
  if (!strng) { return ''; }

  const lines = strng.split('\n');
  const n = lines.length;
  const matrix = lines.map((line) => line.split(''));
  const result = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(''));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result.map((row) => row.join('')).join('\n');
}

export function selfieAndDiag1(strng: string): string {
  if (!strng) { return ''; }

  const original = strng.split('\n');
  const diagonal = diag1Sym(strng).split('\n');

  return original.map((line, i) => `${line}|${diagonal[i]}`).join('\n');
}

export function oper(fct: (s: string) => string, s: string): string {
  return fct(s);
}
