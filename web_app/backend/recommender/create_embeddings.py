import pandas as pd
import pickle
import os
import torch
from sentence_transformers import SentenceTransformer
from tqdm import tqdm


def embedding_from_strings(dataframe, model, embeddings_cache_path) -> list:
    embedding_cache = {}
    for i in tqdm(range(len(dataframe))):
        row = dataframe.iloc[i]
        name, desc = row["target"], row["description"]

        if name not in embedding_cache.keys():
            embedding = model.encode(desc)
            embedding_cache[name] = torch.tensor(embedding)
    with open(embeddings_cache_path, "wb") as embeddings_cache_file:
        pickle.dump(embedding_cache, embeddings_cache_file)


df = pd.read_csv(os.path.join(os.path.curdir, "data", "kierunki_studiow_short.csv"))

embeddings_cache_path = "embeddings_cache1.pkl"


path_to_model = os.path.join(os.path.curdir, "models/herbert")
model = SentenceTransformer(path_to_model)

embedding_from_strings(df, model, embeddings_cache_path)


# CHECK THE NUMBER OF ROWS
embedding_cache = pd.read_pickle(embeddings_cache_path)
print(len(list(embedding_cache.keys())))
