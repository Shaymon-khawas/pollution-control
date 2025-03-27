from rest_framework.decorators import api_view
from rest_framework.response import Response
from myapp.models import UserProfile  # ✅ Fixed import (from 'myapp' instead of 'api')
from .serializers import UserProfileSerializer

@api_view(['GET', 'POST'])  # Allow both GET and POST
def register_user(request):
    if request.method == 'GET':
        return Response({"message": "Send a POST request to register a user."}, status=200)
    
    serializer = UserProfileSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "User registered successfully!"}, status=201)
    return Response(serializer.errors, status=400)



