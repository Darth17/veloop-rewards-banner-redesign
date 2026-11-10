/**
 * Dummy data + copy for every banner. Backend integration is NOT part of this task.
 *
 * IMPORTANT: reward numbers below are SAMPLE values copied from the design
 * mock-up. Replace them with the latest approved referral rules before
 * presenting them as official claims.
 */

export const ROUTES = {
  refer: '/refer-earn',
  howRefer: '/how-it-works',
  swap: '/swap-center',
  bonus: '/bonus-ves',
  captcha: '/captcha-tasks',
  exchange: '/exchange-center',
};

export const REFERRAL_DEMO = {
  code: 'VELOOP123',
  youEarn: 500, // sample
  friendGets: 200, // sample
};

export const BANNER_COPY = {
  refer: {
    badge: 'REFER & EARN',
    headingTop: 'Refer Friends,',
    headingAccent: 'Earn Rewards',
    description: 'Invite your friends to VELOOP Rewards and earn exciting rewards together.',
    cta: 'Invite Now',
    secondary: 'How It Works',
  },
  swap: {
    headingTop: 'Swap',
    headingRest: ' Center',
    description: 'Convert eligible reward balances between supported currencies.',
    cta: 'Open Swap Center',
  },
  bonus: {
    headingTop: 'Boost Your',
    headingAccent: 'VE Balance',
    description:
      'Complete eligible activities and unlock additional VEs through special bonus opportunities.',
    cta: 'Explore Bonuses',
    steps: [
      { title: 'Daily Check-in', sub: 'Stay active' },
      { title: 'Invite Friends', sub: 'Grow together' },
      { title: 'Complete Tasks', sub: 'Earn more' },
    ],
  },
  captcha: {
    headingTop: 'Solve Captchas.',
    headingAccent: 'Earn Gems.',
    description: 'Complete simple captcha tasks accurately and earn eligible Gem rewards.',
    cta: 'Start Task',
  },
  exchange: {
    headingTop: 'Convert Gems to VEs',
    description: 'Exchange eligible Gems into VEs and grow your VE balance.',
    cta: 'Open Exchange Center',
  },
};

export const REFER_FEATURES = [
  { key: 'share', title: 'Easy to Share', text: 'Share your link or code in just one click.' },
  { key: 'rewards', title: 'Instant Rewards', text: 'Earn VEs instantly when friends join.' },
  { key: 'secure', title: '100% Secure', text: 'Secure referrals and real reward tracking.' },
  { key: 'unlimited', title: 'Unlimited Earning', text: 'Invite more friends and earn more VEs.' },
];

/** Placeholder destination pages so every CTA navigates somewhere real. */
export const FEATURE_PAGES = [
  { path: ROUTES.refer, title: 'Refer & Earn', blurb: 'Your referral dashboard will live here.' },
  { path: ROUTES.howRefer, title: 'How Referrals Work', blurb: 'Referral rules and milestones will be explained here.' },
  { path: ROUTES.swap, title: 'Swap Center', blurb: 'Currency conversion tools will live here.' },
  { path: ROUTES.bonus, title: 'Bonus VEs', blurb: 'Active bonus campaigns will be listed here.' },
  { path: ROUTES.captcha, title: 'Captcha Tasks', blurb: 'Available captcha tasks will appear here.' },
  { path: ROUTES.exchange, title: 'Exchange Center', blurb: 'Exchange and redemption options will live here.' },
];
