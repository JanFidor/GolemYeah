import pandas as pd


embedding_cache_path = "embeddings_cache1.pkl"
embedding_cache = pd.read_pickle(embedding_cache_path)

print(embedding_cache["matematyka"])
