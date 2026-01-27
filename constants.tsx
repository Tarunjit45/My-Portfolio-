
import { PortfolioConfig, Category } from './types';

export const PORTFOLIO_CONFIG: PortfolioConfig = {
  name: "Tarunjit Biswas",
  role: "AI Research Engineer | Vibe Coder",
  bio: "Engineering at extreme velocity. I architect production-grade AI tools, autonomous agents, and full-stack ecosystems in record time by leveraging cutting-edge AI-augmented workflows.",
  primaryColor: "indigo",
  githubUser: "Tarunjit45",
  socials: {
    github: "https://github.com/Tarunjit45",
    linkedin: "https://www.linkedin.com/in/tarunjit-biswas-a5248131b/",
    twitter: "https://twitter.com/tarunjit45",
    email: "mailto:hello@tarunjit.dev"
  }
};

export const ABOUT_ME = {
  title: "The Speed of Intelligence",
  description: `I am a "Vibe Coder"—an engineer who bypasses traditional development bottlenecks by orchestrating AI to build complex, production-ready systems at 10x speed. My path is set on becoming an AI Research Engineer, pushing the boundaries of how we observe, audit, and secure the next generation of Large Language Models.`,
  highlightPoints: [
    { label: "Extreme Velocity", value: "I ship robust AI tools and full-stack platforms in hours or days, not weeks." },
    { label: "Research Aspirations", value: "Focusing on agentic governance, safety auditing, and token architecture efficiency." },
    { label: "AI Orchestrator", value: "Mastery of utilizing LLMs to accelerate coding while maintaining high research integrity." },
    { label: "System Architect", value: "From physics simulators (MuJoCo) to complex observability dashboards." }
  ]
};

// Map of repository names to their analyzed Category and AI Problem-Solver Summary
export const REPO_METADATA_MAP: Record<string, { category: Category; summary: string }> = {
  "agentwatch": {
    category: "AI Reliability & Governance",
    summary: "Prevents runaway AI costs by providing real-time visibility and monitoring of agent token consumption."
  },
  "AI-Pulse": {
    category: "Intelligence Platforms",
    summary: "Distills fragmented AI industry news into a unified, intelligent real-time research dashboard."
  },
  "tokenlens": {
    category: "AI Reliability & Governance",
    summary: "Optimizes LLM operational margins by profiling and exposing redundant token expenditure in model architectures."
  },
  "ChainWatch": {
    category: "AI Reliability & Governance",
    summary: "Ensures accountability in complex AI workflows by recording and verifying every step in a decision chain."
  },
  "HalluciScope": {
    category: "AI Reliability & Governance",
    summary: "Safeguards AI output reliability by locally auditing and scoring LLM responses for factual hallucinations."
  },
  "OmniAnalyzer-AI": {
    category: "Intelligence Platforms",
    summary: "Protects sensitive environments by performing deep AI-powered security and content audits on files."
  },
  "CommitCraft": {
    category: "Software Engineering Tools",
    summary: "Accelerates developer workflows by instantly generating high-quality, semantic git documentation."
  },
  "github-ranker": {
    category: "Software Engineering Tools",
    summary: "Modernizes talent discovery by providing a meritocratic leaderboard based on verified GitHub impact."
  },
  "OMR-Genius": {
    category: "Specialized Web Systems",
    summary: "Eliminates manual grading errors by automating the scanning and mark calculation of physical exams."
  },
  "ExamGenius": {
    category: "Intelligence Platforms",
    summary: "Converts overwhelming syllabi into personalized, interactive AI study adventures to solve procrastination."
  },
  "IndiaJobFinder": {
    category: "Specialized Web Systems",
    summary: "Surfaces hidden regional and startup job opportunities by scanning beyond traditional aggregators."
  },
  "HandWave-Volume-Controller": {
    category: "Specialized Web Systems",
    summary: "Enables touchless hardware accessibility by mapping AI hand gestures to system interface controls."
  },
  "SpecGuard": {
    category: "AI Reliability & Governance",
    summary: "Enforces AI safety policies by transforming guidelines into rigid, executable unit tests for LLM outputs."
  },
  "Sentinel-Pro-v2.5": {
    category: "Software Engineering Tools",
    summary: "Provides low-latency hardware diagnostics through a specialized terminal command center for engineers."
  },
  "one-app": {
    category: "Specialized Web Systems",
    summary: "Reduces digital noise by focusing daily self-improvement on one meaningful reflective interaction."
  },
  "local-researcher": {
    category: "Intelligence Platforms",
    summary: "Facilitates private, offline-first knowledge synthesis using localized small language models (SLMs)."
  },
  "PromptGuard": {
    category: "AI Reliability & Governance",
    summary: "Standardizes AI development by preventing semantic regressions across different model configurations."
  },
  "BatchBook": {
    category: "Specialized Web Systems",
    summary: "Preserves community heritage by providing a modern digital platform for alumni connection."
  },
  "upside-down-portal": {
    category: "Intelligence Platforms",
    summary: "Transforms user input into cinematic AI-generated art assets using advanced generative diffusion."
  },
  "OshoAI-Spiritual-Voice-Deep-Wisdom": {
    category: "Intelligence Platforms",
    summary: "Preserves spiritual teachings through highly emotive, context-aware AI voice generation."
  },
  "Soulmate-AI---Virtual-Girlfriend": {
    category: "Intelligence Platforms",
    summary: "Solves social isolation by creating an emotive, interactive virtual companionship ecosystem."
  },
  "Spam-Email-Classifier": {
    category: "AI Reliability & Governance",
    summary: "Protects communication integrity using localized machine learning to filter malicious digital intent."
  },
  "repo-specialist": {
    category: "Software Engineering Tools",
    summary: "Streamlines high-quality project discovery in specialized domains like Cybersecurity and AI."
  },
  "SignalLite": {
    category: "Specialized Web Systems",
    summary: "Provides a privacy-first messaging alternative focused on low-latency communication."
  },
  "kyros-esports": {
    category: "Specialized Web Systems",
    summary: "Centralizes the competitive gaming experience into a high-performance tournament management platform."
  },
  "AnonChat-": {
    category: "Specialized Web Systems",
    summary: "Facilitates secure, anonymous community interactions without compromising user privacy."
  },
  "mujoco_warp": {
    category: "Specialized Web Systems",
    summary: "High-performance physics simulation for NVIDIA hardware, optimizing robotic learning environments."
  }
};
