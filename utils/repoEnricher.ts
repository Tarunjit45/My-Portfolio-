
import { Repository, Category } from '../types';
import { REPO_METADATA_MAP } from '../constants';

export function enrichRepository(raw: any): Repository {
  const name = raw.name;
  const metadata = REPO_METADATA_MAP[name];

  if (metadata) {
    return {
      name,
      description: raw.description || "Project exploring technical boundaries and system architecture.",
      url: raw.html_url,
      live_link: raw.homepage || null,
      stars: raw.stargazers_count,
      language: raw.language,
      ai_summary: metadata.summary,
      category: metadata.category
    };
  }

  // Heuristic-based enrichment for new/unknown repositories
  const desc = (raw.description || "").toLowerCase();
  const tech = (raw.language || "").toLowerCase();
  
  let category: Category = "Specialized Web Systems";
  let summary = "A technical solution developed to streamline workflows and solve complex problems.";

  if (name.match(/ai|ll|model|pulse|genius|brain|gpt|gemini/i) || desc.match(/ai|machine learning|intelligence/i)) {
    category = "Intelligence Platforms";
    summary = `Leveraging ${raw.language || 'advanced AI'} to solve complex data interpretation and automation challenges.`;
  } else if (name.match(/watch|guard|audit|safety|token|hallu|trace|layer|shield/i) || desc.match(/observability|governance|safety|security/i)) {
    category = "AI Reliability & Governance";
    summary = "Ensuring AI system integrity and operational transparency through advanced auditing frameworks.";
  } else if (name.match(/craft|ranker|cli|tool|git|repo|sentinel|ref/i) || desc.match(/workflow|tool|automation|developer/i)) {
    category = "Software Engineering Tools";
    summary = "Optimizing the developer experience by automating repetitive engineering tasks and data flows.";
  }

  return {
    name,
    description: raw.description || "Innovative engineering project pushing modern development standards.",
    url: raw.html_url,
    live_link: raw.homepage || null,
    stars: raw.stargazers_count,
    language: raw.language,
    ai_summary: summary,
    category
  };
}
