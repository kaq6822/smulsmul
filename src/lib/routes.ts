import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Lang } from './i18n';

/** 출시된 앱의 언어별 랜딩 경로 목록 (placeholder 앱은 서브 페이지를 만들지 않는다) */
export async function appPaths(lang: Lang) {
  const entries = await getCollection(
    'apps',
    (e) => e.id.endsWith(`/${lang}`) && e.data.status === 'released',
  );
  return entries.map((entry) => ({
    params: { app: entry.id.split('/')[0] },
    props: { entry },
  }));
}

/** 앱의 법적 문서 경로 목록 (해당 언어 문서가 있는 앱만) */
export async function legalPaths(lang: Lang, type: 'privacy' | 'terms') {
  const apps = await appPaths(lang);
  const paths: {
    params: { app: string };
    props: { entry: CollectionEntry<'legal'>; appEntry: CollectionEntry<'apps'> };
  }[] = [];
  for (const { params, props } of apps) {
    const entry = await getEntry('legal', `${params.app}/${type}.${lang}`);
    if (entry) paths.push({ params, props: { entry, appEntry: props.entry } });
  }
  return paths;
}
