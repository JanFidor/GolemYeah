import pandas as pd
import pickle
import os
import torch
from sentence_transformers import SentenceTransformer


def embedding_from_strings(dataframe, model, embedding_cache, embeddings_cache_path) -> list:
    for i in range(len(dataframe)):
        row = dataframe.iloc[i]
        name, desc = row[0], row[1]
        if name not in embedding_cache.keys():
            embedding = model.encode(desc)
            embedding_cache[name] = torch.tensor(embedding)
    with open(embeddings_cache_path, "wb") as embeddings_cache_file:
        pickle.dump(embedding_cache, embeddings_cache_file)


df = pd.read_csv(os.path.join(os.path.curdir, "data", "kierunki_studiow.csv"))

embeddings_cache_path = "embeddings_cache1.pkl"

try:
    embedding_cache = pd.read_pickle(embeddings_cache_path)
except FileNotFoundError:
    embedding_cache = {}
with open(embeddings_cache_path, "wb") as embeddings_cache_file:
    pickle.dump(embedding_cache, embeddings_cache_file)


path_to_model = os.path.join(os.path.curdir, "models/herbert")
model = SentenceTransformer(path_to_model)

embedding_from_strings(df, model, embedding_cache, embeddings_cache_path)