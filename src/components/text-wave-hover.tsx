"use client";

import * as React from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type AnimationPlaybackControls,
  type MotionValue,
} from "motion/react";

export interface TextSegment {
  text: string;
  className?: string;
}

export interface TextWaveHoverHandle {
  trigger: () => void;
}

export interface TextWaveHoverProps {
  text?: string;
  segments?: TextSegment[];
  className?: string;
  duration?: number;
  blur?: number;
  scaleFactor?: number;
  waveColorClass?: string;
  waveColor?: string;
  triggerOnHover?: boolean;
}

interface WaveState {
  blurFactor: number;
  scaleFactor: number;
  baseOpacity: number;
  highlightOpacity: number;
}

const IDLE_STATE: WaveState = {
  blurFactor: 0,
  scaleFactor: 0,
  baseOpacity: 1,
  highlightOpacity: 0,
};

function getWaveState(
  progress: number,
  characterPosition: number,
  spread: number,
  fadeSpread: number,
): WaveState {
  if (progress <= 0 || progress >= 1) return IDLE_STATE;

  const center = (1 + 2 * spread + fadeSpread) * progress - spread;
  const delta = center - characterPosition;

  if (delta < -spread) return IDLE_STATE;

  if (delta < 0) {
    const progressInPhase = (delta + spread) / spread;
    const shape = Math.sin(progressInPhase * Math.PI * 0.5);
    return {
      blurFactor: shape,
      scaleFactor: shape,
      baseOpacity: Math.max(0.42, (1 - progressInPhase) ** 1.5),
      highlightOpacity: 0,
    };
  }

  if (delta < spread) {
    const progressInPhase = delta / spread;
    const shape = 1 - Math.sin(progressInPhase * Math.PI * 0.5);
    return {
      blurFactor: shape,
      scaleFactor: shape,
      baseOpacity: 0,
      highlightOpacity: Math.sin(progressInPhase * Math.PI * 0.5),
    };
  }

  if (delta < spread + fadeSpread) {
    const progressInPhase = (delta - spread) / fadeSpread;
    return {
      blurFactor: 0,
      scaleFactor: 0,
      baseOpacity: progressInPhase,
      highlightOpacity: 1 - progressInPhase,
    };
  }

  return IDLE_STATE;
}

interface WaveCharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  spread: number;
  fadeSpread: number;
  blur: number;
  scaleFactor: number;
  className?: string;
  waveColorClass: string;
  waveColor?: string;
}

function WaveCharacter({
  char,
  index,
  total,
  progress,
  spread,
  fadeSpread,
  blur,
  scaleFactor,
  className,
  waveColorClass,
  waveColor,
}: WaveCharacterProps) {
  const characterPosition = total > 1 ? index / (total - 1) : 0.5;
  const scale = useTransform(
    progress,
    (value) =>
      1 +
      scaleFactor *
        getWaveState(value, characterPosition, spread, fadeSpread).scaleFactor,
  );
  const filter = useTransform(progress, (value) => {
    const blurAmount =
      blur *
      getWaveState(value, characterPosition, spread, fadeSpread).blurFactor;
    return blurAmount > 0.1 ? `blur(${blurAmount.toFixed(2)}px)` : "none";
  });
  const baseOpacity = useTransform(
    progress,
    (value) =>
      getWaveState(value, characterPosition, spread, fadeSpread).baseOpacity,
  );
  const highlightOpacity = useTransform(
    progress,
    (value) =>
      getWaveState(value, characterPosition, spread, fadeSpread)
        .highlightOpacity,
  );

  return (
    <motion.span
      aria-hidden="true"
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        whiteSpace: "pre",
        willChange: "transform, filter",
        scale,
        filter,
      }}
    >
      <motion.span style={{ display: "inline-block", opacity: baseOpacity }}>
        {char}
      </motion.span>
      <motion.span
        aria-hidden="true"
        className={`pointer-events-none select-none ${waveColorClass}`}
        style={{
          opacity: highlightOpacity,
          position: "absolute",
          inset: 0,
          display: "inline-block",
          ...(waveColor ? { color: waveColor } : {}),
        }}
      >
        {char}
      </motion.span>
    </motion.span>
  );
}

export const TextWaveHover = React.forwardRef<
  TextWaveHoverHandle,
  TextWaveHoverProps
>(function TextWaveHover(
  {
    text,
    segments,
    className,
    duration = 1.5,
    blur = 3,
    scaleFactor = 0.06,
    waveColorClass = "text-primary",
    waveColor,
    triggerOnHover = true,
  },
  ref,
) {
  const shouldReduceMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const controlsRef = React.useRef<AnimationPlaybackControls | null>(null);
  const characters = React.useMemo(() => {
    const source = segments?.length ? segments : text ? [{ text }] : [];
    return source.flatMap((segment) =>
      Array.from(segment.text, (char) => ({
        char,
        className: segment.className,
      })),
    );
  }, [segments, text]);
  const fullText = segments?.length
    ? segments.map((segment) => segment.text).join("")
    : text || "";
  const spread = Math.max(
    0.12,
    Math.min(0.22, 4.5 / Math.max(1, characters.length - 1)),
  );
  const fadeSpread = spread * 1.5;

  const trigger = React.useCallback(() => {
    if (shouldReduceMotion || !characters.length) return;
    controlsRef.current?.stop();
    progress.set(0);
    controlsRef.current = animate(progress, 1, {
      duration,
      ease: "linear",
      onComplete: () => {
        progress.set(0);
        controlsRef.current = null;
      },
    });
  }, [characters.length, duration, progress, shouldReduceMotion]);

  React.useEffect(
    () => () => {
      controlsRef.current?.stop();
    },
    [],
  );

  React.useImperativeHandle(ref, () => ({ trigger }), [trigger]);

  if (shouldReduceMotion) {
    return (
      <span className={className}>
        {segments?.length
          ? segments.map((segment, index) => (
              <span
                key={`${segment.text}-${index}`}
                className={segment.className}
              >
                {segment.text}
              </span>
            ))
          : text}
      </span>
    );
  }

  return (
    <span
      aria-label={fullText}
      role="text"
      onMouseEnter={triggerOnHover ? trigger : undefined}
      className={`inline-flex items-baseline select-text ${className ?? ""}`}
    >
      <span aria-hidden="true" className="inline-flex items-baseline">
        {characters.map((item, index) =>
          item.char === " " || item.char === "\u00A0" ? (
            <span key={index} className="inline-block whitespace-pre">
              &nbsp;
            </span>
          ) : (
            <WaveCharacter
              key={index}
              {...item}
              index={index}
              total={characters.length}
              progress={progress}
              spread={spread}
              fadeSpread={fadeSpread}
              blur={blur}
              scaleFactor={scaleFactor}
              waveColorClass={waveColorClass}
              waveColor={waveColor}
            />
          ),
        )}
      </span>
    </span>
  );
});

TextWaveHover.displayName = "TextWaveHover";

export default TextWaveHover;
