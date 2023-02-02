from user.serializers import *
from user.models import *
from user_account.serializer import *
from user_account.models import *

from django.shortcuts import render
from rest_framework.templatetags.rest_framework import data
from django.http import HttpResponse, JsonResponse, Http404
from rest_framework .parsers import JSONParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

class FavoritesView(APIView):
    
    def get_object(self, pk):
        try:
            return Favorites.objects.get(pk=pk)
        except Favorites.DoesNotExist:
            raise Http404
        
    def get_object_by(self, dato):
        try:
            return Favorites.objects.filter(identification=dato)
        except Favorites.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format=None):
        post = self.get_object_by(pk)
        serializer = FavoriteSerializer(post, many=True)  
        return Response(serializer.data)    
        
    def delete(self, request, pk, format=None):
        post = self.get_object(pk)
        post.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class CartView(APIView):
    
    def get_items(self, id_cart):
        try:
            return Item_cart.objects.filter(id_cart = id_cart)
        except Item_cart.DoesNotExist:
            raise Http404
    
    def get_cart(self, id):
        try:
            return Cart.objects.filter(pk = id)
        except Cart.DoesNotExist:
            raise Http404
    
    """
    def get():
    
    def put():
    """