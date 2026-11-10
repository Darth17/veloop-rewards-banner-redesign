# VELOOP Rewards: Banner Redesign (Task 08)

## Project Overview
Five premium, fintech-style promotional banners for the VELOOP Rewards platform, built as a reusable React banner system. Page background is `#161827`; every banner is 100% width and stays inside the required height range on each device.

## Banner List
| # | Banner | Route | Visual idea |
|---|--------|-------|-------------|
| 1 | Refer & Earn | `/refer-earn` | Two friends, gift box, referral code with copy button |
| 2 | Swap Center | `/swap-center` | VE card <-> SVE card with a rotating swap icon |
| 3 | Bonus VEs | `/bonus-ves` | Task cards feeding a bonus meter, VE coin, open vault |
| 4 | Captcha Tasks | `/captcha-tasks` | Laptop solving a captcha, gems as the reward |
| 5 | Exchange Center | `/exchange-center` | Gem card converting into a VE card |

## Features
- One reusable `RewardBanner` shell + five unique themes and custom SVG illustrations
- Whole card is clickable; CTAs have hover, active and focus-visible states
- Copy-to-clipboard referral code, count-up reward numbers
- Animations pause when a card is off-screen and are disabled for `prefers-reduced-motion`
- Accessible: labelled illustrations (`role="img"` + `aria-label`), keyboard-reachable controls, 44px+ touch targets

## Technology Stack
React 18, Vite, Bootstrap 5 (layout), CSS Modules, React Hooks, React Router, Lucide React, React Icons, `@fontsource-variable/plus-jakarta-sans`.

## Installation
```bash
npm install
npm run dev
```
Open the URL Vite prints (usually http://localhost:5173).

## Development Commands
| Command | What it does |
|---------|--------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |

## Folder Structure
```
src/
  components/
    RewardBanner/          shared shell (layout, heights, CTA)
    ReferEarnBanner/  SwapCenterBanner/  BonusVEsBanner/
    CaptchaTasksBanner/  ExchangeCenterBanner/
    shared/                Gem + Coin SVG parts
  hooks/                   useInView, useCountUp, useCopyToClipboard
  utils/bannerData.js      all copy + dummy data
  pages/                   Home (showcase) + FeaturePage (placeholder routes)
  styles/global.css        tokens, body background, reduced-motion
  assets/                  (illustrations are inline SVG, no heavy files)
```

## Responsive Design
| Device | Width | Height rule | Layout |
|--------|-------|-------------|--------|
| Mobile | < 768px | 330-520px | Illustration, heading, text, CTA stacked |
| Tablet | 768-1023px | 380-540px | Two columns |
| Desktop | >= 1024px | 410-450px | Two columns (`clamp(410px, 36vw, 450px)`) |

## Animation Details
Captcha: floating gems, typing caret, submit pulse. Bonus: ring fills once, dashed flow, bobbing coins. Swap: rotating arrows (faster on hover), drifting cards. Exchange: gem particle stream, nudging arrow. Refer: bouncing gift, floating coins, count-up numbers.

## Data Notes
Reward values (500 / 200 VEs) are **sample** data from the design. Replace them in `src/utils/bannerData.js` with approved referral rules before publishing.

## Screenshots
_Add screenshots here after running locally._

## Live Demo
_Not deployed yet._

## GitHub Repository
_Not pushed yet._

## Author
_Your name_


## Site header

The application includes a shared responsive navigation header on the homepage and feature preview routes. It contains the VELOOP Rewards brand mark, Overview navigation, Experiences and About anchors, a design-preview indicator, a feature guide link, and an Explore action. Header styling uses the project's existing navy, white, muted-blue, and gold colour tokens; the base colour palette has not been changed. The header uses Manrope for its wordmark, navigation, status label, and CTA, while the main page typography remains Plus Jakarta Sans.
