import torch


def create_single_embedding(description: str, model):
    embedding = model.encode(description)
    return torch.tensor(embedding)
