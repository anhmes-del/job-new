from pydantic import BaseModel

class CVDiagnosticResponse(BaseModel):
    ats_score: float
    issues: list
    keyword_gaps: list