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
    query = request.data['text1']
    # results = make_recommendations(query, 5)
    # descriptions = get_major_descriptions(results)
    # content = [{"major": results[i], "description": descriptions[i]} for i in range(len(results))]
    return Response({"odpowiedz": query})
