from django.db import models

# Create your models here.
class User(models.Model):
    correo = models.EmailField()
    password = models.CharField(max_length=30)
    nombre = models.CharField(max_length=30)