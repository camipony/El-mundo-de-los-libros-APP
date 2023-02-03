from django.urls import path
from .views import *

urlpatterns = [
    path('user/<int:pk>/', UserView.as_view()), 
    path('favorites/<int:pk>/', FavoritesView.as_view()),    
    path('cart/<int:pk>/', CartView.as_view()), 
    path('item/<int:pk>/', ItemCartView.as_view()),
    path('favoritesbook/<int:pk>/<str:codigo>/', FavoriteBookView.as_view()),
    path('purchased/<int:pk>/', PurchasedView.as_view()),
    path('purchasedbook/<int:pk>/<str:codigo>/', PurchasedBookView.as_view()),
    path('pay/<int:pk>/', ItemPay.as_view()),
]