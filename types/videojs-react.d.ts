// Narrow type declarations for @videojs/react v10
// Required because the published @videojs/react@10.3.0 npm package declares "types": "dist/dev/index.d.ts"
// in package.json, but omits the .d.ts files from the release tarball.

declare module "@videojs/react" {
  export interface CommonProps {
    className?: string;
    style?: import("react").CSSProperties;
    children?: import("react").ReactNode;
    [key: string]: any;
  }

  export interface CreatePlayerOptions {
    features?: unknown;
  }

  export interface PlayerProps extends CommonProps {
    poster?: string;
  }

  export function createPlayer(options?: CreatePlayerOptions): {
    Player: import("react").ComponentType<PlayerProps>;
  };

  export interface ContainerProps extends CommonProps {
    tabIndex?: number;
    "aria-label"?: string;
  }
  export const Container: import("react").ComponentType<ContainerProps>;

  export interface HotkeyProps {
    keys: string;
    action: string;
    value?: number;
    target?: "player" | "document";
    [key: string]: any;
  }
  export const Hotkey: import("react").ComponentType<HotkeyProps>;

  export interface GestureProps {
    type: "tap" | "doubletap" | "press";
    action: string;
    value?: number;
    pointer?: "mouse" | "touch" | "pen";
    region?: "center" | "left" | "right" | "top" | "bottom";
    [key: string]: any;
  }
  export const Gesture: import("react").ComponentType<GestureProps>;

  export interface PlayButtonProps extends CommonProps {
    render?: (
      props: import("react").ButtonHTMLAttributes<HTMLButtonElement>,
      state: { playing?: boolean }
    ) => import("react").ReactNode;
  }
  export const PlayButton: import("react").ComponentType<PlayButtonProps>;

  export interface MuteButtonProps extends CommonProps {
    render?: (
      props: import("react").ButtonHTMLAttributes<HTMLButtonElement>,
      state: { muted: boolean; volume?: number }
    ) => import("react").ReactNode;
  }
  export const MuteButton: import("react").ComponentType<MuteButtonProps>;

  export interface FullscreenButtonProps extends CommonProps {
    render?: (
      props: import("react").ButtonHTMLAttributes<HTMLButtonElement>,
      state: { fullscreen: boolean }
    ) => import("react").ReactNode;
  }
  export const FullscreenButton: import("react").ComponentType<FullscreenButtonProps>;

  export interface PiPButtonProps extends CommonProps {
    render?: (
      props: import("react").ButtonHTMLAttributes<HTMLButtonElement>,
      state: { pip?: boolean }
    ) => import("react").ReactNode;
  }
  export const PiPButton: import("react").ComponentType<PiPButtonProps>;

  export interface BufferingIndicatorProps extends CommonProps {
    render?: (
      props: import("react").HTMLAttributes<HTMLDivElement>,
      state: { visible: boolean }
    ) => import("react").ReactNode;
  }
  export const BufferingIndicator: import("react").ComponentType<BufferingIndicatorProps>;

  export namespace Poster {
    export const Root: import("react").ComponentType<CommonProps>;
    export const Image: import("react").ComponentType<CommonProps>;
  }

  export namespace Controls {
    export const Root: import("react").ComponentType<CommonProps>;
    export const Backdrop: import("react").ComponentType<CommonProps>;
    export const Content: import("react").ComponentType<CommonProps>;
    export const Group: import("react").ComponentType<CommonProps & { "aria-label"?: string }>;
  }

  export namespace Time {
    export const Group: import("react").ComponentType<CommonProps>;
    export const Value: import("react").ComponentType<CommonProps & { type: "current" | "duration" | "remaining" }>;
    export const Separator: import("react").ComponentType<CommonProps>;
  }

  export namespace TimeSlider {
    export interface RootProps extends CommonProps {
      pauseOnDrag?: boolean;
      step?: number;
      largeStep?: number;
    }
    export const Root: import("react").ComponentType<RootProps>;
    export const Track: import("react").ComponentType<CommonProps>;
    export const Buffer: import("react").ComponentType<CommonProps>;
    export const Fill: import("react").ComponentType<CommonProps>;
    export const Thumb: import("react").ComponentType<CommonProps>;
    export interface PreviewProps extends CommonProps {
      render?: (
        props: import("react").HTMLAttributes<HTMLDivElement>,
        state: { pointerPercent?: number; duration?: number; value?: number }
      ) => import("react").ReactNode;
    }
    export const Preview: import("react").ComponentType<PreviewProps>;
    export const Value: import("react").ComponentType<CommonProps & { type?: string }>;
  }

