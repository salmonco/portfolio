# Amplitude 이벤트 트래킹 문서

## 개요

이 문서는 프로젝트에서 트래킹하고 있는 Amplitude 이벤트 목록입니다.

---

## 이벤트 목록

### 메인 페이지 (`/`)

| 이벤트명 | 설명 | Properties |
|---------|------|------------|
| `main_project_more_click` | 메인 프로젝트 "More →" 클릭 | `project_id`, `project_title` |
| `velog_post_click` | Velog 포스트 클릭 | `post_id`, `post_title` |

### About 페이지 (`/about`)

| 이벤트명 | 설명 | Properties |
|---------|------|------------|
| `blog_link_click` | 블로그 링크 클릭 | `platform` (velog, naver, brunch) |
| `contact_link_click` | 연락처 링크 클릭 | `type` (email, github, linkedin) |
| `coffee_chat_click` | 커피챗 신청하기 클릭 | `type` (linkedin) |
| `career_card_toggle` | 경력 카드 펼치기/접기 | `career_id`, `expanded` |

### Projects 페이지 (`/projects`)

| 이벤트명 | 설명 | Properties |
|---------|------|------------|
| `startup_project_card_toggle` | 프로젝트 카드 펼치기/접기 | `project_id`, `expanded` |
| `startup_project_faq_toggle` | FAQ 펼치기/접기 | `project_id`, `faq_index`, `expanded` |
| `project_link_click` | 프로젝트 링크 클릭 (Web, iOS, Android, GitHub) | `type`, `project_title` |

### 전역

| 이벤트명 | 설명 | Properties |
|---------|------|------------|
| `navigation_button_click` | 네비게이션 메뉴 클릭 | `link` |
| `scroll_to_top_click` | 맨 위로 스크롤 버튼 클릭 | - |

---

## 사용 방법

### TrackableLink 사용
```tsx
<TrackableLink
  href="/some-url"
  eventName="event_name"
  eventProperties={{ key: "value" }}
>
  링크 텍스트
</TrackableLink>
```

### trackEvent 직접 호출
```tsx
import { trackEvent } from "@/amplitude/trackEvent";

trackEvent("event_name", { key: "value" });
```

---

## 최종 업데이트

2025-12-17
