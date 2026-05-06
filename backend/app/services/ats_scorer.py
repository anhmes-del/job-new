from collections import Counter
import re

def extract_keywords(text: str) -> list:
    words = re.findall(r'\b[a-zA-Z]{3,}\b', text.lower())
    common = {'and', 'for', 'the', 'with', 'experience', 'skills'}
    return [w for w in words if w not in common]

def compute_ats_score(resume_text: str, jd_text: str = None) -> tuple:
    resume_kws = set(extract_keywords(resume_text))
    if jd_text:
        jd_kws = set(extract_keywords(jd_text))
        missing = jd_kws - resume_kws
        score = len(resume_kws & jd_kws) / len(jd_kws) * 100
        return round(score, 2), {"gaps": list(missing)[:10]}
    else:
        issues = []
        if "photo" in resume_text.lower(): issues.append("Photo included – avoid")
        if len(resume_text.split()) < 300: issues.append("Too short")
        score = 70 if not issues else 50
        return score, {"issues": issues, "gaps": []}