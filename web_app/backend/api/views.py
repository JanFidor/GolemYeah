from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from recommender.recommend import make_recommendations
from recommender.utils import get_major_descriptions

# Create your views here.

API_DESCRIPTION = {
    'upload_form_data': 'feed the model whatever the user provides in the form',
    'result': 'return the response to the user'
}


@api_view(['GET'])
def index(request):
    return Response(API_DESCRIPTION)


@api_view(['GET'])
def result(request):
    return Response({"name": 'name'})


@api_view(['POST'])
def upload_form_data(request):
    openQ = ['text1', 'text2', 'text3', 'text4']
    query = " ".join(request.data[part] for part in openQ)
    query += f"Jestem {request.data['option1']}. "
    query += f"Interesuje mnie {request.data['option2']}. "
    query += "Dziedziny, które mnie interesują to " + " ".join(request.data['selectedOptions1']) + ". "
    query += "Osoba z którą najbardziej się identyfikuję to: " + " ".join(request.data['selectedOptions2']) + ". "

    print(query)

    results = make_recommendations(query, 5)
    descriptions = get_major_descriptions(results)
    content = [{"major": results[i], "description": descriptions[i]} for i in range(len(results))]
    return Response(content)
