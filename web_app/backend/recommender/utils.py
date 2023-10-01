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

def get_majors_universities(majors):
    return {
        major: get_major_universities(major) for major in majors
    }

def get_major_universities(major):
    df = pd.read_csv(os.path.join(os.path.curdir, "data", "kierunki_studiow.csv"))
    uni_big_string = df[df["nazwa"] == major + " "]["uczelnie"].to_list()[0]
    uni_list = [uni.strip() for uni in uni_big_string.split(",")]
    return ', '.join([uni for uni in uni_list if uni != "Prezentacja"])


def get_major_categories(majors: list):
    df = pd.read_csv(os.path.join(os.path.curdir, 'recommender', "data", "kierunki_studiow.csv"))
    categories = []
    for major in majors:
        categories.append(df[df["nazwa"] == major]["kategoria"].iloc[0])
    return categories


def get_all_majors():
    df = pd.read_csv(os.path.join(os.path.curdir, 'recommender', "data", "kierunki_studiow.csv"))
    results = df["nazwa"].to_list()
    return results
