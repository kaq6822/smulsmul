import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 앱 메타데이터 + 랜딩 본문
// 파일 경로: src/content/apps/<slug>/<lang>.md  (id 예: "colorwalk/ko")
const apps = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/apps' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    icon: z.string().optional(),
    screenshots: z.array(z.string()).default([]),
    playStoreUrl: z.string().url().optional(),
    appStoreUrl: z.string().url().optional(),
    supportEmail: z.string().email(),
    status: z.enum(['released', 'preview', 'coming-soon']).default('released'),
    availabilityNote: z.string().optional(),
    order: z.number().default(0),
    themeColor: z.string().default('#6366f1'),
    features: z
      .array(z.object({ title: z.string(), description: z.string() }))
      .default([]),
  }),
});

// 법적 문서 (개인정보처리방침, 이용약관, 결제·운영 정책)
// 파일 경로: src/content/legal/<slug>/<type>.<lang>.md  (id 예: "colorwalk/privacy.ko")
const legal = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/legal',
    // 기본 slug화는 "privacy.ko" → "privacyko"로 점을 지우므로 경로를 그대로 id로 사용
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z
    .object({
      title: z.string(),
      type: z.enum(['privacy', 'terms', 'billing', 'operations']),
      status: z.enum(['published', 'draft']).default('published'),
      effectiveDate: z.coerce.date().optional(),
      lastUpdated: z.coerce.date().optional(),
    })
    .refine((doc) => doc.status === 'draft' || Boolean(doc.effectiveDate), {
      message: '시행 중인 법적 문서에는 effectiveDate가 필요합니다.',
    }),
});

// 지원 페이지 본문 (선택 사항 — 문서가 없는 앱은 기본 문의 안내만 표시된다)
// 파일 경로: src/content/support/<slug>/<lang>.md  (id 예: "colorwalk/ko")
const support = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/support' }),
  schema: z.object({
    lastUpdated: z.coerce.date().optional(),
  }),
});

export const collections = { apps, legal, support };
