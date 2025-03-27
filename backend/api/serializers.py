from rest_framework import serializers
from myapp.models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ['name', 'email', 'phone_number', 'address', 'car_number']
