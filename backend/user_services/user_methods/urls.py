from django.urls import path
from .views import *

urlpatterns = [
    path('favorites/<int:pk>/', FavoritesView.as_view()),    
]