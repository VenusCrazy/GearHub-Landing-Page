# Gear Hub — Landing Page

The marketing site for [Gear Hub](https://github.com/jazzstack/Gear-Hub), a desktop app that talks directly to your HID devices to control DPI, polling rate, RGB, debounce and more — no cloud, no account, no drivers.

> **Gear Hub is a landing page repo.** The app it describes lives at [github.com/jazzstack/Gear-Hub](https://github.com/jazzstack/Gear-Hub).

## What Gear Hub does

Gear Hub is an offline control panel for gaming gear. It reads and writes settings over local HID — nothing leaves your machine:

- **Device catalog** — keyboards, mice, headphones and mics in one place, grouped by type with live connection states and one-click navigation.
- **Overview, live** — DPI, polling rate, lighting and firmware, read straight off the device.
- **Performance tuning** — per-model DPI sliders with 400/800/1600/3200 presets, polling rate and sensor options, plus debounce on keyboards, saved to the device itself.
- **RGB & lighting** — logo lighting for mice and RGB effects for keyboards, applied to the device — not to a cloud account.
- **TFT screen** — GIF upload to the Aula F75 Max's 128×128 display (5 slots), with a test pattern and diagnostics.
- **Settings & updates** — app info, in-app updates with download and restart-to-install, GitHub/website links and a one-click Report a bug.

### Why offline

| | |
|---|---|
| **0 accounts** | No login, no telemetry. Your gear is yours. |
| **0 cloud requests** | Every read/write is local HID. Unplug the internet, everything still works. |
| **0 drivers** | No vendor bloatware or background services. |
| **100% on-device** | Settings save to the device, so your config follows your hardware. |

## The landing page

A single-page neutral editorial site built with Vite + React, in the style of a premium hardware-control product page: near-black surfaces, hairline borders, oversized display typography (Inter + JetBrains Mono) and a staged product mockup.

### Sections

1. **Hero** — "All your gear. One control panel." over a reactive dot field and a product stage with the Razer Viper Mini and an in-browser control-panel preview.
2. **Principles** — offline by design, no drivers, one interface.
3. **Devices** — a scrolling brand marquee plus a supported-hardware index grouped by brand (Razer, Redragon, Aula, Logitech, Kreo).
4. **Why offline** — the privacy pitch as a four-up stat grid.
5. **Settings** — in-app updates, links and report-a-bug.
6. **Download** — version 0.5.14 for Windows.
7. **FAQ** — privacy, compatibility, updates and open source.

### Interactive components

| Component | What it does |
|---|---|
| `AnimatedContent` | Scroll-triggered reveals (GSAP + ScrollTrigger). |
| `ClickSpark` | Sparks at the click point anywhere on the page. |
| `DotField` | Canvas dot grid behind the hero that bulges around your cursor. |
| `Icon` | Inline SVG icon set (arrows, mouse, shield, sliders, …). |

## Tech stack

- **Vite 8** + **React 19** (compiled with `@vitejs/plugin-react` via Oxc)
- **GSAP 3** + **ScrollTrigger** for scroll animations
- **oxlint** for linting

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server
npm run build   # production build → dist/
npm run preview # preview the production build
npm run lint    # run oxlint
```

## Project structure

```
src/
├── App.jsx                    # page sections + data
├── App.css                    # page styles
├── index.css                  # global styles, design tokens
├── main.jsx                   # entry point
└── components/
    ├── AnimatedContent/       # scroll-triggered reveal wrapper
    ├── ClickSpark/            # click-spark canvas effect
    └── DotField/              # hero dot-grid canvas effect
```

## Accessibility

- All effects respect `prefers-reduced-motion` (animation loops freeze, logo animations disable).
- Canvas effects are `pointer-events: none` and the dot field is `aria-hidden` — they never block or hijack interaction.
