from django.urls import path
from .views import hello_api  # Import your view

urlpatterns = [
    path('hello/', hello_api),
]