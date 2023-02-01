from django.urls import path
from .views import *

urlpatterns = [
    path('user/', create_user),
    #path('user/<int:id>/', get_user),
    #path('user/<int:id>/', delete_user),
    #path('user/<int:id>/', update_user),
    path('user/id/<int:pk>/', user_by_id),
    path('login/<str:email>/', check_login)
]