from sqlalchemy import Column, Integer, String, Text, DateTime, Float, Boolean, ForeignKey, JSON, Enum
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from app.database import Base
import enum

class UserRole(str, enum.Enum):
    CANDIDATE = "candidate"
    RECRUITER = "recruiter"
    ADMIN = "admin"
    ENTERPRISE = "enterprise"

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True)
    email = Column(String, unique=True, index=True)
    full_name = Column(String)
    hashed_password = Column(String)
    role = Column(Enum(UserRole), default=UserRole.CANDIDATE)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    subscriptions = relationship("Subscription", back_populates="user")
    resumes = relationship("Resume", back_populates="user")
    job_applications = relationship("JobApplication", back_populates="user")
    knowledge_docs = relationship("KnowledgeDocument", back_populates="user")

class Resume(Base):
    __tablename__ = "resumes"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    original_filename = Column(String)
    parsed_text = Column(Text)
    ats_score = Column(Float)
    keywords = Column(JSON)
    upload_date = Column(DateTime(timezone=True), server_default=func.now())
    user = relationship("User", back_populates="resumes")

class JobPost(Base):
    __tablename__ = "job_posts"
    id = Column(Integer, primary_key=True)
    title = Column(String)
    company = Column(String)
    description = Column(Text)
    location = Column(String)
    salary_min = Column(Float, nullable=True)
    salary_max = Column(Float, nullable=True)
    recruiter_id = Column(Integer, ForeignKey("users.id"))
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    recruiter = relationship("User")
    applications = relationship("JobApplication", back_populates="job")

class JobApplication(Base):
    __tablename__ = "job_applications"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    job_id = Column(Integer, ForeignKey("job_posts.id"))
    status = Column(String)
    match_score = Column(Float)
    applied_date = Column(DateTime(timezone=True), server_default=func.now())
    user = relationship("User", back_populates="job_applications")
    job = relationship("JobPost", back_populates="applications")

class Subscription(Base):
    __tablename__ = "subscriptions"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    plan = Column(String)
    stripe_customer_id = Column(String)
    stripe_subscription_id = Column(String)
    valid_until = Column(DateTime(timezone=True))
    user = relationship("User", back_populates="subscriptions")

class KnowledgeDocument(Base):
    __tablename__ = "knowledge_documents"
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    title = Column(String)
    content = Column(Text)
    file_type = Column(String)
    embedding_id = Column(String)
    uploaded_at = Column(DateTime(timezone=True), server_default=func.now())
    user = relationship("User", back_populates="knowledge_docs")