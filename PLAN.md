# smulsmul.github.io 구축 계획

모바일 앱들의 랜딩 페이지와 개인정보처리방침 등 공개 문서를 호스팅하는 GitHub Pages 사이트.

## 1. 목표

- **루트 페이지**: 모든 앱(프로젝트)으로 이동할 수 있는 허브(카드 목록형).
- **앱별 서브 페이지**: 랜딩 페이지 + 개인정보처리방침 + 이용약관 + 지원(문의) 페이지.
- **이중 언어**: 한국어(기본) + 영어. App Store / Google Play 심사 제출용 URL로 사용 가능해야 함.
- **확장성**: 새 앱 추가가 "콘텐츠 파일 추가"만으로 끝나는 구조.

## 2. 기술 스택

| 항목 | 선택 | 비고 |
|---|---|---|
| 프레임워크 | Astro (v5) | 정적 출력, content collections, 내장 i18n 라우팅 |
| 스타일 | Tailwind CSS | 공통 디자인 시스템, 법적 문서는 typography(prose) 스타일 |
| 배포 | GitHub Actions → GitHub Pages | 공식 `withastro/action` 사용, `main` push 시 자동 배포 |
| 도메인 | https://smulsmul.github.io | user site이므로 base path 없음 |

## 3. URL 구조 (확정 후 변경 금지 — 스토어 심사에 등록되는 주소)

```
/                        루트 허브 (한국어)
/en/                     루트 허브 (영어)
/apps/<app>/             앱 랜딩 (ko)
/apps/<app>/privacy/     개인정보처리방침 (ko)
/apps/<app>/terms/       이용약관 (ko)
/apps/<app>/support/     지원·문의 (ko)
/en/apps/<app>/...       위 페이지들의 영어판
```

- `<app>`은 소문자 kebab-case 슬러그 (예: `my-todo-app`).
- 개인정보처리방침 URL은 스토어에 제출되므로 **영구 URL**로 취급. 개정 시 URL은 유지하고 본문의 시행일/개정 이력만 갱신.

## 4. 콘텐츠 모델 (Astro Content Collections)

```
src/content/
├── apps/                  # 앱 메타데이터 + 랜딩 본문
│   ├── <app>/ko.md
│   └── <app>/en.md
└── legal/                 # 법적 문서 (Markdown)
    └── <app>/
        ├── privacy.ko.md / privacy.en.md
        └── terms.ko.md   / terms.en.md
```

- `apps` 스키마(frontmatter): 앱 이름, 태그라인, 설명, 아이콘 경로, 스크린샷 목록, App Store / Play Store 링크, 지원 이메일, 출시 상태, 정렬 순서.
- `legal` 스키마: 문서 종류, 시행일, 최종 개정일, 개정 이력.
- 스키마는 zod로 검증 → 필수 항목 누락 시 빌드 실패로 조기 발견.

## 5. 페이지·컴포넌트 구성

| 페이지 | 내용 |
|---|---|
| 루트 허브 | 소개 한 줄 + 앱 카드 그리드(아이콘, 이름, 태그라인, 스토어 배지) |
| 앱 랜딩 | 히어로(아이콘·이름·태그라인·스토어 버튼) → 기능 소개 → 스크린샷 → 푸터에 legal 링크 |
| 법적 문서 | 공통 prose 레이아웃, 시행일 표기, 목차(선택) |
| 지원 페이지 | 문의 이메일, FAQ(선택) |
| 404 | 루트로 안내 |

공통 컴포넌트: 헤더(사이트 로고, 언어 토글 ko↔en), 푸터(저작권, 연락처), 스토어 배지, 앱 카드.

## 6. 단계별 실행 계획

1. **스캐폴딩**: `npm create astro` + Tailwind + i18n 설정(`defaultLocale: ko`, `locales: [ko, en]`), `.gitignore`, 기본 레이아웃.
2. **배포 파이프라인 우선 구축**: GitHub Actions 워크플로 작성 → "Hello" 수준의 사이트를 먼저 배포해 Pages 설정(Source: GitHub Actions) 검증.
3. **디자인 시스템**: 색상·타이포·공통 레이아웃, 헤더/푸터, 언어 토글.
4. **콘텐츠 스키마 정의** + 실제 앱 3개 이상의 메타데이터 입력 (앱 이름·스토어 링크·아이콘 필요 → 사용자 제공).
5. **루트 허브 페이지** (ko/en).
6. **앱 랜딩 템플릿** — 동적 라우트 `src/pages/apps/[app]/index.astro` 하나로 전 앱 커버.
7. **법적 문서 템플릿 + 초안**: 앱별 개인정보처리방침(수집 항목·목적·보관 기간·제3자 제공·처리 위탁·연락처), 이용약관. 앱마다 수집 데이터가 다르므로 앱별 확인 필요.
8. **SEO·마무리**: sitemap, robots.txt, OG 메타·파비콘, `hreflang` 태그, 404.
9. **검증**: `astro build` + `astro check`, 내부 링크 체크, 모바일 뷰 확인(스토어 심사자는 모바일로 열어볼 가능성 높음).

## 7. 새 앱 추가 절차 (운영 단계)

1. `src/content/apps/<new-app>/ko.md`, `en.md` 작성
2. `src/content/legal/<new-app>/` 아래 privacy/terms 작성
3. 아이콘·스크린샷을 `public/images/<new-app>/`에 추가
4. push → 자동 배포. 코드 수정 불필요.

## 8. 결정 필요 사항 (사용자 입력)

- [ ] 앱 목록: 이름(한/영), 슬러그, 스토어 링크, 한 줄 소개, 아이콘·스크린샷 파일
- [ ] 앱별 개인정보 수집 항목(광고 SDK, 분석 도구, 계정 여부 등) — 방침 초안 작성에 필수
- [ ] 지원 문의 이메일 주소
- [ ] 사이트 전체 브랜드명/톤 (예: "smulsmul" 그대로 사용 여부)
