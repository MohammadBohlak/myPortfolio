// src/components/common/CustomCursor.js
import { useEffect, useRef } from "react";
import styled from "styled-components";

const Cursor = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid var(--accent);
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.1s ease;
  z-index: 9999;
  mix-blend-mode: difference;
`;

const CursorFollower = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(255, 46, 99, 0.1);
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 9998;
`;

export const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      setTimeout(() => {
        cursorFollower.style.left = e.clientX + "px";
        cursorFollower.style.top = e.clientY + "px";
      }, 100);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <Cursor ref={cursorRef} />
      <CursorFollower ref={cursorFollowerRef} />
    </>
  );
};
