from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.orm import Session
from app.database import SessionLocal
from app.services.job_evaluator import evaluate_job, detect_archetype
from app.services.resume_parser import parse_resume
from app.auth.jwt import get_current_user
from pydantic import BaseModel

router = APIRouter()

class JDEvaluationRequest(BaseModel):
    jd_text: str
    cv_text: str = ""

class JDEvaluationResponse(BaseModel):
    archetype: str
    global_score: float
    recommendation: str
    block_a: dict
    block_b: dict
    block_c: dict
    block_d: dict
    block_e: dict
    block_f: dict

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/evaluate", response_model=JDEvaluationResponse)
async def evaluate_job_posting(
    request: JDEvaluationRequest,
    current_user = Depends(get_current_user)
):
    result = await evaluate_job(request.jd_text, request.cv_text)
    return result

@router.post("/evaluate-url")
async def evaluate_job_url(
    url: str,
    current_user = Depends(get_current_user)
):
    import httpx
    async with httpx.AsyncClient() as client:
        resp = await client.get(url)
        jd_text = resp.text
    
    archetype = detect_archetype(jd_text)
    return {"url": url, "archetype": archetype.value}

@router.post("/quick-evaluate")
async def quick_evaluate(
    file: UploadFile = File(...),
    jd_text: str = "",
    current_user = Depends(get_current_user)
):
    cv_text = await parse_resume(file)
    result = await evaluate_job(jd_text, cv_text)
    return result