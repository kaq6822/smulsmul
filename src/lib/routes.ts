import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

export type LegalType = CollectionEntry<'legal'>['data']['type'];

/** 출시·미리보기 앱의 언어별 경로 목록 (placeholder 앱은 제외한다) */
export async function appPaths(lang: Lang) {
  const entries = await getCollection(
    'apps',
    (e) => e.id.endsWith(`/${lang}`) && e.data.status !== 'coming-soon',
  );
  return entries.map((entry) => ({
    params: { app: entry.id.split('/')[0] },
    props: { entry },
  }));
}

/** 앱의 법적 문서 경로 목록 (해당 언어 문서가 있는 앱만) */
export async function legalPaths(lang: Lang, type: LegalType) {
  const apps = await appPaths(lang);
  const paths: {
    params: { app: string };
    props: { entry: CollectionEntry<'legal'>; appEntry: CollectionEntry<'apps'> };
  }[] = [];
  const docs = await getCollection('legal', (e) => e.data.type === type);
  for (const { params, props } of apps) {
    const entry = docs.find((doc) => doc.id === `${params.app}/${type}.${lang}`);
    if (entry) paths.push({ params, props: { entry, appEntry: props.entry } });
    else if (type === 'privacy' || type === 'terms') {
      console.warn(`Entry ${params.app}/${type}.${lang} not found.`);
    }
  }
  return paths;
}

/** 실제 문서만 탐색에 표시하고 다른 앱에 빈 링크를 만들지 않는다. */
export async function legalDocuments(app: string, lang: Lang) {
  const order: LegalType[] = ['privacy', 'terms', 'billing', 'operations'];
  return (
    await getCollection('legal', (e) => e.id.startsWith(`${app}/`) && e.id.endsWith(`.${lang}`))
  ).sort((a, b) => order.indexOf(a.data.type) - order.indexOf(b.data.type));
}
