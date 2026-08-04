# Gear Hub — Landing Page

The marketing site for [Gear Hub](https://github.com/jazzstack/Gear-Hub), a desktop app that talks directly to your HID devices to control DPI, polling rate, RGB, debounce and more — no cloud, no account, no drivers.

> **Gear Hub is a landing page repo.** The app it describes lives at [github.com/jazzstack/Gear-Hub](https://github.com/jazzstack/Gear-Hub).

## What Gear Hub does

Gear Hub is an offline control panel for gaming gear. It reads and writes settings over local HID — nothing leaves your machine:

- **Device catalog** — keyboards, mice, headsets and mics in one place, detected and listed automatically.
- **Overview, live** — DPI, polling rate, lighting profile and firmware, read straight off the device.
- **Performance tuning** — DPI sliders with presets, polling rate and sensor options, saved to the device itself.
- **RGB & lighting** — modes, colors and brightness applied to the device — not to a cloud account.

### Why offline

| | |
|---|---|
| **0 accounts** | No login, no telemetry. Your gear is yours. |
| **0 cloud requests** | Every read/write is local HID. Unplug the internet, everything still works. |
| **0 drivers** | No vendor bloatware or background services. |
| **100% on-device** | Settings save to the device, so your config follows your hardware. |

## The landing page

A single-page dark editorial site built with Vite + React, featuring scroll-triggered reveals, animated product mockups and two interactive canvas effects.

### Sections

1. **Hero** — animated logo mark over a reactive dot field that bulges around your cursor.
2. **Features** — device catalog, live overview, performance tuning and lighting, with in-browser mockups.
3. **Devices** — supported hardware table (Razer, Redragon, Logitech, Aula, …).
4. **Why offline** — the privacy pitch.
5. **Power users** — dev tools and advanced settings.
6. **Download** — version 0.5.0 for macOS + Windows.

### Interactive components

| Component | What it does |
|---|---|
| `AnimatedContent` | Scroll-triggered reveals (GSAP + ScrollTrigger). |
| `ClickSpark` | Sparks at the click point anywhere on the page. |
| `DotField` | Canvas dot grid in the hero that bulges around the cursor, with a soft radial glow. |

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
