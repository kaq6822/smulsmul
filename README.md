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
/smulsmul/apps/<app>/billing/     유료서비스·결제 약관 (문서가 있는 앱만)
/smulsmul/apps/<app>/operations/  운영·장애 대응 정책 (문서가 있는 앱만)
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

소개·정책을 먼저 공개할 앱은 `status: preview`를 사용합니다. 홈 카드와 소개 페이지에 출시 준비 상태가 표시되며 법적 문서와 지원 페이지도 생성됩니다. 실제 스토어 URL이 없는 경우 다운로드 버튼은 표시하지 않습니다. `availabilityNote`로 현재 이용 가능 범위를 안내할 수 있습니다.

법적 문서의 `status: draft`는 시행 전 초안 안내를 표시하며 `effectiveDate`를 요구하지 않습니다. 정식 시행 시 실제 운영과 문구를 대조한 뒤 `status: published`와 확정된 `effectiveDate`를 설정합니다. 기존 문서는 기본적으로 `published`이며 시행일이 필수입니다.

## 말꼬 출시 준비

말꼬 소개·지원 및 4종 정책을 한국어·영어로 제공합니다. 사업자·문의처는 기존 스물스물 정보를 사용하며, 유료 결제는 아직 제공하지 않는 것으로 안내합니다. 현재 문서는 시행 전 초안입니다.

API 업체·국외 이전·삭제 절차 등 시행 전에 확정할 사항과 검토 근거는 [말꼬 약관 시행 체크리스트](docs/malkko-launch-policy-checklist.md)에 정리되어 있습니다. 이 체크리스트는 정적 사이트 페이지로 배포되지 않습니다.

## 개발

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성
```
