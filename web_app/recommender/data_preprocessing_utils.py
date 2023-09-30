import pandas as pd
import nltk
import os
nltk.download('punkt')


def get_stopwords():
    stopwords = []
    with open('data/polish_stop_words', 'r', encoding='utf8') as file:
        for line in file:
            for word in line.split():
                stopwords.append(word)
    return set(stopwords)


def combine_columns(row):
    description = row["opis"]
    targeted_students = row["dla_kogo"]
    syllabus = row["program_ksztalcenia"]
    exam_subjects = row["przedmioty_maturalne"]

    txt = f"{description} {syllabus} {targeted_students} {exam_subjects}."

    words = nltk.word_tokenize(txt)
    words = [word.lower() for word in words if word.isalpha()]
    stopwords = get_stopwords()
    words = [word for word in words if not word in stopwords]
    return ' '.join(words)


def description_target_df(df):
    new_df = pd.DataFrame()
    new_df['description'] = df.apply(combine_columns, axis=1)

    new_df['target'] = df['nazwa']
    return new_df


def save_preprocessed_data():
    df = pd.read_csv(data_path("kierunki_studiow.csv"))
    preprocessed_df = description_target_df(df)
    preprocessed_df.to_csv(data_path("kierunki_studiow_czyste.csv"))


def data_path(filename):
    return os.path.join(os.path.curdir, "data", filename)

save_preprocessed_data()