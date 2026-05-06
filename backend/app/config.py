from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    APP_NAME: str = "CAREEROS PRO"
    DEBUG: bool = False
    DATABASE_URL: str = "postgresql://user:pass@db:5432/careeros"
    REDIS_URL: str = "redis://redis:6379/0"
    SECRET_KEY: str = "change_this_in_production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24

    # OAuth
    GOOGLE_CLIENT_ID: str = ""
    GOOGLE_CLIENT_SECRET: str = ""
    LINKEDIN_CLIENT_ID: str = ""
    LINKEDIN_CLIENT_SECRET: str = ""
    GITHUB_CLIENT_ID: str = ""
    GITHUB_CLIENT_SECRET: str = ""

    # AI
    OPENAI_API_KEY: str = ""
    LOCAL_LLM_ENDPOINT: str = "http://localhost:11434"

    # Storage
    S3_BUCKET: str = ""
    AWS_ACCESS_KEY: str = ""
    AWS_SECRET_KEY: str = ""

    # Email
    SENDGRID_API_KEY: str = ""

    # Stripe
    STRIPE_SECRET_KEY: str = ""

    class Config:
        env_file = ".env"

settings = Settings()