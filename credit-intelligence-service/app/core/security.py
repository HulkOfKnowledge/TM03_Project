"""
Security Utilities
API key verification and webhook signature validation
"""

from fastapi import HTTPException, Security, status
from fastapi.security import APIKeyHeader
import hmac
import hashlib
from app.core.config import settings

api_key_header = APIKeyHeader(name="X-API-Key", auto_error=False)


def verify_api_key(api_key: str = Security(api_key_header)) -> str:
    """
    Verify API key from request header
    TODO: Implement proper API key management (database, rotation, etc.)
    """
    if api_key != settings.API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid API key"
        )
    return api_key


def verify_webhook_signature(payload: str, signature: str, timestamp: str) -> bool:
    """
    Verify webhook signature from Next.js backend
    TODO: Implement HMAC verification
    - Use webhook secret from settings
    - Verify timestamp to prevent replay attacks
    - Return True if signature is valid
    """
    # TODO: Implementation needed
    # Example:
    # expected_signature = hmac.new(
    #     settings.WEBHOOK_SECRET.encode(),
    #     f"{timestamp}.{payload}".encode(),
    #     hashlib.sha256
    # ).hexdigest()
    # return hmac.compare_digest(signature, expected_signature)
    return True  # Placeholder
