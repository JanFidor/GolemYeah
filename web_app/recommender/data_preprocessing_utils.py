import pandas as pd
import nltk
nltk.download('punkt')


def get_stopwords():
    stopwords = []
    with open('data/polish_stop_words', 'r', encoding='utf8') as file:
        for line in file:
            for word in line.split():
                stopwords.append(word)
    return set(stopwords)


def combine_columns(row):
    name = row["nazwa"]
    description = row["opis"]
    targeted_students = row["dla_kogo"]
    syllabus = row["program_ksztalcenia"]
    exam_subjects = row["przedmioty_maturalne"]

    txt = f"Nazwa kierunku: {name}. " \
           f"Opis kierunku: {description}." \
           f"Program kierunku obejmuje {syllabus}." \
           f" Kierunek jest przeznaczony dla: {targeted_students}. " \
           f"Przedmioty maturalne, których wymaga kierunek: {exam_subjects}."

    words = nltk.word_tokenize(txt)
    words = [word.lower() for word in words if word.isalpha()]
    stopwords = get_stopwords()
    words = [word for word in words if not word in stopwords]
    return words


def description_target_df(df):
    new_df = pd.DataFrame()
    new_df['description'] = df.apply(combine_columns, axis=1)

    new_df['target'] = df['nazwa']
    return new_df
