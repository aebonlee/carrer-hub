/**
 * DreamIT Career Hub - 사이트 설정 파일
 * 커리어 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'career-hub',
  name: 'DreamIT Career Hub',
  nameKo: '드림아이티 커리어학습사이트',
  description: 'DreamIT Career Hub - 커리어 학습사이트 허브. 취업, 진로, 역량개발 등 3개 커리어 학습 플랫폼',
  url: 'https://career-hub.dreamitbiz.com',
  dbPrefix: 'crh_',

  parentSite: { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },

  brand: {
    parts: [
      { text: 'Career', className: 'brand-biz' },
      { text: ' Hub', className: 'brand-dream' },
    ]
  },

  themeColor: '#0369A1',

  company: {
    name: '드림아이티비즈(DreamIT Biz)',
    ceo: '이애본',
    bizNumber: '601-45-20154',
    salesNumber: '제2024-수원팔달-0584호',
    address: '경기도 수원시 팔달구 매산로 45, 419호',
    email: 'aebon@dreamitbiz.com',
    phone: '010-3700-0629',
    kakao: 'aebon',
    businessHours: '평일: 09:00 ~ 18:00',
  },

  features: { shop: true, community: true, search: true, auth: true, license: true },

  colors: [
    { name: 'blue', color: '#0369A1' },
    { name: 'red', color: '#C8102E' },
    { name: 'green', color: '#00855A' },
    { name: 'purple', color: '#8B1AC8' },
    { name: 'orange', color: '#C87200' },
  ],

  categories: [
    { id: 'career', name: '취업/진로', nameEn: 'Career Development', icon: 'fa-solid fa-briefcase', path: '/courses/career' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.career', path: '/courses/career', activePath: '/courses/career',
      dropdown: [
        { path: '/courses/jobpath', labelKey: 'site.nav.jobpath' },
        { path: '/courses/career-dev', labelKey: 'site.nav.careerDev' },
        { path: '/courses/competency', labelKey: 'site.nav.competency' },
      ]
    },
    {
      labelKey: 'site.nav.franchise', path: '/franchise', activePath: '/franchise',
      dropdown: [
        { path: '/pricing', labelKey: 'site.nav.pricing' },
        { path: '/franchise', labelKey: 'site.nav.franchiseInquiry' },
        { path: '/shop', labelKey: 'shop.title' },
      ]
    },
    {
      labelKey: 'site.nav.community', path: '/about', activePath: '/about',
      dropdown: [
        { path: '/about', labelKey: 'site.nav.aboutHub' },
        { path: '/notice', labelKey: 'site.nav.notice' },
        { path: '/qna', labelKey: 'site.nav.qna' },
      ]
    },
  ],

  footerLinks: [
    { path: '/courses/career', labelKey: 'site.nav.career' },
    { path: '/franchise', labelKey: 'site.nav.franchise' },
    { path: '/about', labelKey: 'site.nav.community' },
  ],

  familySites: [
    { name: 'DreamIT Edu Hub', url: 'https://edu-hub.dreamitbiz.com' },
    { name: 'DreamIT CS Hub', url: 'https://cs-hub.dreamitbiz.com' },
    { name: 'DreamIT Exam Hub', url: 'https://exam-hub.dreamitbiz.com' },
    { name: 'DreamIT Biz', url: 'https://www.dreamitbiz.com' },
  ],

  learningSites: [
    {
      id: 'jobpath', name: '취업 로드맵', nameEn: 'Job Path', url: 'https://jobpath.dreamitbiz.com',
      icon: 'fa-solid fa-road', color: '#2563EB', category: 'career',
      description: '취업 준비부터 합격까지, 체계적인 취업 로드맵을 학습합니다.',
      descriptionEn: 'Learn a systematic job preparation roadmap from preparation to success.',
      techStack: ['이력서', '면접', '자기소개서', '취업전략'], difficulty: 'beginner',
      curriculum: ['취업 시장 분석', '이력서 작성법', '자기소개서 전략', '면접 준비와 실전', '합격 후 직장생활'],
      curriculumEn: ['Job market analysis', 'Resume writing', 'Cover letter strategy', 'Interview preparation', 'Post-hire work life'],
      features: ['이력서 템플릿', '모의 면접', '취업 상담'],
      featuresEn: ['Resume templates', 'Mock interviews', 'Career counseling'],
      target: '취업 준비생, 이직 희망자', targetEn: 'Job seekers, career changers',
    },
    {
      id: 'career-dev', name: '경력개발', nameEn: 'Career Development', url: 'https://career.dreamitbiz.com',
      icon: 'fa-solid fa-chart-line', color: '#059669', category: 'career',
      description: '경력 개발과 진로 설계를 위한 체계적인 학습을 제공합니다.',
      descriptionEn: 'Provides systematic learning for career development and path design.',
      techStack: ['진로설계', '경력관리', '네트워킹', '리더십'], difficulty: 'intermediate',
      curriculum: ['진로 탐색과 자기 이해', '경력 개발 전략', '네트워킹과 멘토링', '리더십 스킬', '글로벌 커리어 설계'],
      curriculumEn: ['Career exploration and self-understanding', 'Career development strategy', 'Networking and mentoring', 'Leadership skills', 'Global career design'],
      features: ['커리어 상담', '멘토링 프로그램', '네트워킹 이벤트'],
      featuresEn: ['Career counseling', 'Mentoring program', 'Networking events'],
      target: '직장인, 경력 전환 희망자', targetEn: 'Professionals, career changers',
    },
    {
      id: 'competency', name: '역량개발', nameEn: 'Competency Development', url: 'https://competency.dreamitbiz.com',
      icon: 'fa-solid fa-star', color: '#7C3AED', category: 'career',
      description: '직무 역량 강화와 자기개발을 위한 학습 프로그램을 제공합니다.',
      descriptionEn: 'Provides learning programs for job competency enhancement and self-development.',
      techStack: ['직무역량', '소프트스킬', '프로젝트관리', '커뮤니케이션'], difficulty: 'intermediate',
      curriculum: ['핵심 직무 역량 진단', '커뮤니케이션 스킬', '프로젝트 관리', '문제 해결과 의사결정', '자기개발 전략'],
      curriculumEn: ['Core competency assessment', 'Communication skills', 'Project management', 'Problem solving and decision making', 'Self-development strategy'],
      features: ['역량 진단 도구', '실무 워크숍', '1:1 코칭'],
      featuresEn: ['Competency assessment tool', 'Practical workshops', '1:1 coaching'],
      target: '직장인, 리더 지망생', targetEn: 'Professionals, aspiring leaders',
    },
  ],
};

export default site;
