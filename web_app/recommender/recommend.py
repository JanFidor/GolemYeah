import pandas as pd
from openai.embeddings_utils import (
    distances_from_embeddings,
    indices_of_nearest_neighbors_from_distances
)
from utils import create_single_embedding
import os
from sentence_transformers import SentenceTransformer


def make_recommendations(query: str, k_neighbors: int, model, embeddings_cache_path: str):
    embeddings_cache = pd.read_pickle(embeddings_cache_path)
    names = []
    embeddings = []
    for k, v in embeddings_cache.items():
        names.append(k)
        embeddings.append(v)
    query_embedding = create_single_embedding(query, model)
    distances = distances_from_embeddings(query_embedding, embeddings, distance_metric='cosine')
    neighbors_indices = indices_of_nearest_neighbors_from_distances(distances)[:k_neighbors]
    result = [names[i] for i in neighbors_indices]
    return result


embedding_cache_path = "embeddings_cache1.pkl"
embedding_cache = pd.read_pickle(embedding_cache_path)
path_to_model = os.path.join(os.path.curdir, "models/herbert")
model = SentenceTransformer(path_to_model)


query = "Jestem uczniem, który zawsze fascynował się matematyką. Od dziecka uwielbiałem rozwiązywać zagadki matematyczne i brać udział w konkursach matematycznych. Moje pasje w tym obszarze rozwinęły się jeszcze bardziej podczas nauki w szkole średniej, gdzie uczestniczyłem w dodatkowych kursach matematyki i brałem udział w olimpiadach matematycznych. Nie jestem pewien, jakie konkretne studia chciałbym podjąć, ale jestem głęboko przekonany, że matematyka jest moją prawdziwą pasją. Interesuje mnie zarówno teoria matematyczna, jak i jej praktyczne zastosowania. Fascynuje mnie abstrakcyjność matematyki oraz jej rola w rozwiązywaniu realnych problemów. Poza matematyką, interesuję się również fizyką, informatyką i naukami przyrodniczymi. Chciałbym, żeby moje studia były wyjątkowo intelektualnie rozwijające, a jednocześnie dawały mi możliwość praktycznego zastosowania mojej wiedzy."

# names = make_recommendations(query, 5, model, embedding_cache_path)
# df = pd.read_csv(os.path.join(os.path.curdir, "data", "kierunki_studiow.csv"))
embeddings_cache = pd.read_pickle(embedding_cache_path)
print(len(list(embeddings_cache.keys())))

print(embeddings_cache.keys())
