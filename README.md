# KISSA

A cinematic, scroll-driven snack restaurant site — chai, comfort food and a very long night. Near-black rooms, oversized editorial serif type, floating dishes, smoke, dust and pale-ice light. Built as a 2.5D experience: photographs, CSS masks, blend modes and transforms, no WebGL.

> **Live experience:** run `npm run dev` and open the printed URL.
> `?skipIntro=1` skips the preloader; `?lite=1` thins out the atmospheric effects.

> **Sample mode:** this build is a design demo. Every address, price, hour, stat and
> form is placeholder content, so the UI says so out loud — badges and watermarks on
> detail blocks, and a self-fading toast after a sample booking request.

---

## What is in there

- **Hero** — a photographic cutting-chai still with a slow breathing camera, pointer parallax, drifting steam and dust motes. Content-height on short viewports, so it never crops on phones.
- **Eight dishes, one long stage** — scrolling builds each plate part by part while the camera pushes, drifts and rotates between eight stations. Every dish can also be dragged to turn.
- **Photographic dishes, not image swaps** — eight layered 1400×1400 stills with feathered alpha, radial blend masks, animated smoke, ember particles, warm glow and per-frame transform/filter grading.
- **Story / spice / hours / invitation / menu / quote / visit** — full editorial sections with staggered reveals, a live night dial, animated counters, a draggable featured-dish rail and a printed menu.
- **Real map** — an OpenStreetMap embed at Koliwada Lane, dark-filtered to sit inside the room, with attribution and a directions link.
- **Menu overlay, booking modal, subscribe form** — working UI backed by an Express API that stores reservations and subscribers as JSON. Booking is demo-only: it posts, closes, and shows a sample toast.
- **Custom cursor, preloader, grain, vignette, bloom** — the full atmospheric pass, with reduced-motion support.

## Responsive

Layout is fluid from 320px phones to 2560px displays:

- fluid `clamp()` type that also respects viewport height, so headlines never push content off-screen;
- the dish plate is sized with `min(vw, vh)` and re-centres below 1024px; dish copy is bottom-anchored on narrow screens;
- a compact mode (`max-height: 620px`) for landscape phones and short laptop windows;
- desktop nav appears at 1280px, burger below that;
- safe-area padding for notched phones, `overflow-x: clip` everywhere, and 16px form fields on mobile so iOS never zooms.

## Stack

| Layer | Choice |
| --- | --- |
| App | React 19 + Vite 8 |
| Styling | Tailwind CSS 3 + a hand-authored design system in `src/index.css` |
| Motion | GSAP ScrollTrigger + Lenis smooth scroll + one shared rAF stage loop |
| API | Express 5 + JSON file storage |
| Assets | Python + Pillow bake pipeline (`scripts/build-photos.py`) |

## Run it

```bash
npm install
npm run dev        # Vite + API together
```

- Web: `http://localhost:5173` (Vite may pick the next free port)
- API: `http://localhost:8787`

Other scripts:

```bash
npm run build      # production build into dist/
npm run preview    # preview the build
npm run server     # API only (serves dist/ if it exists)
python scripts/build-photos.py   # rebuild the photographic assets
```

### Production

```bash
npm run build
npm run server
```

The Express server serves `dist/` and falls back to `index.html` for client-side routes.

## API

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/api/health` | health check (`service: "kissa"`) |
| `POST` | `/api/reserve` | `{ name, phone, date, time, guests, notes }` → booking reference |
| `POST` | `/api/subscribe` | `{ email }` → newsletter list |

Records are appended to `data/reservations.json` and `data/subscribers.json`.
If the API is unreachable the UI degrades gracefully and still shows the sample toast.

## Sample markers

- `src/components/Sample.jsx` exports `SampleBadge`, `SampleWatermark` and `SampleToast`.
- Badges sit on the hours header, stats, menu prices, dish rail, visit details, map, footer contact block, footer wordmark and every booking field.
- `.sample-watermark` is a tiled, rotated SVG "SAMPLE" wash; `.sample-toast` is the fixed, click-to-dismiss confirmation.

## Interaction notes

- Scroll through the dish stage to build each dish; the camera moves once a dish is assembled.
- Drag anywhere on the dish stage to turn the current dish. Pointer parallax is applied everywhere.
- The right-hand rail jumps to any dish; nav links scroll sections.
- `Esc` closes the menu / booking overlays.
- The menu overlay shows a floating dish still when hovering a featured item.
- Submitting the booking form posts a sample reservation, closes the modal and shows a self-fading toast (auto-hides after 9s, or close it yourself).

## Quality flags

| Query | Effect |
| --- | --- |
| `?lite=1` | fewer particles, softer smoke and grain |
| `?skipIntro=1` | skips the preloader (used by the capture scripts) |

Reduced-motion preference disables long transitions, the marquee and the stage drift.

## Photographic assets

`scripts/build-photos.py` turns the curated source photographs in `_analysis/food3`
into the runtime assets in `public/photos/`:

- crops and colour-grades each dish,
- bakes a blurred ambient plate behind the subject,
- applies a feathered radial alpha,
- exports 1400×1400 WebP with transparency.

Source photography was collected from free-licence stock libraries (Pexels and
Unsplash) and is used under their respective free-use licences. Dish imagery is an
original photographic interpretation built for this project. Source files are kept in
`_analysis/food3/` for traceability.

## Visual QA

The Playwright scripts in `scripts/` assume the dev server is running:

```bash
node scripts/responsive-audit.mjs   # horizontal-overflow audit, 320 → 2560
node scripts/responsive-shots.mjs   # hero / dish / visit / footer at six viewports
node scripts/qa-shots.mjs           # hours, menu, stats, map, footer, booking + toast, overlay
node scripts/qa2.mjs                # desktop hero, all eight dishes, every section, footer
node scripts/qa3.mjs                # menu overlay, hover preview, booking flow, mobile sets
node scripts/qa4.mjs                # menu card rail + mobile footer
```

Screenshots land in `screens/responsive/` and `screens/qa/`. Headless Chrome needs
`--enable-unsafe-swiftshader --disable-dev-shm-usage`; captures are slower than a real
GPU, so the scripts wait generously before shooting.

## Structure

```
src/
  components/      page sections, header, overlays, cursor, preloader, sample marks
  data/content.js  all copy, dishes, spices, menu, hours, stats
  lib/             stage state, motion helpers, smooth scroll, scroll lock, flags
  index.css        design system, masks and motion primitives
public/photos/     baked dish, hero, smoke and spice WebP assets
scripts/           asset bake pipeline + Playwright QA passes
server/            Express API and static hosting
_analysis/         source frames, contact sheets and stock photography
_recover/          decompiled reference bundle and recovered component sources
```

## Notes on fidelity

The layout, type scale, motion language and dish sequencing were reconstructed from a
supplied screen capture of the original night-café reference. The original live site was
unavailable, so the site was rebuilt from extracted frames, then renamed to KISSA and
made fully responsive. All photography is original to this build.

All food is vegetarian. All times are IST. The kettle is on.
