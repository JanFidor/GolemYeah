from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('result/', views.result),
    path('upload_form_data/', views.upload_form_data),
]