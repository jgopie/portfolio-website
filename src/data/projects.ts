import type { ImageMetadata } from 'astro';
import slimefallIcon from '../assets/apps/slimefall/icon.jpg';
import slimefallShot1 from '../assets/apps/slimefall/01-drop-match-evolve.jpg';
import slimefallShot2 from '../assets/apps/slimefall/02-build-bigger-slimes.jpg';
import slimefallShot3 from '../assets/apps/slimefall/03-beat-the-drop-clock.jpg';
import slimefallShot4 from '../assets/apps/slimefall/04-blast-a-path.jpg';
import slimefallShot5 from '../assets/apps/slimefall/05-choose-your-next-drop.jpg';
import slimefallShot6 from '../assets/apps/slimefall/06-play-your-style.jpg';
import { brownieLegal } from './brownieBadgeProgressionLegal';
import { slimefallArcadeLegal } from './slimefallArcadeLegal';
import { viridianCostManagerLegal } from './viridianCostManagerLegal';

export type AppStatus = 'live' | 'in-development' | 'unreleased';

export interface Screenshot {
  src: ImageMetadata;
  alt: string;
}

export interface AppProject {
  slug: string;
  name: string;
  status: AppStatus;
  statusLabel: string;
  tagline: string;
  summary: string;
  platforms: string[];
  highlights: string[];
  facts?: { label: string; value: string }[];
  stack: string[];
  icon?: ImageMetadata;
  screenshots: Screenshot[];
  storeLinks: { label: string; href: string }[];
  relatedLinks: { label: string; href: string }[];
}

export interface ClientProject {
  title: string;
  category: string;
  role: string;
  summary: string;
  stack: string[];
}

export const apps: AppProject[] = [
  {
    slug: 'slimefall-arcade',
    name: slimefallArcadeLegal.appName,
    status: 'live',
    statusLabel: 'Live on the App Store',
    tagline: 'A physics merge puzzle built for quick sessions and satisfying chains.',
    summary:
      'A free iPhone and iPad physics merge game I built solo in TypeScript on Phaser 4 and Matter physics, then shipped natively through Capacitor. It runs entirely on-device, with no backend to operate.',
    platforms: ['iPhone', 'iPad'],
    highlights: [
      'Three modes: a timed Arcade run with a ramping drop clock, an untimed Cozy run, and a seeded Daily challenge that every player gets on a shared 07:00 UTC reset.',
      'Physics merge rules with ten evolution tiers per theme, progression-weighted drops, danger-line timing, and pity-weighted Starburst and Prism Shift powerups.',
      'Capacitor iOS shell with Game Center leaderboards and offline score queuing; progress, Bits, and themes are stored locally.',
      'Consent-gated AdMob rewarded and interstitial ads, with interstitials paced by active play time and capped per hour.',
      'Vitest simulation tests and Playwright browser, visual-contact, and frame-pacing performance suites running in CI and nightly.',
      'Scripted release tooling for TestFlight uploads, App Store Connect metadata, and Game Center leaderboard provisioning.',
    ],
    facts: [
      { label: 'Released', value: 'Sep 2026 · v1.0.5' },
      { label: 'Team', value: 'Solo build' },
      { label: 'Backend', value: 'None, all on-device' },
    ],
    stack: ['TypeScript', 'Phaser 4', 'Matter.js', 'Capacitor', 'Tone.js', 'Game Center', 'AdMob'],
    icon: slimefallIcon,
    screenshots: [
      { src: slimefallShot1, alt: 'Slimefall Arcade: drop, match, evolve.' },
      { src: slimefallShot2, alt: 'Slimefall Arcade: build bigger slimes.' },
      { src: slimefallShot3, alt: 'Slimefall Arcade: beat the drop clock in Arcade mode.' },
      { src: slimefallShot4, alt: 'Slimefall Arcade: blast a path with powerups.' },
      { src: slimefallShot5, alt: 'Slimefall Arcade: choose your next drop.' },
      { src: slimefallShot6, alt: 'Slimefall Arcade: play your style with Arcade, Daily, and Cozy modes.' },
    ],
    storeLinks: [
      {
        label: 'Download on the App Store',
        href: 'https://apps.apple.com/us/app/slimefall-arcade/id6790214617',
      },
    ],
    relatedLinks: [
      { label: 'Support', href: slimefallArcadeLegal.routes.support },
      { label: 'Privacy policy', href: slimefallArcadeLegal.routes.privacyPolicy },
    ],
  },
  {
    slug: 'brownie-badge-progression',
    name: brownieLegal.appName,
    status: 'in-development',
    statusLabel: 'In development · charity project',
    tagline: 'Badge tracking and certificates for volunteer-run youth units.',
    summary:
      'A volunteer project for a youth charity. Authorized adult leaders manage units, track badge progress, and generate certificates across mobile and desktop, including when the connection drops.',
    platforms: ['Android', 'iOS', 'Desktop'],
    highlights: [
      'Google sign-in with administrator approval and server-enforced, role-based permissions.',
      'Offline-first editing with synchronization, change receipts, and conflict prevention.',
      'Certificate generation with drawn signatures and division and unit snapshots.',
      'Desktop builds keep records locally in SQLite; mobile builds share a Firebase backend.',
      'No ads, analytics, or tracking. Built around the privacy of children’s records.',
    ],
    stack: ['Firebase', 'Google Auth', 'SQLite', 'Offline sync'],
    screenshots: [],
    storeLinks: [],
    relatedLinks: [
      { label: 'Privacy policy', href: '/apps/brownie-badge-progression/privacy-policy' },
      { label: 'Account deletion', href: '/apps/brownie-badge-progression/account-deletion' },
    ],
  },
  {
    slug: 'viridian-cost-manager',
    name: viridianCostManagerLegal.appName,
    status: 'unreleased',
    statusLabel: 'Unreleased',
    tagline: 'Organization budgeting with receipt capture and reporting.',
    summary:
      'An organization-based budgeting app for tracking transactions against budgets, capturing receipts, and producing reports. Built and prepared for release, but not published.',
    platforms: ['Mobile'],
    highlights: [
      'Organization-scoped budgets and transaction tracking.',
      'Receipt capture attached to transactions.',
      'Reporting across budgets and time periods.',
      'Account deletion and data-handling flows prepared for store review.',
    ],
    stack: ['Firebase', 'Receipt capture', 'Reporting'],
    screenshots: [],
    storeLinks: [],
    relatedLinks: viridianCostManagerLegal.directLinks.map((link) => ({ ...link })),
  },
];

