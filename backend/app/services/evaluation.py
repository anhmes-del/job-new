from enum import Enum

class EvaluationBlock(Enum):
    A_ROLE_SUMMARY = "role_summary"
    B_CV_MATCH = "cv_match"
    C_LEVEL_STRATEGY = "level_strategy"
    D_COMP_RESEARCH = "comp_research"
    E_PERSONALIZATION = "personalization"
    F_INTERVIEW_PREP = "interview_prep"
    G_POSTING_LEGITIMACY = "posting_legitimacy"

class Archetype(Enum):
    AI_PLATFORM_LLMOPS = "AI Platform / LLMOPS"
    AGENTIC_AUTOMATION = "Agentic / Automation"
    TECHNICAL_AI_PM = "Technical AI PM"
    AI_SOLUTIONS_ARCHITECT = "AI Solutions Architect"
    AI_FORWARD_DEPLOYED = "AI Forward Deployed"
    AI_TRANSFORMATION = "AI Transformation"

SCORE_DESCRIPTIONS = {
    5: "Exceptional match - apply immediately",
    4: "Strong match - worth applying",
    3: "Decent match - apply only with specific reason",
    2: "Weak match - not recommended",
    1: "Poor match - do not apply"
}

LEGITIMACY_TIERS = {
    "high_confidence": "High Confidence - Real, active opening",
    "proceed_caution": "Proceed with Caution - Mixed signals",
    "suspicious": "Suspicious - Multiple ghost indicators"
}