from fastapi import Depends, HTTPException
from app.auth.jwt import get_current_user

def require_role(required_role: str):
    async def role_checker(user = Depends(get_current_user)):
        if user.get("role") != required_role:
            raise HTTPException(status_code=403, detail="Insufficient permissions")
        return user
    return role_checker