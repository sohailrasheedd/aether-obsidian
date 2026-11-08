# Aether Obsidian

A Video.js v10 skin for the Contra x Video.js Skins Design Challenge. Dark glass floating dock, one cyan-to-indigo light on the playhead, Mux streaming, built with Next.js 15 (App Router), React 19, Tailwind CSS 4 and `@videojs/react` 10.3.0.

## 1. Run it locally

Requirements: Node.js 20 or newer.

```bash
cd aether-obsidian
npm install
cp .env.example .env.local
# edit .env.local and set NEXT_PUBLIC_MUX_PLAYBACK_ID to your own public Playback ID
npm run dev
```

Open http://localhost:3000. If no Playback ID is set, the public Mux demo asset plays so you can check the skin first.

Run `npm run typecheck` and `npm run build` before you deploy.

## 2. Get your Mux Playback ID (bonus point 1)

1. Create a free account at mux.com and open the dashboard.
2. Go to Video, then Assets, then Create new asset, and upload a video (or paste a direct video URL).
3. Open the asset and make sure its playback policy is **Public**.
4. Copy the **Playback ID** and set it as `NEXT_PUBLIC_MUX_PLAYBACK_ID`.

The same ID also drives the poster (`image.mux.com/<id>/thumbnail.jpg`) and the hover frame previews (`image.mux.com/<id>/storyboard.vtt`).

## 3. Deploy to Vercel

```bash
npm i -g vercel        # once
vercel login
vercel                 # first deploy, accept the defaults
vercel env add NEXT_PUBLIC_MUX_PLAYBACK_ID production
vercel env add NEXT_PUBLIC_VIDEO_TITLE production
vercel --prod
```

Or push the folder to GitHub, import the repository at vercel.com/new, add the two environment variables, and deploy. Open the production URL in a private window to confirm there is no login or setup barrier.

## 4. Embed it in your live site (bonus point 2)

Either copy `components/aether/` into your portfolio project and render:

```tsx
import { AetherPlayer } from "@/components/aether/AetherPlayer";

<AetherPlayer playbackId="YOUR_PLAYBACK_ID" title="Project reel" />
```

or embed the chrome-free `/embed` route from this deployment:

```html
<iframe src="https://YOUR-DEPLOYMENT.vercel.app/embed" title="Project reel"
  allow="fullscreen; picture-in-picture; autoplay" allowfullscreen
  style="width:100%;aspect-ratio:16/9;border:0"></iframe>
```

The component route is the stronger submission because the skin runs on your real site, not inside a frame.

## Design thinking and rationale (3 sentences, for the judges)

Aether Obsidian treats the player as a quiet instrument: one floating glass dock on matte obsidian, with a single cyan-to-indigo light that follows the playhead so the footage stays the loudest thing on screen. It is composed entirely from Video.js v10 primitives, so playback state, hotkeys, gestures, menus and screen reader announcements stay in the library, and the skin itself is only layout, glyphs and CSS driven by data attributes. Every control has a 44px or larger target and a visible cyan focus ring, sits on a blurred scrim that holds contrast over bright and dark footage, and drops its motion when the viewer asks for reduced motion.

## Rubric map

| Rubric item | Where it lives |
| --- | --- |
| Play, seek, time, volume, mute, fullscreen | `AetherSkin.tsx` dock |
| Keyboard: Space/K, arrows, M, F, Tab, Esc | `Hotkey` set in `AetherSkin.tsx`, slider keys built in, `Menu` closes on Esc |
| Responsive | Container query at 640px in `aether.css`; dock becomes two rows |
| Touch targets | `--a-btn` is 44px, 48px on coarse pointers and in fullscreen |
| Focus rings | Cyan 2px ring on every control, `aether.css` |
| Reduced motion | `prefers-reduced-motion` block at the end of `aether.css` |
| Contrast over any footage | Top and bottom scrim plus blurred glass dock |
| Mux bonus | `MuxVideo source={{ playbackId }}` in `AetherPlayer.tsx` |

## Notes

- Controls hide after the Video.js idle delay. In v10 that delay is not a public option, so it is not set to a custom 2.5 seconds.
- Space and arrow keys act when focus is anywhere inside the player (click it or press Tab once). This is how Video.js scopes hotkeys, so several players on one page do not fight over keys.
- License: Apache-2.0, as the challenge requires.
