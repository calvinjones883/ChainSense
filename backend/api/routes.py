from fastapi import APIRouter
from backend.services.graph_builder import build_mock_graph

router = APIRouter()

@router.get("/graph")
async def get_graph():
    """
    Returns mock blockchain graph data (nodes + links).
    Later can be replaced with real RPC-based data.
    """
    graph = build_mock_graph()
    return graph
