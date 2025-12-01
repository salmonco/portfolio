import type { OpenSourceProject } from "@/types/opensource-project";

export const OPENSOURCE_PROJECT: OpenSourceProject[] = [
  {
    id: 1,
    title: "react-native-radar-chart",
    summary: "React Native용 커스터마이징 가능한 레이더 차트 라이브러리",
    description:
      "레이더 차트를 그릴 수 있는 패키지는 여럿 있었지만, 원하는 디자인을 반영하기엔 한계가 있었습니다. 이에 본 프로젝트에 적용된 디자인을 만족시킬 수 있는 Component를 개발함과 동시에, 그라데이션 속성을 추가하는 등 커스텀 자유도를 높였습니다. 다른 개발자들 또한 원하는 디자인의 차트를 그릴 수 있도록 선택지를 넓히고자 했습니다.",
    achievements: ["총 다운로드 수 15,950회", "주간 다운로드 수 400회"],
    techStack: ["React Native", "TypeScript", "SVG"],
    links: {
      web: "https://www.npmjs.com/package/@salmonco/react-native-radar-chart",
      ios: "",
      android: "",
      github: "https://github.com/salmonco/react-native-radar-chart",
    },
  },
  {
    id: 2,
    title: "react-connect-line",
    summary: "매칭 상태를 확인할 수 있는 React 요소 연결 라이브러리",
    description:
      "단순히 두 요소를 연결하는 패키지는 여럿 있었지만, 두 요소가 올바르게 매칭되었는지의 정보를 확인할 수 있는 패키지는 없었습니다. 이에 매칭 여부를 알려주는 State를 추가하도록 개선했습니다. 동시에 디자인이 용이하도록 커스텀 자유도를 높였습니다.",
    achievements: ["월간 다운로드 수 60회"],
    techStack: ["React", "TypeScript"],
    links: {
      web: "https://www.npmjs.com/package/react-connect-line",
      ios: "",
      android: "",
      github: "https://github.com/salmonco/react-connect-line",
    },
  },
];
