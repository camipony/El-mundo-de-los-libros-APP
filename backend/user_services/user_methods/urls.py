from django.urls import path
from .views import *

urlpatterns = [
    path('user/<int:pk>/', UserView.as_view()), 
    path('favorites/<int:pk>/', FavoritesView.as_view()),    
    path('cart/<int:pk>/', CartView.as_view()), 
    path('item/<int:pk>/', ItemCartView.as_view()),
]