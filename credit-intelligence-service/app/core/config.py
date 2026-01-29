"""
Configuration Settings
Uses Pydantic Settings for environment variable management
"""

from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    """Application settings loaded from environment variables"""
    
    # API Configuration
    API_KEY: str = "development-key-change-in-production"
    WEBHOOK_SECRET: str = "webhook-secret-change-in-production"
    ALLOWED_ORIGINS: List[str] = ["http://localhost:3000"]
    
    # Service Configuration
    SERVICE_NAME: str = "credit-intelligence-service"
    DEBUG: bool = True
    
    # Next.js Backend URL (for callbacks)
    NEXTJS_API_URL: str = "http://localhost:3000/api"
    
    # Database (if needed for caching)
    # DATABASE_URL: str = ""
    
    # ML Model Configuration
    MODEL_PATH: str = "./models"
    USE_ML_MODEL: bool = False  # Set to True when ML model is ready
    
    class Config:
        env_file = ".env"
        case_sensitive = True


settings = Settings()
