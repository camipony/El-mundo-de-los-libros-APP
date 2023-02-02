from django.db import models
from datetime import datetime

# Create your models here.
#class User(models.Model):
#    identification = models.IntegerField(primary_key=True, default=00000000)
#    name = models.CharField(max_length=100)
#    email = models.EmailField(max_length=100,unique=True)
#    date = models.DateTimeField(auto_now_add=True)
#    password = models.CharField(max_length=100)

class Favorites(models.Model):
    id_favorites = models.IntegerField(primary_key=True, default=0)
    identification = models.IntegerField()
    id_book = models.IntegerField()

class Cart(models.Model):
    id_cart = models.IntegerField(primary_key=True, default=0000)
    identification = models.IntegerField()
    status = models.CharField(max_length=100, default="activo")
    update_date = models.DateTimeField(auto_now_add=True)
    creation_date = models.DateTimeField(auto_now_add=True)

class Item_cart(models.Model):
    id_item = models.IntegerField(primary_key=True, default=0)
    id_cart = models.IntegerField()
    id_book = models.IntegerField()
    count = models.IntegerField()
    creation_date = models.DateTimeField(auto_now_add=True)

class Bill(models.Model):
    id_bill = models.IntegerField(primary_key=True, default=0000)
    identification = models.IntegerField()
    id_cart = models.IntegerField()