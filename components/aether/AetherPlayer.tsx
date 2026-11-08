"use client";

import { createPlayer } from "@videojs/react";
import { MuxVideo } from "@videojs/react/media/mux-video";
import { videoFeatures } from "@videojs/react/video";
import { AetherSkin } from "./AetherSkin";

const { Player } = createPlayer({ features: videoFeatures });

export interface AetherPlayerProps {
  /** Public Mux Playback ID. The asset's playback policy must be "public". */
  playbackId: string;
  title?: string;
  /** Optional poster override. Defaults to the Mux thumbnail at 0s. */
  poster?: string;
  /** Where hotkeys listen. Defaults to "player" (WCAG 2.1.4 compliant). Pass "document" for full-page embeds. */
  hotkeyTarget?: "player" | "document";
}

export function AetherPlayer({ playbackId, title, poster, hotkeyTarget = "player" }: AetherPlayerProps) {
  const posterUrl = poster ?? `https://image.mux.com/${playbackId}/thumbnail.jpg?time=0`;

  return (
    <Player poster={posterUrl}>
      <AetherSkin title={title} hotkeyTarget={hotkeyTarget}>
        <MuxVideo source={{ playbackId }} playsInline preload="metadata" crossOrigin="anonymous">
          {/* Mux storyboard: powers the hover frame previews on the seek bar. */}
          <track
            kind="metadata"
            label="thumbnails"
            src={`https://image.mux.com/${playbackId}/storyboard.vtt`}
            default
          />
        </MuxVideo>
      </AetherSkin>
    </Player>
  );
}
