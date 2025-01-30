const vowels = 'aeiou';

export const sortVowels = (str?: number | string | null): string =>
  typeof str === 'number' || str === null || str === undefined
    ? ''
    : str
        .split('')
        .map((char) =>
          vowels.includes(char.toLowerCase()) ? `|${char}` : `${char}|`,
        )
        .join('\n');
