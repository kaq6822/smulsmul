# AGENTS.md

모바일 앱들의 랜딩·개인정보처리방침·이용약관·지원 페이지를 호스팅하는 GitHub Pages 사이트.
Astro v5 + Tailwind CSS v4(vite 플러그인), 정적 빌드, 한국어 기본 + `/en/` 영어.

## 핵심 규칙

- **배포 주소는 `https://kaq6822.github.io/smulsmul/`** (프로젝트 페이지, base `/smulsmul`). 저장소명은 `kaq6822/smulsmul`, 로컬 폴더명은 `smulsmul.github.io` — 혼동 주의.
- **내부 링크·에셋 경로에 base를 하드코딩하지 말 것.** 반드시 `src/lib/i18n.ts`의 `localizePath(path, lang)`(페이지 링크) / `withBase(path)`(에셋)를 사용. 콘텐츠 frontmatter에는 base 없이 `/images/...`로 작성.
- **`/apps/<slug>/privacy/` 등 법적 문서 URL은 스토어 심사에 제출된 영구 URL — 경로 변경 금지.** 방침 개정 시 본문과 frontmatter의 날짜만 갱신.
- 페이지는 ko/en 쌍으로 유지. UI 문자열은 `src/lib/i18n.ts`의 `ui`에 추가.
- 언어 자동 전환은 `BaseLayout.astro`의 인라인 스크립트가 처리(localStorage `smulsmul-lang` 선택 > 브라우저 언어, 비한국어 → `/en/`). 페이지를 ko/en 쌍으로 유지하지 않으면 리다이렉트가 404로 떨어짐.
- `main` push 시 GitHub Actions가 자동 배포함. push 전 `npm run build`로 검증.
- 커밋 메시지는 **Conventional Commits**(`feat:`, `fix:`, `docs:`, `chore:` 등)를 따르고, 성격이 다른 변경은 커밋을 분리.

## 구조

- `src/content/apps/<slug>/{ko,en}.md` — 앱 메타데이터(frontmatter) + 랜딩 본문. `status: coming-soon`이면 홈 카드만 생성되고 서브 페이지는 안 만들어짐.
- `src/content/legal/<slug>/{privacy,terms}.{ko,en}.md` — 법적 문서. id에 점(`.`)을 유지하기 위해 `content.config.ts`의 glob 로더에 커스텀 `generateId`가 있음 — 제거 금지.
- `src/pages/` 라우트는 얇은 래퍼이고 실제 화면은 `src/layouts/`(AppLanding, LegalPage, SupportPage, HomePage), 경로 생성은 `src/lib/routes.ts`.
- 앱 이미지는 `public/images/<slug>/`.

## 새 앱 추가

apps ko/en md + legal 4개 md + 이미지 추가가 전부. 코드 수정 불필요. frontmatter 필수 항목은 기존 `colorwalk` 참고.

## 검증

```bash
npm run build   # 빌드 실패·누락 라우트 확인 (legal 문서 누락 시 "Entry ... not found" 경고)
```

빌드 후 dist의 링크가 `/smulsmul/`로 시작하는지 확인하면 base 누락을 잡을 수 있음.
