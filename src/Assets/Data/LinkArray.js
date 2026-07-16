// ⚠️ 이 값들은 배포본(gh-pages) 번들에서 추출한 실제 URL이다.
// master에는 naver.com 플레이스홀더가 커밋돼 있었고 진짜 링크는 커밋되지 않은 채
// 배포만 돼 있었다 — master를 그대로 빌드하면 앱 다운로드 버튼이 네이버로 간다. (2026-07-16 확인)
//
// 제거된 항목 (빅터 결정, 2026-07-16):
//  - "Team Blender" → teamblender.co : 도메인 등록이 풀려 제3자 선점 가능
//  - "(구)모지또 서비스 종료 안내" → Notion
const LinkArray = {
  download: [
    {
      url: "https://apps.apple.com/us/app/mojitto-daily-emoji-diary/id1631717082",
      label: "Apple Appstore",
    },
    {
      url: "https://play.google.com/store/apps/details?id=co.teamblender.mojitto",
      label: "Google Playstore",
    },
  ],
  channel: [
    { url: "https://www.instagram.com/mojitto_official/", label: "Instagram" },
  ],
};

export default LinkArray;
