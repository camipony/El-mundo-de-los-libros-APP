from rest_framework import serializers
from .models import *

#class UserSerializer(serializers.ModelSerializer):
#    class Meta:
#        model = User
#        fields = ('identification','name','email','date','password')

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorites
        fields = ('id_favorites','identification','id_book')

class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = ('id_cart', 'identification','status', 'update_date', 'creation_date')
        read_only_fields = ('creation_date', )

class ItemCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item_cart
        fields = ('id_item', 'id_cart', 'id_book', 'count', 'creation_date')
        read_only_fields = ('creation_date', )

class BillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bill
        fields = ('id_bill','identification','id_cart')