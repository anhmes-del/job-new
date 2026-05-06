from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database import engine, Base
from app.api.v1 import auth, candidate, recruiter, admin, jobs, matching, analytics, payments, knowledge, communication
from app.config import settings

Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.APP_NAME)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1/auth", tags=["auth"])
app.include_router(candidate.cv_diagnostic.router, prefix="/api/v1/candidate", tags=["cv_diagnostic"])
app.include_router(candidate.ats_optimizer.router, prefix="/api/v1/candidate", tags=["ats_optimizer"])
app.include_router(candidate.achievement_rewriter.router, prefix="/api/v1/candidate", tags=["achievement_rewriter"])
app.include_router(candidate.linkedin_branding.router, prefix="/api/v1/candidate", tags=["linkedin_branding"])
app.include_router(candidate.cover_letter.router, prefix="/api/v1/candidate", tags=["cover_letter"])
app.include_router(candidate.interview_copilot.router, prefix="/api/v1/candidate", tags=["interview_copilot"])
app.include_router(candidate.job_tracker.router, prefix="/api/v1/candidate", tags=["job_tracker"])
app.include_router(recruiter.router, prefix="/api/v1/recruiter", tags=["recruiter"])
app.include_router(admin.router, prefix="/api/v1/admin", tags=["admin"])
app.include_router(jobs.router, prefix="/api/v1/jobs", tags=["jobs"])
app.include_router(matching.router, prefix="/api/v1/matching", tags=["matching"])
app.include_router(analytics.router, prefix="/api/v1/analytics", tags=["analytics"])
app.include_router(payments.router, prefix="/api/v1/payments", tags=["payments"])
app.include_router(knowledge.router, prefix="/api/v1/knowledge", tags=["knowledge"])
app.include_router(communication.router, prefix="/api/v1/communication", tags=["communication"])