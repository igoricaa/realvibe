export const hasTranslation = (
  key: string,
  t: any,
  slug: string,
  additionalParam?: string
) => {
  const value = t.raw(key);

  const additionalParamKey = additionalParam ? `${additionalParam}.` : '';
  const wholeKey = `services.${slug}.${additionalParamKey}${key}`;

  return value !== wholeKey;
};
