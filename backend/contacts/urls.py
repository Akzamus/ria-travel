from django.urls import path
from .views import PhoneNumberList, LinkList

urlpatterns = [
    path('phones/', PhoneNumberList.as_view(), name='phone_numbers_list'),
    path('links/', LinkList.as_view(), name='link_list')
]
