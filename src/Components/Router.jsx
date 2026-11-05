import React, { useLayoutEffect, useRef } from "react";
import { HashRouter, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Main from "../Routes/Main";
import Privacy from "../Routes/Privacy";

// 쪽(경로)이 바뀌면 맨 위에서 연다. 첫 화면 바닥 링크로 #/privacy 에 오면 내려온 위치가 남아
// 공고 상자 제목이 가려졌다(11-06). 처음 열 때는 건드리지 않는다(브라우저 위치 되살리기 그대로).
// html 의 scroll-behavior: smooth 때문에 instant 로 올린다(미끄러지는 모습 없이).
const ScrollToTopOnRouteChange = () => {
  const { pathname } = useLocation();
  const first = useRef(true);
  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
};

// ⚠️ HashRouter 유지 필수.
// 라이브 앱(Android GoldActivity)이 https://mojitto.bar/#/privacy 를 직접 연다.
// BrowserRouter로 바꾸면 이미 배포된 앱의 개인정보처리방침 링크가 깨진다.
const RouterComponent = () => {
  return (
    <HashRouter>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default RouterComponent;
