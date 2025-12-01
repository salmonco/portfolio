export const CAREER_DATA = [
  {
    id: 1,
    company: "카카오페이증권",
    position: "인턴",
    period: "2025.02 ~ 2025.07",
    description:
      "증권 탭 내 증권 홈페이지, 연금저축계좌, 펀드 페이지 등 다양한 서비스 유지보수 및 신규 서비스 개발",
    techStack: ["TypeScript", "Next.js", "React-Query", "MSW", "Storybook"],
    projects: [
      {
        title: "증권 서비스 유지보수",
        period: "2025.02 ~ 2025.03",
        description:
          "증권 탭 내 증권 홈페이지, 연금저축계좌, 펀드 페이지 등 다양한 서비스 유지보수",
      },
      {
        title: "연금저축계좌 서비스 유지보수",
        period: "2025.03 ~ 2025.06",
        description:
          "은퇴 준비 및 투자를 원하는 고객을 위한 연금저축계좌 서비스 유지보수",
        tasks: [
          "연금홈 콜드 케이스 A/B 테스트 수행",
          "과세제외 확인 및 환급 서비스 개발",
          "납입 관리 서비스 개선",
        ],
        achievements: ["매일 30~40건 들어오던 VOC를 0건으로 감소"],
      },
      {
        title: "ISA 서비스 오픈스펙 개발",
        period: "2025.06 ~ 2025.07",
        description:
          "세금 절감 및 투자 기회를 찾는 고객을 위한 ISA 서비스 오픈스펙 개발",
        tasks: ["계좌 관리, 입출금, 세금 절감 현황을 위한 화면 개발"],
      },
    ],
    activities: [
      "주식 목록에 React-Virtual 구현 가능성에 대한 연구 공유",
      "React Native를 활용한 Build-Measure-Learn: 린 스타트업 서적의 이론을 실제 프로젝트에 적용하는 방법에 대한 기술 토론 발표",
      "인남모(인턴이 남주는 모임): 동료 인턴들과 매주 인사이트를 공유하는 스터디 진행",
    ],
    team: "FE개발팀 · 연금펀드팀",
  },
  {
    id: 2,
    company: "인스타페이",
    position: "현장실습",
    period: "2023.12 ~ 2024.02",
    description: "사내 직원들이 사용하는 설문조사 폼 관리 시스템 개발·유지보수",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap 5", "Firebase"],
    projects: [
      {
        title: "설문조사 폼 관리 시스템",
        period: "2023.12 ~ 2024.02",
        description: "사내 직원용 설문조사 폼 관리 시스템 개발 및 유지보수",
        tasks: [
          "반응형 웹 개발에 100% 기여",
          "3주 만에 핵심 기능을 포함한 MVP 웹사이트 출시",
          "이후 20개 피드백을 반영한 지속적 업데이트 수행",
        ],
        achievements: [
          "설문의 커스텀 자유도와 복잡도 사이의 trade-off를 고려한 UX 개선",
        ],
      },
    ],
    activities: [],
    team: "서비스기획팀",
  },
  {
    id: 3,
    company: "그린월드",
    position: "현장실습",
    period: "2024.07 ~ 2024.08",
    description: "밸브 관개를 원격으로 제어하는 대시보드 SaaS 개발",
    techStack: ["TypeScript", "React", "WebSocket"],
    projects: [
      {
        title: "원격 제어 대시보드 개발",
        period: "2024.07 ~ 2024.08",
        description:
          "골프장 관리용 밸브 관개 시스템의 원격 제어 및 모니터링 기능 구현",
      },
    ],
    activities: [],
    team: "무선기술팀",
  },
];
