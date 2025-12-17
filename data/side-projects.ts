import { getSideStatus } from "@/lib/project-utils";
import type { SideProject } from "@/types/side-project";
import type { StartupProject } from "@/types/startup-project";

// 상세 정보가 있는 사이드 프로젝트 (StartupProject 타입)
export const SIDE_PROJECT_DETAILED: StartupProject[] = [
  {
    id: 2,
    title: "레시피 암기 앱",
    period: {
      start: "2025.11",
      end: null,
    },
    status: "MVP 개발 완료",
    summary: "알바생을 위한 레시피 암기 앱",
    achievements: ["출시 후 28명의 사용자 유치", "7일차 리텐션 8% 기록"],
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
      {
        question: "이 프로젝트에서 배운 점은?",
        answer:
          "핵심 기능만으로 돈을 벌 수 있는 제품이 매력적인 제품이라는 걸 배웠습니다. 사용자가 모인 후 BM을 붙이려 했는데, 수익이 나지 않으니 제품을 유지하기 어려웠습니다. 이후 MVP 단계에서 바로 수익이 날 수 있는 서비스를 만들어야겠다고 생각하게 됐습니다. 또한 퍼포먼스 마케팅을 처음 경험하며 크리에이티브 A/B 테스트를 통해 CPC를 비교하고 최적화하는 과정을 배웠습니다.",
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
        question: "이 프로젝트에서 배운 점은?",
        answer:
          "리텐션이 제품의 기본체력이라는 걸 배웠습니다. 리텐션을 고려하지 않고 MVP를 만들었다가 사용자가 돌아오지 않아 실패했습니다. 이후 토스 PO 세션을 보며 리텐션 설계의 중요성을 더 깊이 깨달았고, 다음 프로젝트부터는 리텐션 루프를 먼저 설계하고 개발하고 있습니다.",
      },
    ],
  },
];

// 간단한 사이드 프로젝트 (외주 등)
export const SIDE_PROJECT: SideProject[] = [
  {
    id: 1,
    title: "제주 농업 통계 시스템",
    period: {
      start: "2025.11",
      end: null,
    },
    get status() {
      return getSideStatus(this.period.end);
    },
    techStack: [
      "TypeScript",
      "React",
      "Next.js",
      "React-Query",
      "TailwindCSS",
      "d3",
      "OpenLayers",
    ],
    links: {
      web: "https://agri.jeju.go.kr/stats/",
      ios: "",
      android: "",
      github: "https://github.com/salmonco/jadx-stats",
    },
    purpose:
      "제주 농업의 주요 통계 지표와 주제별 지도를 제공하는 통계 시스템 개발",
    role: "외주 프로젝트 - 특화 통계 고도화 개발",
    features: "제주 농업 통계 지표 시각화, 주제별 지도 제공",
    result: "제주 농업 통계 시스템 특화 통계 고도화 완료",
  },
];
