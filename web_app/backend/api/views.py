from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

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
    return Response('RESULT TEST')

@api_view(['POST'])
def upload_form_data(request):
    data = request.data
    print(data)
    return Response('Data posted')