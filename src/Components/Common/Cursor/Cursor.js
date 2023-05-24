import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Cursor.module.scss";
import { gsap, Linear } from "gsap";

const CURSOR_STYLES = {
  CURSOR: "fixed hidden select-none pointer-events-none z-50",
  FOLLOWER: "fixed hidden h-10 w-10 select-none pointer-events-none z-40",
};

export default function Cursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const onHover = useCallback(() => {
    gsap.to(cursorRef.current, {
      scale: 0.3,
      duration: 0.3,
    });
    gsap.to(followerRef.current, {
      scale: 2,
      duration: 0.3,
    });
  }, []);

  const onUnhover = useCallback(() => {
    gsap.to(cursorRef.current, {
      scale: 1,
      duration: 0.3,
    });
    gsap.to(followerRef.current, {
      scale: 1,
      duration: 0.3,
    });
  }, []);

  const moveCircle = useCallback((e) => {
    gsap.to(cursorRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.1,
      ease: Linear.easeNone,
    });
    gsap.to(followerRef.current, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.3,
      ease: Linear.easeNone,
    });
  }, []);

  useEffect(() => {
    followerRef.current.classList.remove("hidden");
    cursorRef.current.classList.remove("hidden");

    document.addEventListener("mousemove", moveCircle);
    document.querySelectorAll(".link").forEach((el) => {
      el.addEventListener("mouseenter", onHover);
      el.addEventListener("mouseleave", onUnhover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCircle);
      document.querySelectorAll(".link").forEach((el) => {
        el.removeEventListener("mouseenter", onHover);
        el.removeEventListener("mouseleave", onUnhover);
      });
    };
  }, [moveCircle, onHover, onUnhover]);

  return (
    <>
      <div
        ref={cursorRef}
        className={`${styles.Cursor} ${CURSOR_STYLES.CURSOR}`}
      ></div>
      <div
        ref={followerRef}
        className={`${styles.cursorFollower} ${CURSOR_STYLES.FOLLOWER}`}
      ></div>
    </>
  );
}
