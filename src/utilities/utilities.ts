export const hasTranslation = (key: string, t: any, slug: string) => {
  const value = t.raw(key);
  return value !== `services.${slug}.hero.${key}` && value !== '';
};
