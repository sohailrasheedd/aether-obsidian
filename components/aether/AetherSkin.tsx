"use client";

import {
  BufferingIndicator,
  Container,
  Controls,
  ErrorDialog,
  FullscreenButton,
  Gesture,
  Hotkey,
  Menu,
  MuteButton,
  PiPButton,
  PlaybackRateRadioGroup,
  PlayButton,
  Poster,
  SeekIndicator,
  StatusAnnouncer,
  StatusIndicator,
  Thumbnail,
  Time,
  TimeSlider,
  Tooltip,
  VolumeSlider,
} from "@videojs/react";
import type { ReactElement, ReactNode } from "react";
import {
  BigPlayIcon,
  CheckIcon,
  FullscreenEnterIcon,
  FullscreenExitIcon,
  PauseGlyph,
  PipIcon,
  PlayPauseIcon,
  SeekBackIcon,
  SeekForwardIcon,
  VolumeIcon,
  VolumeMutedIcon,
} from "./icons";
import "./aether.css";

const PLAYBACK_RATES = [0.75, 1, 1.25, 1.5, 2] as const;

/** Tooltip that reuses the built-in button's own translated, state-aware label and adds the shortcut hint. */
function Tip({
  shortcut,
  children,
}: {
  shortcut: string;
  children: ReactElement;
}) {
  return (
    <Tooltip.Root side="top" delay={400}>
      <Tooltip.Trigger render={children} />
      <Tooltip.Popup className="aether-tip">
        <Tooltip.Label />
        <Tooltip.Shortcut className="aether-kbd">{shortcut}</Tooltip.Shortcut>
      </Tooltip.Popup>
    </Tooltip.Root>
  );
}

/** Pointer-following frame preview and timestamp bubble for the seek bar. */
function ScrubPreview() {
  return (
    <TimeSlider.Preview
      className="aether-preview"
      render={(props, state) => {
        const time = ((state.pointerPercent ?? 0) / 100) * (state.duration ?? 0);
        return (
          <div {...props}>
            <Thumbnail.Root className="aether-frame" time={time}>
              <Thumbnail.Image className="aether-frame-img" />
            </Thumbnail.Root>
            <TimeSlider.Value type="pointer" className="aether-bubble" />
          </div>
        );
      }}
    />
  );
}

function SpeedMenu() {
  return (
    <Menu.Root side="top" align="end">
      <PlaybackRateRadioGroup.Root rates={PLAYBACK_RATES} label="Playback speed">
        <Menu.Trigger
          className="aether-speed"
          render={<button type="button" />}
        >
          <PlaybackRateRadioGroup.Value />
        </Menu.Trigger>
        <Menu.Popup className="aether-menu">
          <Menu.Content className="aether-menu-content">
            <PlaybackRateRadioGroup.Options
              className="aether-menu-group"
              renderItem={(props, item) => (
                <Menu.RadioItem {...props} className="aether-menu-item">
                  <span>{item.label}</span>
                  <Menu.ItemIndicator
                    checked={item.checked}
                    forceMount
                    className="aether-menu-check"
                  >
                    <CheckIcon width={16} height={16} />
                  </Menu.ItemIndicator>
                </Menu.RadioItem>
              )}
            />
          </Menu.Content>
        </Menu.Popup>
      </PlaybackRateRadioGroup.Root>
    </Menu.Root>
  );
}

export interface AetherSkinProps {
  /** The media element, for example <MuxVideo />. */
  children: ReactNode;
  /** Optional title shown at the top while controls are visible. */
  title?: string;
  /** Where hotkeys listen. Defaults to "player" (WCAG 2.1.4 compliant, scopes keys to player focus). Pass "document" for dedicated single-player views/embeds. */
  hotkeyTarget?: "player" | "document";
}

