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
      'An agent looked fine in demos, then looped, spent unpredictably, or failed silently once it ran unattended against live data.',
    approach:
      'Bounded tools, eval suite before each release, guardrails on actions and cost, monitoring for drift and loops, clear rollback.',
    outcome:
      'A system the team can leave running, with known failure modes and an owner for incidents.',
    caseStudyReady: false,
  },
  {
    id: 'open-models',
    title: 'Open models where APIs do not fit',
    sector: 'Data-sensitive or cost-sensitive stacks',
    problem:
      'Hosted APIs blocked on data residency, lock-in, or unit economics once volume grew.',
    approach:
      'Self-hosted open-weight models (e.g. Llama, Mistral, Qwen) behind the same product surface, with RAG and ops wired for production.',
    outcome:
      'Inference under your control, with a cost and reliability model you can forecast.',
    caseStudyReady: false,
  },
  {
    id: 'readiness-audit',
    title: 'Build, buy, or skip before the sprint',
    sector: 'Seed to Series B / growing companies',
    problem:
      'Pressure to "do AI" without a use case that pays for itself, or with a POC that cannot survive production.',
    approach:
      'Fixed-scope Readiness & Production Audit: use-case shortlist, agent feasibility, build/buy/skip, cost model, EU AI Act check where it applies.',
    outcome:
      'A clear go / no-go and a path that matches the team you actually have.',
    caseStudyReady: false,
  },
  {
    id: 'reliability-retainer',
    title: 'Keep it running after ship',
    sector: 'Teams that already shipped AI',
    problem:
      'The build ended, but evals, drift, incidents, and governance had no standing owner.',
    approach:
      'Reliability Retainer: monitoring, guardrails, drift and cost control, incident response, periodic AI Act re-assessment.',
    outcome:
      'Ongoing reliability without hiring a full in-house AI ops function on day one.',
    caseStudyReady: false,
  },
];
