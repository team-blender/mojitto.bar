import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Box = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4px 0;
  text-align: center;
  line-height: 1.6;
  font-size: 13px;
  color: rgba(185, 185, 185, 0.5);
  margin-top: 30px;
  padding: 0 16px;
`;

const Item = styled.span`
  white-space: nowrap;
  a {
    color: rgba(255, 255, 255, 0.6);
    transition: color 0.3s ease-in-out;
  }
  a:hover {
    color: rgba(255, 255, 255, 1);
  }
  & + &::before {
    content: "·";
    margin: 0 8px;
  }
`;

// 첫 화면 바닥 링크 셋. 방침은 라우터 쪽(#/privacy), 약관·계정 삭제는 정적 쪽이라 일반 링크로 연다.
const PolicyLinks = () => {
  return (
    <Box aria-label="약관과 방침">
      <Item>
        <Link to="/privacy">개인정보처리방침</Link>
      </Item>
      <Item>
        <a href="/terms/">이용약관</a>
      </Item>
      <Item>
        <a href="/delete-account/">라운지 계정 삭제</a>
      </Item>
    </Box>
  );
};

export default PolicyLinks;