export function AetherSkin({ children, title, hotkeyTarget = "player" }: AetherSkinProps) {
  return (
    <Container className="aether" tabIndex={0} aria-label={title ? `${title} video player` : "Video player"}>
      {children}

      <Poster.Root className="aether-poster">
        <Poster.Image className="aether-poster-img" />
        <PlayButton
          className="aether-big"
          render={(props) => (
            <button {...props}>
              <BigPlayIcon />
            </button>
          )}
        />
      </Poster.Root>

      <BufferingIndicator
        className="aether-buffering"
        render={(props, state) => (
          <div {...props}>{state.visible ? <div className="aether-spinner" /> : null}</div>
        )}
      />

      {/* Center pulse on play, pause and volume changes from keys and taps. */}
      <StatusIndicator.Root
        className="aether-status"
        actions={["togglePaused", "toggleMuted", "volumeStep"]}
        aria-hidden="true"
      >
        <PlayPauseIcon className="s-play" />
        <PauseGlyph className="s-pause" />
        <VolumeIcon className="s-vol" />
        <VolumeMutedIcon className="s-mute" />
        <StatusIndicator.Value className="aether-status-value" />
      </StatusIndicator.Root>

      {/* Skip feedback for arrow keys and double taps. */}
      <SeekIndicator.Root className="aether-seekind" aria-hidden="true">
        <SeekBackIcon className="si-back" />
        <SeekForwardIcon className="si-fwd" />
        <SeekIndicator.Value className="aether-seekind-value" />
      </SeekIndicator.Root>

      <Tooltip.Provider>
        <Controls.Root>
          <Controls.Backdrop className="aether-backdrop" />
          <Controls.Content className="aether-controls">
            <div className="aether-top">
              {title ? <span className="aether-title">{title}</span> : null}
            </div>

            <Controls.Group className="aether-dock" aria-label="Player controls">
              <div className="aether-left">
                <Tip shortcut="Space">
                  <PlayButton
                    className="aether-btn aether-play"
                    render={(props) => (
                      <button {...props}>
                        <PlayPauseIcon />
                      </button>
                    )}
                  />
                </Tip>

                <Time.Group className="aether-time">
                  <Time.Value type="current" />
                  <Time.Separator>/</Time.Separator>
                  <Time.Value type="duration" />
                </Time.Group>
              </div>

              <TimeSlider.Root className="aether-sl aether-seek" pauseOnDrag step={5} largeStep={15}>
                <TimeSlider.Track className="aether-track">
                  <TimeSlider.Buffer className="aether-buffer" />
                  <TimeSlider.Fill className="aether-fill" />
                </TimeSlider.Track>
                <TimeSlider.Thumb className="aether-knob" />
                <ScrubPreview />
              </TimeSlider.Root>

              <div className="aether-tools">
                <div className="aether-volume">
                  <Tip shortcut="M">
                    <MuteButton
                      className="aether-btn"
                      render={(props, state) => (
                        <button {...props}>
                          {state.muted ? <VolumeMutedIcon /> : <VolumeIcon />}
                        </button>
                      )}
                    />
                  </Tip>
                  <VolumeSlider.Root className="aether-sl aether-vol" step={5} largeStep={10}>
                    <VolumeSlider.Track className="aether-track">
                      <VolumeSlider.Fill className="aether-fill" />
                    </VolumeSlider.Track>
                    <VolumeSlider.Thumb className="aether-knob" />
                    <VolumeSlider.Preview className="aether-vol-preview">
                      <VolumeSlider.Value
                        type="pointer"
                        className="aether-bubble"
                        format={(value: number) => `${Math.round(value)}%`}
                      />
                    </VolumeSlider.Preview>
                  </VolumeSlider.Root>
                </div>

                <SpeedMenu />

                <Tip shortcut="I">
                  <PiPButton
                    className="aether-btn"
                    render={(props) => (
                      <button {...props}>
                        <PipIcon />
                      </button>
                    )}
                  />
                </Tip>

                <Tip shortcut="F">
                  <FullscreenButton
                    className="aether-btn"
                    render={(props, state) => (
                      <button {...props}>
                        {state.fullscreen ? <FullscreenExitIcon /> : <FullscreenEnterIcon />}
                      </button>
                    )}
                  />
                </Tip>
              </div>
            </Controls.Group>
          </Controls.Content>
        </Controls.Root>
      </Tooltip.Provider>

      {/* Keyboard shortcuts. They are scoped to the player by default (WCAG 2.1.4), or set to "document" when embedded. */}
      <Hotkey target={hotkeyTarget} keys="Space" action="togglePaused" />
      <Hotkey target={hotkeyTarget} keys="k" action="togglePaused" />
      <Hotkey target={hotkeyTarget} keys="m" action="toggleMuted" />
      <Hotkey target={hotkeyTarget} keys="f" action="toggleFullscreen" />
      <Hotkey target={hotkeyTarget} keys="i" action="togglePictureInPicture" />
      <Hotkey target={hotkeyTarget} keys="ArrowLeft" action="seekStep" value={-5} />
      <Hotkey target={hotkeyTarget} keys="ArrowRight" action="seekStep" value={5} />
      <Hotkey target={hotkeyTarget} keys="j" action="seekStep" value={-10} />
      <Hotkey target={hotkeyTarget} keys="l" action="seekStep" value={10} />
      <Hotkey target={hotkeyTarget} keys="ArrowUp" action="volumeStep" value={0.1} />
      <Hotkey target={hotkeyTarget} keys="ArrowDown" action="volumeStep" value={-0.1} />
      <Hotkey target={hotkeyTarget} keys="0-9" action="seekToPercent" />

      {/* Pointer and touch gestures. */}
      <Gesture type="tap" action="togglePaused" pointer="mouse" region="center" />
      <Gesture type="tap" action="toggleControls" pointer="touch" />
      <Gesture type="doubletap" action="seekStep" value={-10} region="left" />
      <Gesture type="doubletap" action="seekStep" value={10} region="right" />

      <StatusAnnouncer />

      <ErrorDialog.Root>
        <ErrorDialog.Popup className="aether-error">
          <ErrorDialog.Title className="aether-error-title" />
          <ErrorDialog.Description className="aether-error-text" />
          <ErrorDialog.Close className="aether-error-close">Dismiss</ErrorDialog.Close>
        </ErrorDialog.Popup>
      </ErrorDialog.Root>
    </Container>
  );
}
