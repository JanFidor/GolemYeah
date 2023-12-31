import pandas as pd
from openai.embeddings_utils import (
    distances_from_embeddings,
    indices_of_nearest_neighbors_from_distances,
    tsne_components_from_embeddings
)
from .utils import create_single_embedding, get_major_categories, get_all_majors
import os
from sentence_transformers import SentenceTransformer
from .data_preprocessing_utils import clean_up_txt
import plotly.express as px


def make_recommendations(query: str, k_neighbors: int):
    embeddings_cache_path = os.path.join(os.path.curdir, 'recommender', "embeddings_cache1.pkl")
    embeddings_cache = pd.read_pickle(embeddings_cache_path)
    names = []
    embeddings = []
    for k, v in embeddings_cache.items():
        names.append(k)
        embeddings.append(v)

    path_to_model = os.path.join(os.path.curdir, 'recommender', "models/herbert")
    model = SentenceTransformer(path_to_model)
    tokenized_query = clean_up_txt(query)
    query_embedding = create_single_embedding(tokenized_query, model)

    distances = distances_from_embeddings(query_embedding, embeddings, distance_metric='cosine')
    neighbors_indices = indices_of_nearest_neighbors_from_distances(distances)[:k_neighbors]
    result = [names[i] for i in neighbors_indices]
    return result


def create_visualization(top_neighbors: list):
    embeddings_cache_path = os.path.join(os.path.curdir, 'recommender', "embeddings_cache1.pkl")
    embeddings_cache = pd.read_pickle(embeddings_cache_path)
    categories = get_major_categories(top_neighbors)
    neighbors = []
    final_categories = []
    for i, name in enumerate(top_neighbors):
        if name[:-1] in embeddings_cache.keys():
            neighbors.append(name[:-1])
            final_categories.append(categories[i])

    embeddings = [list(embeddings_cache[name]) for name in neighbors]

    tsne_components = tsne_components_from_embeddings(embeddings, n_components=2)
    colors = px.colors.qualitative.Set1[:len(final_categories)]

    fig = px.scatter(
        x=tsne_components[:, 0],
        y=tsne_components[:, 1],
        color=final_categories,
        color_discrete_sequence=colors,
        title="Przestrzeń embeddingów"
    )
    fig.show()


# embedding_cache_path = "embeddings_cache1.pkl"
# embedding_cache = pd.read_pickle(embedding_cache_path)
# path_to_model = os.path.join(os.path.curdir, "models/herbert")
# model = SentenceTransformer(path_to_model)


# matma = "Jestem uczniem, który zawsze fascynował się matematyką. Od dziecka uwielbiałem rozwiązywać zagadki matematyczne i brać udział w konkursach matematycznych. Moje pasje w tym obszarze rozwinęły się jeszcze bardziej podczas nauki w szkole średniej, gdzie uczestniczyłem w dodatkowych kursach matematyki i brałem udział w olimpiadach matematycznych. Nie jestem pewien, jakie konkretne studia chciałbym podjąć, ale jestem głęboko przekonany, że matematyka jest moją prawdziwą pasją. Interesuje mnie zarówno teoria matematyczna, jak i jej praktyczne zastosowania. Fascynuje mnie abstrakcyjność matematyki oraz jej rola w rozwiązywaniu realnych problemów. Poza matematyką, interesuję się również fizyką, informatyką i naukami przyrodniczymi. Chciałbym, żeby moje studia były wyjątkowo intelektualnie rozwijające, a jednocześnie dawały mi możliwość praktycznego zastosowania mojej wiedzy."
# jezyki = "Jednym z moich głównych zainteresowań są języki obce. Od zawsze fascynowała mnie możliwość komunikowania się z ludźmi z różnych kultur i miejsc na całym świecie. Dlatego też pochłaniam się nauką różnych języków. Aktualnie uczę się włoskiego, ale to tylko początek mojej przygody z językami. Uwielbiam odkrywać nowe słowa, gramatykę i subtelności kultury, która jest związana z każdym językiem. Moje cele to nie tylko opanowanie danego języka, ale także zgłębienie jego historii i tradycji. Poza językami obcymi, pasjonuję się także literaturą, zwłaszcza klasykami światowej literatury. Czytanie książek pozwala mi zanurzyć się w różnych epokach i światach, a jednocześnie doskonale ćwiczy umiejętność zrozumienia i interpretacji tekstu, co jest przydatne w nauce języków."
# lego = "Lubię zabawki lego i śpiewanie hip-hopu. W dzieciństwie chodziłem do grupy teatralnej."


# names = make_recommendations(clean_up_txt(matma), 5, model, embedding_cache_path)
# names = make_recommendations(clean_up_txt(jezyki), 10, model, embedding_cache_path)
# names = make_recommendations(clean_up_txt(lego), 5, model, embedding_cache_path)

# print(names)
