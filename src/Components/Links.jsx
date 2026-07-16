import React from "react";
import styled from "styled-components";
import { Title } from "./Utility";
import useIsCoarsePointer from "../Hooks/useIsCoarsePointer";

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 15px;
  margin-bottom: 20px;
`;

// $isTouch: styled-components v6 transient prop — DOM으로 새어나가지 않는다.
// (v5에선 isMobile을 그대로 넘겨도 됐지만 v6는 알 수 없는 prop을 DOM에 전달해 경고를 낸다)
const LinkButton = styled.div`
  width: 100%;
  max-width: 250px;
  height: 50px;
  display: flex;
  color: rgba(255, 255, 255, 0.5);
  background-color: rgba(42, 41, 41, 1);
  margin-bottom: 15px;
  border-radius: 10px;
  transition: 0.5s ease-in-out;
  border: 2px solid;
  border-color: rgba(42, 41, 41, 1);
  font-weight: 500;
  &:hover {
    border-color: ${(props) =>
      props.$isTouch ? "rgba(42, 41, 41, 1)" : "rgba(255, 255, 255, 1)"};
    color: ${(props) =>
      props.$isTouch ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 1)"};
  }
`;

const LinkAnchor = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Links = ({ title, dataArray }) => {
  const isTouch = useIsCoarsePointer();

  return (
    <Box>
      <Title>{title}</Title>
      {dataArray.map((item) => (
        <LinkButton $isTouch={isTouch} key={item.url + item.label}>
          <LinkAnchor href={item.url} target="_blank" rel="noreferrer">
            {item.label}
          </LinkAnchor>
        </LinkButton>
      ))}
    </Box>
  );
};

export default Links;
