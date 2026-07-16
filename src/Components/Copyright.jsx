import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 1.5;
  font-size: 12px;
  color: rgba(185, 185, 185, 0.5);
  margin-top: 20px;
  margin-bottom: 30px;
`;

// 원본은 ©TEAM BLENDER가 teamblender.co 링크였으나, 그 도메인은 등록이 풀려
// 제3자가 선점할 수 있는 상태라 링크를 제거하고 표기를 모지또로 통일한다. (빅터 결정, 2026-07-16)
const Copyright = () => {
  return (
    <Box className="dD">©MOJITTO ALL RIGHTS RESERVED.</Box>
  );
};

export default Copyright;
