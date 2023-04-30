from django.urls import path, include
from rest_framework import routers
from .views import PhoneNumberViewSet, LinkViewSet

router = routers.SimpleRouter()
router.register(r'phones', PhoneNumberViewSet)
router.register(r'links', LinkViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
