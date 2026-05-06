import openai
from app.config import settings
from app.services.evaluation import EvaluationBlock, Archetype, SCORE_DESCRIPTIONS
import re

openai.api_key = settings.OPENAI_API_KEY

def detect_archetype(jd_text: str) -> Archetype:
    """Detect job archetype from job description"""
    jd_lower = jd_text.lower()
    
    if any(k in jd_lower for k in ["observability", "evals", "pipelines", "monitoring"]):
        return Archetype.AI_PLATFORM_LLMOPS
    elif any(k in jd_lower for k in ["agent", "orchestration", "workflow", "multi-agent"]):
        return Archetype.AGENTIC_AUTOMATION
    elif any(k in jd_lower for k in ["prd", "roadmap", "stakeholder", "product manager"]):
        return Archetype.TECHNICAL_AI_PM
    elif any(k in jd_lower for k in ["architecture", "enterprise", "integration"]):
        return Archetype.AI_SOLUTIONS_ARCHITECT
    elif any(k in jd_lower for k in ["client-facing", "deploy", "prototype"]):
        return Archetype.AI_FORWARD_DEPLOYED
    elif any(k in jd_lower for k in ["change management", "adoption", "transformation"]):
        return Archetype.AI_TRANSFORMATION
    return Archetype.AGENTIC_AUTOMATION

async def evaluate_job(jd_text: str, cv_text: str) -> dict:
    """Full A-F evaluation with Block G legitimacy"""
    
    archetype = detect_archetype(jd_text)
    
    prompt = f"""
    Evaluate this job description against the candidate's CV using the A-F scoring system.
    
    Job Description:
    {jd_text}
    
    Candidate CV:
    {cv_text}
    
    Archetype Detected: {archetype.value}
    
    Provide evaluation in JSON format:
    {{
        "archetype": "{archetype.value}",
        "block_a": {{
            "role_summary": "...",
            "domain": "...",
            "function": "...",
            "seniority": "...",
            "remote": "...",
            "tldr": "..."
        }},
        "block_b": {{
            "cv_match_score": 4.2,
            "matching_skills": [...],
            "gaps": [...],
            "mitigation_strategies": [...]
        }},
        "block_c": {{
            "detected_level": "...",
            "candidate_level": "...",
            "sell_strategy": "...",
            "downlevel_plan": "..."
        }},
        "block_d": {{
            "salary_estimate": "...",
            "market_position": "...",
            "trends": "..."
        }},
        "block_e": {{
            "cv_changes": [...],
            "linkedin_changes": [...]
        }},
        "block_f": {{
            "star_stories": [...],
            "case_study": "...",
            "red_flag_qs": [...]
        }},
        "global_score": 4.2,
        "recommendation": "..."
    }}
    """
    
    response = await openai.ChatCompletion.acreate(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
        response_format={"type": "json_object"}
    )
    
    return response.choices[0].message.content