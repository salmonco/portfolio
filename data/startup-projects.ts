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
      "랜딩페이지 사전등록 1명 유치",
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
      {
        question: "사전등록이 1명인데 괜찮나요?",
        answer:
          "극소수긴 하지만 MVP를 보여주기 전까지는 판단하기 어렵다고 생각합니다. 사전등록을 만든 이유는 고객과의 마찰을 통해 니즈를 검증하기 위함입니다.",
      },
    ],
  },
  {
    id: 2,
    title: "레시피 암기 앱",
    period: {
      start: "2025.11",
      end: null,
    },
    status: "MVP 개발 완료",
    summary: "알바생을 위한 레시피 암기 앱",
    achievements: ["출시 후 15명의 사용자 유치"],
    techStack: [
      "TypeScript",
      "React Native",
      "Node.js",
      "tRPC",
      "Prisma",
      "Supabase",
      "AWS",
      "LangChain",
      "OpenAI API",
    ],
    links: {
      web: "https://slashpage.com/recipflash",
      ios: "https://apps.apple.com/kr/app/%EB%A0%88%EC%8B%9C%ED%94%BC-%EC%99%B8%EC%9A%B0%EA%B8%B0/id6755034677",
      android: "",
      github: "https://github.com/salmonco/recipflash",
    },
    purpose: "레시피 외우기 게임을 소개한다.",
    background:
      "신입 알바생은 레시피를 게임처럼 외우고 싶지만 게임세트를 생성하는 과정이 번거롭다.",
    valueProposition: [
      "레시피를 외우고 싶은 신입 알바생은 게임세트를 간편하게 생성하기 위해 레시피 파일을 업로드하면 자동으로 플래시카드를 생성해주는 이 메뉴 자동 생성 기능을 고용한다.",
      "레시피를 외우고 싶은 고객은 게임처럼 재미있게 레시피를 외우기 위해 이 플래시카드 랜덤 암기 기능을 고용한다.",
    ],
    principles: [
      "고객은 레시피를 게임처럼 재밌게 외우는 것을 가장 중요하게 생각한다.",
    ],
    goals: [
      "인당 평균 게임 수행 횟수가 2회일 것이다.",
      "7일차 리텐션이 30%일 것이다.",
    ],
    metrics: [
      {
        metric: "인당 평균 게임 수행 횟수",
        target: "2회",
        reason: "사용자가 서비스를 실제로 활용하는지 측정",
        method: "[랜덤 외우기] 버튼 클릭수",
      },
      {
        metric: "7일차 리텐션",
        target: "30%",
        reason: "서비스의 지속 가능성 확인",
        method: "Amplitude - new user",
      },
    ],
    roadmap: [
      {
        stage: "1단계 (MVP)",
        content: "AI 낱말카드 생성, 낱말카드 맞추기 게임",
        eta: "2025.11.10",
        status: "✅ Done",
      },
      {
        stage: "2단계",
        content:
          "앱내 광고 달기, 동선 시뮬레이션 (동선 맵 제작하고 맵에 재료 배치해서 동선과 재료를 클릭해서 레시피 외우는 타이쿤 게임)",
        eta: "2026.XX.XX",
        status: "🟡 Yellow",
      },
      {
        stage: "3단계",
        content:
          "동선 최적화 서비스 (어느 재료가 가장 많이 손에 닿는다, 그래서 작업대와의 거리를 줄이면 좋겠다 등등)",
        eta: "2026.XX.XX",
        status: "🔴 Red (리소스 확보 필요)",
      },
    ],
    faq: [
      {
        question: "BM은 뭔가요?",
        answer:
          "초기에 알바생 대상 B2C로 데이터 쌓아서 → 프랜차이즈 대상 B2B로 구독료를 얻고자 합니다. 초기에는 광고(리워드, 전면)로 MAU 확보 및 업장 데이터를 확보하고, 중기에는 점주 대상 구독(9,900~19,900원/월)으로 교육/운영 효율화를 제공하며, 장기적으로는 프랜차이즈 대상 B2B SaaS(월 100~500만원)로 표준화 및 고정 매출을 확보할 계획입니다.",
      },
    ],
  },
  {
    id: 3,
    title: "내일모래",
    period: {
      start: "2024.11",
      end: "2025.08",
    },
    status: "중단",
    summary: "자립준비청년을 위한 목소리 봉사 플랫폼",
    achievements: [
      "해커톤 수상",
      "자준청 2,500명 중 22명 앱 설치",
      "7일차 리텐션 17% 기록",
    ],
    techStack: ["TypeScript", "React Native", "React-Query", "TailwindCSS"],
    links: {
      web: "",
      ios: "https://apps.apple.com/kr/app/%EB%82%B4%EC%9D%BC%EB%AA%A8%EB%9E%98/id6744867439",
      android:
        "https://play.google.com/store/apps/details?id=com.jeong.naeilmorae",
      github: "https://github.com/9oormthon-univ/2024_DANPOONG_TEAM_22_FE",
    },
    purpose:
      "자립준비청년들에게 목소리를 통한 정서적 지원과 연결을 제공하는 봉사 플랫폼을 만들고자 했습니다.",
    background:
      "8년차 자립준비청년 인터뷰(2024.11)를 통해 자립준비청년들이 겪는 정서적 고립 문제를 발견했습니다. 이들에게 필요한 것은 단순한 물질적 지원이 아닌, 지속적인 관심과 응원이었습니다.",
    valueProposition: [
      "자립준비청년은 언제든지 응원의 목소리를 들을 수 있습니다",
      "봉사자는 간편하게 목소리로 응원을 전달할 수 있습니다",
      "비대면으로도 따뜻한 연결을 만들 수 있습니다",
    ],
    principles: [
      "자립준비청년의 프라이버시를 최우선으로 보호합니다",
      "목소리 녹음과 듣기 기능을 최대한 간편하게 만듭니다",
    ],
    goals: ["7일차 리텐션 30% 달성", "월간 활성 사용자 100명 달성"],
    metrics: [
      {
        metric: "7일차 리텐션",
        target: "30%",
        reason: "서비스의 핵심 가치를 경험했는지 측정",
        method: "앱 설치 후 7일째 재방문율 추적",
      },
      {
        metric: "앱 설치 수",
        target: "100명",
        reason: "초기 시장 반응 확인",
        method: "앱스토어 다운로드 수 집계",
      },
    ],
    roadmap: [
      {
        stage: "1단계 (MVP)",
        content: "목소리 녹음 및 듣기 기능 개발, 해커톤 수상",
        eta: "2024.11",
        status: "🟢 Green",
      },
      {
        stage: "2단계",
        content: "자준청 2,500명 중 22명 앱 설치, 7일차 리텐션 17% 기록",
        eta: "2025.07",
        status: "🟢 Green",
      },
      {
        stage: "3단계",
        content: "3년차 자준청 인터뷰 진행, 리텐션 구조 개선 필요성 확인",
        eta: "2025.08",
        status: "🟡 Yellow (피봇 필요)",
      },
    ],
    faq: [
      {
        question: "왜 리텐션이 낮았나요?",
        answer:
          "핵심 기능(목소리 녹음·듣기)만으로는 사용자에게 지속적으로 돌아올 인센티브가 부족했습니다. 리텐션 구조를 근본적으로 변경할 필요가 있었습니다.",
      },
      {
        question: "다음 계획은 무엇인가요?",
        answer:
          "사용자 인터뷰를 바탕으로 서비스 방향을 재설정(피봇)하고, 더 강력한 리텐션 구조를 설계할 예정입니다.",
      },
    ],
  },
];
