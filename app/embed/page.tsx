import { AetherPlayer } from "@/components/aether/AetherPlayer";

const DEMO_PLAYBACK_ID = "BV3YZtogl89mg9VcNBhhnHm02Y34zI1nlMuMQfAbl3dM";

const playbackId = process.env.NEXT_PUBLIC_MUX_PLAYBACK_ID || DEMO_PLAYBACK_ID;
const title = process.env.NEXT_PUBLIC_VIDEO_TITLE || "Aether Obsidian";

/** Chrome-free page for embedding in an iframe on a portfolio or production site. */
export default function EmbedPage() {
  return (
    <main className="w-full h-full min-h-dvh flex items-center justify-center bg-[#0B0D11] p-0 overflow-hidden">
      <div className="w-full h-full max-w-[1280px]">
        <AetherPlayer playbackId={playbackId} title={title} hotkeyTarget="document" />
      </div>
    </main>
  );
}
