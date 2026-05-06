from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.services.resume_parser import parse_resume
from app.services.ats_scorer import compute_ats_score
from app.auth.jwt import get_current_user
from app.schemas import CVDiagnosticResponse

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/cv-diagnostic", response_model=CVDiagnosticResponse)
async def analyze_cv(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user),
):
    text = await parse_resume(file)
    score, details = compute_ats_score(text)
    return CVDiagnosticResponse(ats_score=score, issues=details["issues"], keyword_gaps=details["gaps"])