  export namespace VolumeSlider {
    export interface RootProps extends CommonProps {
      step?: number;
      largeStep?: number;
    }
    export const Root: import("react").ComponentType<RootProps>;
    export const Track: import("react").ComponentType<CommonProps>;
    export const Fill: import("react").ComponentType<CommonProps>;
    export const Thumb: import("react").ComponentType<CommonProps>;
    export const Preview: import("react").ComponentType<CommonProps>;
    export interface ValueProps extends CommonProps {
      type?: string;
      format?: (value: number) => string;
    }
    export const Value: import("react").ComponentType<ValueProps>;
  }

  export namespace Thumbnail {
    export interface RootProps extends CommonProps {
      time?: number;
    }
    export const Root: import("react").ComponentType<RootProps>;
    export const Image: import("react").ComponentType<CommonProps>;
  }

  export namespace Tooltip {
    export const Provider: import("react").ComponentType<CommonProps>;
    export interface RootProps extends CommonProps {
      side?: "top" | "bottom" | "left" | "right";
      align?: "start" | "center" | "end";
      delay?: number;
    }
    export const Root: import("react").ComponentType<RootProps>;
    export const Trigger: import("react").ComponentType<CommonProps & { render: import("react").ReactElement }>;
    export const Popup: import("react").ComponentType<CommonProps>;
    export const Label: import("react").ComponentType<CommonProps>;
    export const Shortcut: import("react").ComponentType<CommonProps>;
  }

  export namespace Menu {
    export interface RootProps extends CommonProps {
      side?: "top" | "bottom" | "left" | "right";
      align?: "start" | "center" | "end";
    }
    export const Root: import("react").ComponentType<RootProps>;
    export interface TriggerProps extends CommonProps {
      render?: import("react").ReactElement;
      "aria-label"?: string;
    }
    export const Trigger: import("react").ComponentType<TriggerProps>;
    export const Popup: import("react").ComponentType<CommonProps>;
    export const Content: import("react").ComponentType<CommonProps>;
    export interface RadioItemProps extends CommonProps {
      value?: string | number;
    }
    export const RadioItem: import("react").ComponentType<RadioItemProps>;
    export interface ItemIndicatorProps extends CommonProps {
      checked?: boolean;
      forceMount?: boolean;
    }
    export const ItemIndicator: import("react").ComponentType<ItemIndicatorProps>;
  }

  export namespace PlaybackRateRadioGroup {
    export interface RootProps extends CommonProps {
      rates: readonly number[];
      label?: string;
    }
    export const Root: import("react").ComponentType<RootProps>;
    export const Value: import("react").ComponentType<CommonProps>;
    export interface OptionsProps extends CommonProps {
      renderItem?: (
        props: import("react").HTMLAttributes<HTMLDivElement>,
        item: { label: string; value: number; checked: boolean }
      ) => import("react").ReactNode;
    }
    export const Options: import("react").ComponentType<OptionsProps>;
  }

  export namespace StatusIndicator {
    export interface RootProps extends CommonProps {
      actions?: readonly string[];
    }
    export const Root: import("react").ComponentType<RootProps>;
    export const Value: import("react").ComponentType<CommonProps>;
  }

  export namespace SeekIndicator {
    export interface RootProps extends CommonProps {
    }
    export const Root: import("react").ComponentType<RootProps>;
    export const Value: import("react").ComponentType<CommonProps>;
  }

  export const StatusAnnouncer: import("react").ComponentType<CommonProps>;

  export namespace ErrorDialog {
    export const Root: import("react").ComponentType<CommonProps>;
    export const Popup: import("react").ComponentType<CommonProps>;
    export const Title: import("react").ComponentType<CommonProps>;
    export const Description: import("react").ComponentType<CommonProps>;
    export const Close: import("react").ComponentType<CommonProps>;
  }
}

declare module "@videojs/react/media/mux-video" {
  export interface MuxVideoProps {
    source: {
      playbackId: string;
    };
    playsInline?: boolean;
    preload?: string;
    crossOrigin?: string;
    className?: string;
    style?: import("react").CSSProperties;
    children?: import("react").ReactNode;
    [key: string]: any;
  }
  export const MuxVideo: import("react").ComponentType<MuxVideoProps>;
}

declare module "@videojs/react/video" {
  export const videoFeatures: unknown;
}
