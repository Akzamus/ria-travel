from rest_framework import generics

from .models import PhoneNumber, Link
from .serializers import PhoneNumberSerializer, LinkSerializer


class PhoneNumberList(generics.ListAPIView):
    queryset = PhoneNumber.objects.all()
    serializer_class = PhoneNumberSerializer


class LinkList(generics.ListAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