export const clientProjects: ClientProject[] = [
  {
    title: 'MLS Broker Portal',
    category: 'Web platform',
    role: 'Full-stack build across React, Python, Firebase, Cloud Run, and async tasking.',
    summary:
      'Designed listing detail surfaces and atomic claim-to-CRM behavior for work where duplicate ownership would have caused real operational pain.',
    stack: ['React', 'Python', 'Firebase', 'Cloud Run'],
  },
  {
    title: 'Permit & Property Verification Pipeline',
    category: 'Automation',
    role: 'Solo pipeline owner using Python, TypeScript, FastAPI, Playwright, PostgreSQL, and Docker.',
    summary:
      'Turned brittle jurisdiction research into scheduled verification runs with integration coverage and fewer production surprises.',
    stack: ['Python', 'FastAPI', 'Playwright', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'WhatsApp AI Intake Automation',
    category: 'AI automation',
    role: 'Technical owner across Next.js, PostgreSQL, Prisma, WhatsApp Cloud API, OpenAI, and OAuth.',
    summary:
      'Built structured triage, auditable summaries, human escalation, and case-management syncing for a conversational intake path.',
    stack: ['Next.js', 'Prisma', 'WhatsApp Cloud API', 'OpenAI'],
  },
];

export const capabilities = [
  {
    title: 'Mobile apps',
    body:
      'iOS and Android apps taken from first build through store review and release, including auth, offline data, sync, leaderboards, and ads.',
    stack: ['Flutter', 'Capacitor', 'TypeScript', 'Firebase', 'SQLite'],
  },
  {
    title: 'Backend systems',
    body:
      'APIs, data models, and cloud services that stay correct under real use, with atomic operations, background jobs, and integration tests.',
    stack: ['Python', 'FastAPI', 'TypeScript', 'PostgreSQL', 'Cloud Run'],
  },
  {
    title: 'Automations',
    body:
      'Pipelines and AI-assisted workflows that replace manual research and intake, with audit trails and a human in the loop where it matters.',
    stack: ['Playwright', 'Docker', 'OpenAI', 'WhatsApp API', 'Schedulers'],
  },
] as const;

export const getApp = (slug: string) => apps.find((app) => app.slug === slug);
