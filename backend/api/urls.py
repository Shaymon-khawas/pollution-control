from django.urls import path
from django.http import JsonResponse
from .views import register_user

def api_home(request):
    return JsonResponse({"message": "API is working! Use /api/register/ to register."})

urlpatterns = [
    path('', api_home, name='api-home'),  # Add this line for `/api/`
    path('register/', register_user, name='register-user'),
]
