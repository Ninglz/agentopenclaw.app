---
name: agency-product-discovery
description: Performs a Full Agency Product Discovery by orchestrating 8 specialized agents to evaluate an opportunity from market, technical, brand, and growth perspectives.
risk: medium
source: community
date_added: '2026-03-15'
---

# Full Agency Product Discovery Orchestrator

This skill orchestrates a comprehensive 8-stage discovery process. Use this when the user presents a product idea or opportunity that requires a deep-dive analysis.

## The Discovery Squad

When activated, you must coordinate the following specialists in order:

1. **Market Validation** (`@agency-product-trend-researcher`): Identifies trends, market size, and validates the conditional "GO" status.
2. **Technical Architecture** (`@agency-backend-architect`): Defines the system overview, tech stack, and core data models.
3. **Brand Strategy** (`@agency-brand-guardian`): Establishes positioning, naming validation, and brand personality.
4. **Go-to-Market & Growth** (`@agency-growth-hacker`): Defines the North Star metric, pricing tiers, and GTM phases.
5. **Customer Support Blueprint** (`@agency-support-responder`): Structures support tiers and onboarding flows.
6. **UX Research & Design** (`@agency-ux-researcher`): Defines user personas and critical design insights.
7. **Spatial Interface (If Applicable)** (`@agency-xr-interface-architect`): Architects the immersive interaction model.
8. **Project Execution Plan** (`@agency-project-shepherd`): Synthesizes everything into a 35-week timeline and budget.

## Workflow

1.  **Ingestion**: Capture the core product concept, target audience, and primary USP from the user.
2.  **Sequential Analysis**: Run the concept through each of the 8 specialists. For each stage, produce a structured markdown section similar to the "Nexus Spatial" example.
3.  **Cross-Agent Synthesis**: After all specialists have reported, provide a final "Agency Verdict" summarizing the overall risk/reward profile.

## Reference
See the `nexus-spatial-discovery.md` example for the expected depth and formatting of each section.
