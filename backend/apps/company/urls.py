from django.urls import path, include
from rest_framework import routers

from .views import EmployeeViewSet

router = routers.SimpleRouter()
router.register(r'employees', EmployeeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
