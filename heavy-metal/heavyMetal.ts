// biome-ignore lint/style/useNamingConvention: i dont need this
export function heavyMetalUmlauts(boringText: string): string {
  const replacements: Record<string, string> = {
    A: "Ä",
    E: "Ë",
    I: "Ï",
    O: "Ö",
    U: "Ü",
    Y: "Ÿ",
    a: "ä",
    e: "ë",
    i: "ï",
    o: "ö",
    u: "ü",
    y: "ÿ",
  };

  return boringText.replace(/[AEIOUYaeiouy]/g, (char) => replacements[char] || char);
}
