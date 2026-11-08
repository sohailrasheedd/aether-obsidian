import type { SVGProps } from "react";

/**
 * Aether Obsidian icon set. Drawn on a 24px grid with a 1.75 stroke and round
 * joins so every glyph shares one optical weight. All icons are decorative
 * (aria-hidden); the surrounding control carries the accessible name.
 */
type IconProps = SVGProps<SVGSVGElement>;

function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

/** Play and pause share one SVG. CSS cross-fades the groups from the button's data-paused. */
export function PlayPauseIcon(props: IconProps) {
  return (
    <Base {...props} stroke="none" fill="currentColor">
      <g className="ico-play">
        <path d="M8 5.7v12.6a.8.8 0 0 0 1.2.7l10.3-6.3a.8.8 0 0 0 0-1.4L9.2 5a.8.8 0 0 0-1.2.7Z" />
      </g>
      <g className="ico-pause">
        <rect x="6.5" y="5" width="3.9" height="14" rx="1.3" />
        <rect x="13.6" y="5" width="3.9" height="14" rx="1.3" />
      </g>
    </Base>
  );
}

export function BigPlayIcon(props: IconProps) {
  return (
    <Base {...props} stroke="none" fill="currentColor">
      <path d="M8 5.7v12.6a.8.8 0 0 0 1.2.7l10.3-6.3a.8.8 0 0 0 0-1.4L9.2 5a.8.8 0 0 0-1.2.7Z" />
    </Base>
  );
}

export function PauseGlyph(props: IconProps) {
  return (
    <Base {...props} stroke="none" fill="currentColor">
      <rect x="6.5" y="5" width="3.9" height="14" rx="1.3" />
      <rect x="13.6" y="5" width="3.9" height="14" rx="1.3" />
    </Base>
  );
}

export function VolumeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M4 9.5h2.8l4.1-3.5a.6.6 0 0 1 1 .46v11.08a.6.6 0 0 1-1 .46L6.8 14.5H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="M15.6 9.2a4 4 0 0 1 0 5.6" />
      <path d="M18.4 6.6a7.6 7.6 0 0 1 0 10.8" />
    </Base>
  );
}

export function VolumeMutedIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path
        d="M4 9.5h2.8l4.1-3.5a.6.6 0 0 1 1 .46v11.08a.6.6 0 0 1-1 .46L6.8 14.5H4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1Z"
        fill="currentColor"
        stroke="none"
      />
      <path d="m16 9.6 4.8 4.8" />
      <path d="m20.8 9.6-4.8 4.8" />
    </Base>
  );
}

export function PipIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M10.5 18H5.5A1.5 1.5 0 0 1 4 16.5v-10A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5V11" />
      <rect x="12" y="13.2" width="8" height="5.6" rx="1.3" fill="currentColor" stroke="none" />
    </Base>
  );
}

export function FullscreenEnterIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 9V5.5A1.5 1.5 0 0 1 5.5 4H9" />
      <path d="M15 4h3.5A1.5 1.5 0 0 1 20 5.5V9" />
      <path d="M20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15" />
      <path d="M9 20H5.5A1.5 1.5 0 0 1 4 18.5V15" />
    </Base>
  );
}

export function FullscreenExitIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 4v3.5A1.5 1.5 0 0 1 7.5 9H4" />
      <path d="M20 9h-3.5A1.5 1.5 0 0 1 15 7.5V4" />
      <path d="M15 20v-3.5a1.5 1.5 0 0 1 1.5-1.5H20" />
      <path d="M4 15h3.5A1.5 1.5 0 0 1 9 16.5V20" />
    </Base>
  );
}

export function SeekBackIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m11 6-6 6 6 6" />
      <path d="m19 6-6 6 6 6" />
    </Base>
  );
}

export function SeekForwardIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="m13 6 6 6-6 6" />
      <path d="m5 6 6 6-6 6" />
    </Base>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Base {...props} strokeWidth={2.25}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </Base>
  );
}
