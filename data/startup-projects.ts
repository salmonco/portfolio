import type { StartupProject } from "@/types/startup-project";

export const STARTUP_PROJECT: StartupProject[] = [
  {
    id: 1,
    title: "우학동",
    period: {
      start: "2024.09",
      end: null,
    },
    status: "MVP 개발 중",
    summary: "동아리 임원진을 위한 동아리 관리 자동화 SaaS",
    achievements: [
      "2024-2 AJOU SOFTCON 캡스톤디자인 개발부문 최우수상(1위)",
      "BM 경진대회 수상",
      "동아리 관리 시스템 특허 출원",
      "[사전등록 받는 중](https://www.woohakdong.com)",
    ],
    techStack: [
      "TypeScript",
      "React",
      "Next.js",
      "React-Query",
      "TailwindCSS",
      "AWS",
    ],
    links: {
      web: "https://www.woohakdong.com",
      ios: "",
      android: "",
      github: "https://github.com/team8901/woohakdong-frontend",
    },
    purpose:
      "동아리 임원진을 위한 동아리 관리 자동화 SaaS 우학동을 소개한다. 본 문서를 통해 해당 기능이 왜 필요한지, 어떤 고객 가치를 제공하는지, 그리고 개발 우선순위와 목표 지표가 무엇인지 빠르게 파악할 수 있다.",
    background:
      "실제로 팀원 중 한 명은 여러 동아리의 임원진을 경험해보았고, 매년 반복되는 동아리 관리에 대해 불편함을 느껴 본 서비스를 기획하게 되었다. 풀고자 하는 동아리 관리의 불편함은 다음과 같다: 1) 귀찮은 동아리 물품 관리 및 대여, 2) 전파가 어렵고 흩어져 있는 일정 및 활동 기록, 3) 복잡한 동아리 신규 회원 등록 절차, 4) 귀찮은 동아리 회원 관리 및 연락",
    valueProposition: [
      "동아리 물품을 관리하고 싶어 들어온 고객은 실시간 물품 대여 현황을 한눈에 확인하기 위해 이 자동화된 물품 관리 기능을 고용한다.",
      "동아리 활동을 관리하고 싶어 들어온 고객은 일정 및 활동을 기록하고 동아리원에게 효과적으로 전파하기 위해 이 활동 관리 기능을 고용한다.",
      "동아리 신규 회원을 관리하고 싶어 들어온 고객은 간편하게 모집폼을 만들기 위해 이 신규 회원 관리 기능을 고용한다.",
      "동아리 회원을 관리하고 싶어 들어온 고객은 동아리원 정보를 조회하고 한번에 연락을 취하기 위해 이 회원 관리 기능을 고용한다.",
    ],
    principles: [
      "고객은 동아리 관리 업무를 자동화하는 걸 가장 중요하게 생각한다. 동아리 운영에 필요한 물품 대여 과정 및 활동 기록의 전파를 자동화한다.",
      "동아리는 건전하게 운영되어야 한다. 불건전한 목적의 동아리는 관리자가 철저하게 제재한다. 또한 검증 안 된 회원을 받아들여서는 안 된다.",
    ],
    goals: [
      "동아리당 평균 종합 활동 수가 15개일 것이다.",
      "7일차 리텐션이 30%일 것이다.",
    ],
    metrics: [
      {
        metric: "동아리당 평균 종합 활동 수",
        target: "15개",
        reason: "서비스 활용도 측정",
        method: "DB 테이블 행 카운트 (물품/공지/일정/활동 기록 합산)",
      },
      {
        metric: "7일차 리텐션",
        target: "30%",
        reason: "서비스 지속 가능성 확인",
        method: "Amplitude",
      },
      {
        metric: "신규 동아리 가입 수",
        target: "10개",
        reason: "초기 시장 반응 확인",
        method: "DB 테이블 행 카운트",
      },
      {
        metric: "동아리당 평균 회원 수",
        target: "60명",
        reason: "타깃 동아리 규모 검증",
        method: "DB 테이블 행 카운트",
      },
    ],
    roadmap: [
      {
        stage: "1단계 (MVP)",
        content:
          "신규 회원 관리(회비납부 제외), 물품 관리, 활동 관리(공지사항, 일정, 활동 기록), 회원 관리",
        eta: "2025.11.30",
        status: "🟢 Green",
      },
      {
        stage: "2단계",
        content: "리텐션 개선, 구독 BM",
        eta: "2026.02.28",
        status: "🟡 Yellow",
      },
      {
        stage: "3단계",
        content: "광고 BM",
        eta: "2026.XX.XX",
        status: "🔴 Red (리소스 확보 필요)",
      },
    ],
    faq: [
      {
        question: "타깃은 누구인가요?",
        answer:
          "대학교 동아리 임원진입니다. 매년 반복되는 동아리 관리 업무를 자동화하여 효율성을 높이고자 하는 고객을 타깃으로 합니다.",
      },
    ],
  },
];
