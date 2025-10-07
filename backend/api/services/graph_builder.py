def build_mock_graph():
    """
    Mock blockchain transaction graph.
    Each node = wallet or contract.
    Each link = transaction.
    """
    nodes = [
        {"id": "wallet_A", "type": "wallet"},
        {"id": "wallet_B", "type": "wallet"},
        {"id": "contract_X", "type": "contract"},
    ]
    links = [
        {"source": "wallet_A", "target": "contract_X", "value": 5},
        {"source": "contract_X", "target": "wallet_B", "value": 2},
        {"source": "wallet_B", "target": "wallet_A", "value": 3},
    ]
    return {"nodes": nodes, "links": links}
