"""
API Route: POST /simulate-payoff
Simulate loan payoff scenarios
"""

from fastapi import APIRouter, Depends, HTTPException
from app.models.schemas import (
    PayoffSimulationRequest,
    PayoffSimulationResponse
)
from app.core.security import verify_api_key
from app.services.simulator import PayoffSimulator

router = APIRouter()
simulator = PayoffSimulator()


@router.post("/simulate-payoff", response_model=PayoffSimulationResponse)
async def simulate_payoff(
    request: PayoffSimulationRequest,
    api_key: str = Depends(verify_api_key)
):
    """
    Simulate loan payoff scenarios with different payment amounts
    
    TODO: Implement payoff simulation logic
    - Call PayoffSimulator service
    - Calculate multiple payment scenarios
    - Show time to payoff and total interest
    - Return comparison data
    """
    try:
        # TODO: Call simulator.simulate(request)
        # TODO: Return scenarios
        
        raise HTTPException(status_code=501, detail="Not implemented")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
