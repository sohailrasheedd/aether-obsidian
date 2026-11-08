import { AetherPlayer } from "@/components/aether/AetherPlayer";

// Public Video.js demo asset, used only when no Playback ID is configured.
const DEMO_PLAYBACK_ID = "BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM";

const playbackId = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID || DEMO_PLAYBACK_ID;
const title = process.env.NEXT_PUBLIC_VIDEO_TITLE || "Aether Obsidian";

const SHORTCUTS: ReadonlyArray<readonly [string, string]> = [
  ["Space / K", "Play or pause"],
  ["← →", "Seek 5 seconds"],
  ["J / L", "Seek 10 seconds"],
  ["↑ ↓", "Volume 10%"],
  ["M", "Mute"],
  ["F", "Fullscreen"],
  ["I", "Picture in picture"],
  ["0 – 9", "Jump to 0–90%"],
];

export default function Page() {
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-5xl flex-col justify-center gap-8 px-4 py-10 sm:px-6">
      <header className="flex flex-col gap-2">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky-300/80">
          Video.js v10 skin
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Aether Obsidian</h1>
        <p className="max-w-2xl text-sm leading-relaxed text-white/65 sm:text-base">
          A quiet glass dock on matte obsidian, with one light that follows the playhead. Streaming
          from Mux, composed from Video.js v10 primitives.
        </p>
      </header>

      <AetherPlayer playbackId={playbackId} title={title} />

      <section aria-labelledby="keys" className="flex flex-col gap-3">
        <h2 id="keys" className="text-sm font-medium text-white/80">
          Keyboard shortcuts
        </h2>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
          {SHORTCUTS.map(([keys, label]) => (
            <div key={keys} className="flex items-center justify-between gap-3 text-sm">
              <dt>
                <kbd>{keys}</kbd>
              </dt>
              <dd className="text-white/60">{label}</dd>
            </div>
          ))}
        </dl>
        <p className="text-xs text-white/70">
          Click the player or press Tab to focus it first. On touch, tap to reveal controls and
          double-tap the left or right side to skip 10 seconds.
        </p>
      </section>
    </main>
  );
}
