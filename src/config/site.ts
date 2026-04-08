/**
 * DreamIT Career Hub - 사이트 설정 파일
 * 커리어 학습사이트 허브의 브랜드, 메뉴, 학습사이트 정보를 정의합니다.
 */

import type { SiteConfig } from '../types';

const site: SiteConfig = {
  id: 'career-hub',
  name: 'DreamIT Career Hub',
  nameKo: '드림아이티 커리어학습사이트',
  description: 'DreamIT Career Hub - 커리어 학습사이트 허브. 취업, 진로, 역량개발, 커리어 서비스 등 6개 커리어 학습 플랫폼',
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
    { id: 'service', name: '커리어 서비스', nameEn: 'Career Services', icon: 'fa-solid fa-handshake', path: '/courses/service' },
  ],

  menuItems: [
    {
      labelKey: 'site.nav.career', path: '/courses/career', activePath: '/courses/career',
      dropdown: [
        { path: '/courses/career-dev', labelKey: 'site.nav.careerDev' },
      ]
    },
    {
      labelKey: 'site.nav.service', path: '/courses/service', activePath: '/courses/service',
      dropdown: [
        { path: '/courses/career-site', labelKey: 'site.nav.careerSite' },
        { path: '/courses/career-coaching', labelKey: 'site.nav.careerCoaching' },
        { path: '/courses/resume-coaching', labelKey: 'site.nav.resumeCoaching' },
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
    { path: '/courses/service', labelKey: 'site.nav.service' },
    { path: '/franchise', labelKey: 'site.nav.franchise' },
    { path: '/pricing', labelKey: 'site.nav.pricing' },
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
    // ── 커리어 서비스 (service) ──
    {
      id: 'career-site', name: '맞춤 커리어 사이트 제작', nameEn: 'Custom Career Site', url: '#', isService: true,
      icon: 'fa-solid fa-globe', color: '#0891B2', category: 'service', price: 50000,
      description: '개인 맞춤형 커리어 포트폴리오 사이트를 제작해 드리는 프리미엄 서비스입니다.',
      descriptionEn: 'A premium service that creates your personalized career portfolio website.',
      techStack: ['포트폴리오', '웹사이트', '브랜딩', '맞춤제작'], difficulty: 'beginner',
      curriculum: ['요구사항 분석 미팅', '디자인 시안 제작', '사이트 개발 및 배포', '콘텐츠 입력 지원', '유지보수 가이드 제공'],
      curriculumEn: ['Requirements analysis meeting', 'Design mockup creation', 'Site development and deployment', 'Content input support', 'Maintenance guide provided'],
      features: ['1:1 맞춤 제작', '반응형 디자인', '배포 포함'],
      featuresEn: ['1:1 custom creation', 'Responsive design', 'Deployment included'],
      target: '취업 준비생, 프리랜서, 커리어 전환 희망자', targetEn: 'Job seekers, freelancers, career changers',
    },
    {
      id: 'career-coaching', name: '1:1 커리어 코칭', nameEn: '1:1 Career Coaching', url: '#', isService: true,
      icon: 'fa-solid fa-user-tie', color: '#6D28D9', category: 'service',
      description: '전문 커리어 코치와 1:1 상담을 통해 진로 방향을 설계합니다.',
      descriptionEn: 'Design your career path through 1:1 consultation with a professional career coach.',
      techStack: ['1:1상담', '진로설계', '직무분석', '커리어전략'], difficulty: 'beginner',
      curriculum: ['커리어 진단과 자기분석', '직무 적합성 평가', '진로 방향 설계', '실행 계획 수립', '후속 관리 상담'],
      curriculumEn: ['Career diagnosis and self-analysis', 'Job suitability assessment', 'Career direction design', 'Action plan development', 'Follow-up consultation'],
      features: ['전문 코치 매칭', '맞춤 상담', '후속 관리'],
      featuresEn: ['Professional coach matching', 'Personalized consultation', 'Follow-up management'],
      target: '진로 고민이 있는 학생, 직장인', targetEn: 'Students and professionals with career concerns',
    },
    {
      id: 'resume-coaching', name: '이력서 & 자소서 코칭', nameEn: 'Resume & Cover Letter Coaching', url: '#', isService: true,
      icon: 'fa-solid fa-file-pen', color: '#DC2626', category: 'service',
      description: '전문가의 첨삭과 코칭을 통해 합격하는 이력서와 자기소개서를 완성합니다.',
      descriptionEn: 'Complete winning resumes and cover letters through expert review and coaching.',
      techStack: ['이력서', '자기소개서', '첨삭', '면접대비'], difficulty: 'beginner',
      curriculum: ['이력서 기본 구조 점검', '자기소개서 스토리 설계', '전문가 첨삭 1회', '면접 대비 핵심 포인트', '최종 완성본 전달'],
      curriculumEn: ['Resume structure review', 'Cover letter story design', 'Expert review session', 'Interview preparation key points', 'Final document delivery'],
      features: ['전문가 첨삭', '맞춤 코칭', '합격 사례 분석'],
      featuresEn: ['Expert review', 'Personalized coaching', 'Success case analysis'],
      target: '취업 준비생, 이직 희망자', targetEn: 'Job seekers, career changers',
    },
  ],
};

export default site;
