from rest_framework import routers
from .apis import *

router = routers.DefaultRouter()

#router.register('api/user', UserViewSet, 'user')
router.register('api/favorites', FavoritesViewSet, 'favorites')
router.register('api/cart', CartViewSet, 'cart')
router.register('api/itemcart', ItemCartViewSet, 'itemcart')
router.register('api/bill', BillViewSet, 'bill')

urlpatterns = router.urls