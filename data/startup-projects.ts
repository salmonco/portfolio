import { getStartupStatus } from "@/lib/project-utils";
import type { StartupProject } from "@/types/startup-project";

export const STARTUP_PROJECT: StartupProject[] = [
  {
    id: 1,
    title: "레시피 암기 앱",
    period: {
      start: "2025.11",
      end: null,
    },
    get status() {
      return getStartupStatus(this.period.start, this.period.end);
    },
    summary:
      "알바생을 위한 레시피 암기 앱. PDF 업로드만으로 AI가 자동으로 플래시카드를 생성하고, 게임처럼 재미있게 레시피를 외울 수 있습니다. 출시 후 15명의 사용자를 유치했습니다.",
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
    id: 2,
    title: "내일모래",
    period: {
      start: "2024.11",
      end: "2025.08",
    },
    get status() {
      return getStartupStatus(this.period.start, this.period.end);
    },
    summary:
      "자립준비청년을 위한 목소리 봉사 플랫폼. 해커톤 수상 후 2,500명 중 22명이 앱을 설치했으며, 7일차 리텐션 17%를 기록했습니다.",
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
