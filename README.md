# smulsmul

smulsmul 모바일 앱들의 랜딩 페이지, 개인정보처리방침, 지원 페이지를 호스팅하는 GitHub Pages 사이트입니다.

- 사이트 주소: **https://kaq6822.github.io/smulsmul/**
- 프레임워크: [Astro](https://astro.build) + Tailwind CSS
- 언어: 한국어(기본) / 영어 (`/en/...`)
- 배포: `main` 브랜치 push 시 GitHub Actions로 자동 배포

## URL 구조 (base: `/smulsmul`)

```
/smulsmul/                        루트 허브 (앱 목록)
/smulsmul/apps/<app>/             앱 랜딩
/smulsmul/apps/<app>/privacy/     개인정보처리방침  ← 스토어 심사 제출용 영구 URL
/smulsmul/apps/<app>/terms/       이용약관
/smulsmul/apps/<app>/support/     지원·문의
/smulsmul/en/...                  영어판
```

내부 링크와 이미지 경로는 `src/lib/i18n.ts`의 `withBase()` / `localizePath()`를 통해 base 접두사가 자동으로 붙습니다. 콘텐츠 frontmatter에는 base 없이 `/images/...` 형태로 적으면 됩니다.

## 새 앱 추가 방법

1. `src/content/apps/<slug>/ko.md`, `en.md` 작성 (frontmatter는 기존 앱 참고)
2. `src/content/legal/<slug>/privacy.ko.md`, `privacy.en.md`, `terms.ko.md`, `terms.en.md` 작성
3. 아이콘·스크린샷을 `public/images/<slug>/`에 추가
4. push → 자동 배포

준비 중인 앱은 frontmatter에 `status: coming-soon`으로 두면 홈 카드에만 표시되고 서브 페이지는 생성되지 않습니다.

## 개발

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성
```
