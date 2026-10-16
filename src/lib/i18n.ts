export type Lang = 'ko' | 'en';

export const ui = {
  ko: {
    siteName: 'smulsmul',
    siteTagline: '일상을 조금 더 다채롭게 만드는 앱을 만듭니다.',
    siteDescription:
      'smulsmul의 모바일 앱 소개, 개인정보처리방침, 지원 페이지입니다.',
    apps: '앱',
    comingSoon: '준비 중',
    preview: '출시 준비',
    invitationEnquiry: '초대 이용 문의',
    viewDetails: '자세히 보기',
    features: '주요 기능',
    screenshots: '스크린샷',
    download: '다운로드',
    getOnPlayStore: 'Google Play에서 받기',
    getOnAppStore: 'App Store에서 받기',
    privacy: '개인정보처리방침',
    terms: '이용약관',
    billing: '유료서비스·결제 약관',
    operations: '서비스 운영·장애 대응 정책',
    policyNavigation: '약관 및 정책',
    draft: '출시 준비 초안',
    draftNotice:
      '아직 시행되지 않은 검토용 문서입니다. 확정된 내용과 시행일은 서비스 제공 전에 안내하며, 이 페이지를 열람하는 것만으로 약관이나 개인정보 처리에 동의한 것으로 보지 않습니다.',
    support: '지원 및 문의',
    contact: '문의하기',
    contactDescription:
      '앱 사용 중 불편한 점이나 제안하고 싶은 내용이 있다면 아래 이메일로 언제든지 연락해주세요.',
    responseNote: '문의는 확인 후 최대한 빠르게 답변드리겠습니다.',
    effectiveDate: '시행일',
    lastUpdated: '최종 개정일',
    backToApp: '앱 페이지로 돌아가기',
    backToHome: '홈으로 돌아가기',
    notFoundTitle: '페이지를 찾을 수 없습니다',
    notFoundDescription: '주소가 잘못되었거나 삭제된 페이지입니다.',
    langToggle: 'English',
    footerOwner: '스물스물',
    footerBusinessInfo: '상호 스물스물 · 대표 강범준 · 사업자등록번호 815-31-01725',
    footerRights: 'All rights reserved.',
  },
  en: {
    siteName: 'smulsmul',
    siteTagline: 'We build apps that add a little color to everyday life.',
    siteDescription:
      'Landing pages, privacy policies, and support for smulsmul mobile apps.',
    apps: 'Apps',
    comingSoon: 'Coming soon',
    preview: 'Preparing for launch',
    invitationEnquiry: 'Ask about an invitation',
    viewDetails: 'Learn more',
    features: 'Features',
    screenshots: 'Screenshots',
    download: 'Download',
    getOnPlayStore: 'Get it on Google Play',
    getOnAppStore: 'Download on the App Store',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    billing: 'Paid Service & Billing Terms',
    operations: 'Service Operations & Outage Policy',
    policyNavigation: 'Terms and policies',
    draft: 'Pre-launch draft',
    draftNotice:
      'This document is a draft and is not yet effective. Final terms and an effective date will be provided before service begins. Viewing this page does not constitute acceptance of terms or consent to personal data processing.',
    support: 'Support',
    contact: 'Contact us',
    contactDescription:
      'If you run into any issues or have suggestions, feel free to reach out via email below.',
    responseNote: 'We will get back to you as soon as possible.',
    effectiveDate: 'Effective date',
    lastUpdated: 'Last updated',
    backToApp: 'Back to app page',
    backToHome: 'Back to home',
    notFoundTitle: 'Page not found',
    notFoundDescription: 'The page you are looking for does not exist.',
    langToggle: '한국어',
    footerOwner: 'smulsmul',
    footerBusinessInfo:
      'smulsmul · Representative: Beomjun Kang · Business Registration No. 815-31-01725',
    footerRights: 'All rights reserved.',
  },
} as const;

export function t(lang: Lang) {
  return ui[lang];
}

/** 배포 base 경로 (예: '/smulsmul'). base 미설정 시 빈 문자열. */
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** 사이트 내부 절대 경로에 base 접두사를 붙인다. 예: withBase('/favicon.svg') → '/smulsmul/favicon.svg' */
export function withBase(path: string): string {
  return `${BASE}${path}`;
}

/** ko 기준 경로에 base와 언어 접두사를 붙인다. 예: localizePath('/apps/colorwalk/', 'en') → '/smulsmul/en/apps/colorwalk/' */
export function localizePath(path: string, lang: Lang): string {
  return withBase(lang === 'ko' ? path : `/en${path}`);
}

/** 현재 경로에서 base와 언어 접두사를 제거한 ko 기준 경로를 얻는다. */
export function basePathOf(pathname: string): string {
  let p = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  if (!p.startsWith('/')) p = `/${p}`;
  return p.startsWith('/en/') ? p.slice(3) : p === '/en' ? '/' : p;
}

export function formatDate(date: Date, lang: Lang): string {
  return lang === 'ko'
    ? `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`
    : date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
}
