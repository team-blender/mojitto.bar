import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import GmarketSansMedium from "../Assets/Fonts/GmarketSansMedium.ttf";

// 원본에 있던 input/textarea autofill·slick 캐러셀·flip/blink 키프레임 규칙은
// 이 사이트에 입력폼도 캐러셀도 없어 전부 죽은 CSS라 제거했다(사용처 0곳 확인).
const GlobalStyles = createGlobalStyle`
${reset};

@font-face {
  font-family: "GmarketSans";
  font-weight: 300;
  src: url(${GmarketSansMedium}) format('truetype');
  font-display: swap;
}

::selection {
  background: rgba(255, 255, 255, 1);
}

a {
  text-decoration: none;
  color: inherit;
  cursor: none;
}

* {
  box-sizing: border-box;
}

html {
  margin: 0;
  scroll-behavior: smooth;
  /* 커스텀 이모지 커서(Components/Cursor)가 기본 커서를 대신한다 */
  cursor: none;
}

body {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  font-size: 14px;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  background-color: rgba(12, 12, 12, 1.0);
  color: rgba(255, 255, 255, 1);
}

/* 터치 기기에선 Cursor가 렌더되지 않으므로 기본 커서를 되살린다.
   (원본은 이 해제가 없어, 마우스를 붙인 태블릿 등에서 커서가 사라지는 사각이 있었다) */
@media (pointer: coarse) {
  html, a { cursor: auto; }
}

.dD {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}

::-webkit-scrollbar { width: 0px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: transparent; }

.hide-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
`;

export default GlobalStyles;
