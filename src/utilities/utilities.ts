export const hasTranslation = (t: any, key: string, slug: string) => {
  const value = t.raw(key);
  const wholeKey = `portfolio.${slug}.${key}`;

  return value !== wholeKey;
};
