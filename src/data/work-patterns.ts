/**
 * Engagement patterns shown on /work/patterns/.
 * When real case studies are cleared, add them here (or extend with a `cases` array)
 * using the same shape. Keep client names empty until you have permission.
 */

export interface WorkPattern {
  /** Stable slug for future per-case URLs, e.g. /work/agent-ops/ */
  id: string;
  title: string;
  sector: string;
  problem: string;
  approach: string;
  /** Outcome type, not a fabricated metric */
  outcome: string;
  /** Set when a named or anonymized case study is ready */
  caseStudyReady?: boolean;
  clientLabel?: string;
}

export const workPatterns: WorkPattern[] = [
  {
    id: 'agent-ops',
    title: 'Agent in production, not just in a demo',
    sector: 'B2B product / internal tools',
    problem:
      'The agent looked fine when someone was clicking through a demo. Once it ran alone on live data, it looped, spent money in weird ways, or failed quietly.',
    approach:
      'Tight tool access, an eval suite before each release, hard limits on actions and cost, monitoring for drift and loops, and a rollback the team will hit.',
    outcome:
      'A system you can leave running. Known failure modes. Someone owns the pager.',
    caseStudyReady: false,
  },
  {
    id: 'open-models',
    title: 'Open models when APIs stop fitting',
    sector: 'Data-sensitive or cost-sensitive stacks',
    problem:
      'Hosted APIs hit a wall on data residency, lock-in, or unit economics once volume went up.',
    approach:
      'Self-hosted open-weight models (Llama, Mistral, Qwen, that crowd) behind the same product surface, with RAG and ops built for production.',
    outcome:
      'Inference you control, with a cost and reliability picture you can forecast.',
    caseStudyReady: false,
  },
  {
    id: 'corporate-llm',
    title: 'Corporate LLM as a shared company capability',
    sector: 'Internal platforms / knowledge work',
    problem:
      'Teams bolted consumer chat onto Slack or Notion. Nobody knew where the data went. Cost spiked. Access, evals, and incidents had no owner.',
    approach:
      'Corporate LLM work: pick hosted and/or open models, RAG over approved docs, access and audit trails, budget limits, monitoring, and a reliability path.',
    outcome:
      'One internal LLM stack under company policy. Multiple teams can use it without reinventing the plumbing each time.',
    caseStudyReady: false,
  },
  {
    id: 'readiness-audit',
    title: 'Build, buy, or skip before the sprint',
    sector: 'Seed to Series B / growing companies',
    problem:
      'Pressure to "do AI" with no use case that pays for itself, or a POC that could never survive production.',
    approach:
      'Fixed-scope Readiness & Production Audit: use-case shortlist, whether an agent even helps, build / buy / skip, cost model, EU AI Act check when it applies.',
    outcome:
      'A clear go / no-go, and a path that matches the team you actually have.',
    caseStudyReady: false,
  },
  {
    id: 'reliability-retainer',
    title: 'Keep it running after ship',
    sector: 'Teams that already shipped AI',
    problem:
      'The build ended. Evals, drift, incidents, and governance had nobody standing behind them.',
    approach:
      'Reliability Retainer: monitoring, guardrails, drift and cost control, incident response, periodic AI Act re-check.',
    outcome:
      'Ongoing reliability without hiring a full in-house AI ops function on day one.',
    caseStudyReady: false,
  },
];
