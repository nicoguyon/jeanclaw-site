"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const animRef = useRef<number>(0);
  const trailRef = useRef({ x: -100, y: -100 });
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => setIsClick(true);
    const onMouseUp = () => setIsClick(false);

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isInteractive =
        el.closest("a, button, [data-cursor-hover]") !== null;
      setIsHover(isInteractive);
    };

    const animate = () => {
      trailRef.current = {
        x: trailRef.current.x + (posRef.current.x - trailRef.current.x) * 0.12,
        y: trailRef.current.y + (posRef.current.y - trailRef.current.y) * 0.12,
      };
      setTrail({ ...trailRef.current });
      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousemove", checkHover);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousemove", checkHover);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <>
      {/* Dot cursor */}
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          width: isHover ? 8 : 6,
          height: isHover ? 8 : 6,
          borderRadius: "50%",
          backgroundColor: "#E53935",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "normal",
          transition: "width 0.15s, height 0.15s",
        }}
      />
      {/* Trail ring */}
      <div
        style={{
          position: "fixed",
          left: trail.x,
          top: trail.y,
          transform: "translate(-50%, -50%)",
          width: isHover ? 48 : isClick ? 20 : 32,
          height: isHover ? 48 : isClick ? 20 : 32,
          borderRadius: "50%",
          border: `1.5px solid ${isHover ? "#E53935" : "rgba(229,57,53,0.5)"}`,
          pointerEvents: "none",
          zIndex: 99998,
          transition: "width 0.2s, height 0.2s, border-color 0.2s",
        }}
      />
    </>
  );
}
