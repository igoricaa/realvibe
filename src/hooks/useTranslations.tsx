import { useTranslations } from 'next-intl';

type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

type ExtendedTranslation<T = string> = ReturnType<typeof useTranslations<T>> & {
  has?(key: T): boolean;
};

export function useTranslation(page: string) {
  const t: ExtendedTranslation = useTranslations(page);
  t.has = (key) => t.raw(key) !== `${page}.${key}`;
  return t as RequiredFields<ExtendedTranslation, 'has'>;
}
