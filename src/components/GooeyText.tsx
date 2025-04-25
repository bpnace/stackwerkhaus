"use client";
import * as React from "react";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({
  texts,
  morphTime = 1,
  cooldownTime = 2,
  className,
  textClassName
}: GooeyTextProps) {
  const [phase, setPhase] = React.useState<'morph' | 'hold'>('morph');
  const [fromIdx, setFromIdx] = React.useState(0);
  const [toIdx, setToIdx] = React.useState(1);
  const [fraction, setFraction] = React.useState(0);
  const requestRef = React.useRef<number>();
  const lastTimeRef = React.useRef<number>(0);
  const elapsedRef = React.useRef<number>(0);

  React.useEffect(() => {
    let running = true;
    function animate(now: number) {
      if (!running) return;
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const dt = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;
      elapsedRef.current += dt;

      if (phase === 'morph') {
        let frac = elapsedRef.current / morphTime;
        if (frac >= 1) {
          frac = 1;
          setFraction(1);
          setPhase('hold');
          elapsedRef.current = 0;
        } else {
          setFraction(frac);
        }
      } else if (phase === 'hold') {
        setFraction(1);
        if (elapsedRef.current >= cooldownTime) {
          setPhase('morph');
          setFromIdx((prev) => (prev + 1) % texts.length);
          setToIdx((prev) => (prev + 1) % texts.length);
          setFraction(0);
          elapsedRef.current = 0;
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    }
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      running = false;
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      lastTimeRef.current = 0;
      elapsedRef.current = 0;
    };
  }, [phase, morphTime, cooldownTime, texts.length]);

  // Calculate styles
  let text1Style = {};
  let text2Style = {};
  if (phase === 'morph') {
    text2Style = {
      filter: `blur(${Math.min(8 / fraction - 8, 100)}px)`,
      opacity: `${Math.pow(fraction, 0.4) * 100}%`,
    };
    const inv = 1 - fraction;
    text1Style = {
      filter: `blur(${Math.min(8 / inv - 8, 100)}px)`,
      opacity: `${Math.pow(inv, 0.4) * 100}%`,
    };
  } else {
    // Hold: only show text2
    text2Style = { filter: '', opacity: '100%' };
    text1Style = { filter: '', opacity: '0%' };
  }

  return (
    <div className={`relative ${className || ""}`}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>
      <div
        className="flex items-center justify-center"
        style={{ filter: "url(#threshold)" }}
      >
        <span
          className={`absolute inline-block select-none text-center text-4xl md:text-6xl text-white ${textClassName || ""}`}
          style={text1Style}
        >
          {texts[fromIdx]}
        </span>
        <span
          className={`absolute inline-block select-none text-center text-4xl md:text-6xl text-white ${textClassName || ""}`}
          style={text2Style}
        >
          {texts[toIdx]}
        </span>
      </div>
    </div>
  );
} 