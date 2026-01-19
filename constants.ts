import { Project } from './types';

export const projects: Project[] = [
  {
    title: "LedgerLane",
    description: "A workflow-driven billing and reconciliation platform for logistics teams, built to reduce invoice disputes and speed up month-end close.",
    tags: ["React", "Convex", "TypeScript"],
    link: "https://ledger-lane-demo.pages.dev"
  },
  {
    title: "BitFlip",
    description: "A TikTok-style infinite feed mobile app of retro microgames. Swipe up to play the next instant hit.",
    tags: ["React Native", "Expo", "TypeScript"],
    link: "https://bitflip-arcade-demo.pages.dev/"
  },
  {
    title: "AegisOps",
    description: "An internal operations console for managing access requests, approvals, and audit trails with clear role-based workflows.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#"
  },
  {
    title: "ArbiterAI",
    description: "An AI finance agent that reviews vendor bills, flags anomalies, and drafts approvals with citations tied to policies, contracts, and prior spend.",
    tags: ["AI SDK", "Claude SDK", "Convex", "React"],
    link: "#"
  }
];