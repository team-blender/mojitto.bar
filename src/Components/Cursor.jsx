import React, { useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import EmojiArray from "../Assets/Data/EmojiArray";
import useIsCoarsePointer from "../Hooks/useIsCoarsePointer";

const Box = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  pointer-events: none;
  align-items: center;
  z-index: 2000;
  border: 2px solid;
  border-color: rgba(30, 30, 30, 1);
  overflow: hidden;
  /* 첫 mousemove 전에 좌상단에 잠깐 보이는 것 방지 */
  opacity: 0;
`;

const Emoji = styled.img`
  width: 110%;
  height: 110%;
`;

const useCursor = () => {
  const cursor = useRef(null);

  useEffect(() => {
    const setPosition = (e) => {
      const el = cursor.current;
      if (!el) return;
      el.style.opacity = "1";
      el.style.transform = `translate(${e.clientX - el.offsetWidth / 2}px, ${
        e.clientY - el.offsetHeight / 2
      }px)`;
    };
    window.addEventListener("mousemove", setPosition);
    return () => window.removeEventListener("mousemove", setPosition);
  }, []);

  return cursor;
};

const Cursor = () => {
  const cursor = useCursor();
  const isTouch = useIsCoarsePointer();
  // 마운트마다 감정 이모지 하나를 무작위로 고른다 (원본 동작 유지)
  const emoji = useMemo(
    () => EmojiArray[Math.floor(Math.random() * EmojiArray.length)],
    []
  );

  if (isTouch) return null;

  return (
    <Box ref={cursor}>
      <Emoji src={emoji} alt="" />
    </Box>
  );
};

export default Cursor;
