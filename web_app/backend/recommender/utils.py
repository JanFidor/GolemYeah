import torch
import pandas as pd
import os


def create_single_embedding(description: str, model):
    embedding = model.encode(description)
    return torch.tensor(embedding)


def get_major_descriptions(majors):
    df = pd.read_csv(os.path.join(os.path.curdir, 'recommender', "data", "kierunki_studiow.csv"))
    result = []
    for major in majors:
        desc_list = df[df["nazwa"] == major + " "]["opis"].iloc[0].split('.')
        if len(desc_list) > 5:
            desc = ".".join(desc_list[:5]) + '.'
        else:
            desc = ".".join(desc_list) + '.'
        result.append(desc)
    return result
