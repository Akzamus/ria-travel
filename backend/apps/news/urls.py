from django.urls import path, include
from rest_framework import routers

from .views import PostViewSet, PopularPlaceViewSet

router = routers.SimpleRouter()
router.register(r'posts', PostViewSet)
router.register(r'popular-places', PopularPlaceViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
