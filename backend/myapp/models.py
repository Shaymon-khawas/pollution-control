from django.db import models

class UserProfile(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_number = models.CharField(max_length=15)
    address = models.TextField()
    car_number = models.CharField(max_length=20, unique=True)
    mac_address = models.CharField(max_length=20, blank=True, null=True)  # Backend will update this

    def __str__(self):
        return self.name

