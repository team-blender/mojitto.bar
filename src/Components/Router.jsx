import React from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Main from "../Routes/Main";
import Privacy from "../Routes/Privacy";

// ⚠️ HashRouter 유지 필수.
// 라이브 앱(Android GoldActivity)이 https://mojitto.bar/#/privacy 를 직접 연다.
// BrowserRouter로 바꾸면 이미 배포된 앱의 개인정보처리방침 링크가 깨진다.
const RouterComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default RouterComponent;
