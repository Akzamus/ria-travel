from rest_framework import viewsets

from .models import PhoneNumber, Link
from .serializers import PhoneNumberSerializer, LinkSerializer


class PhoneNumberViewSet(viewsets.ModelViewSet):
    queryset = PhoneNumber.objects.all()
    serializer_class = PhoneNumberSerializer
    http_method_names = ['get']


class LinkViewSet(viewsets.ModelViewSet):
    queryset = Link.objects.all()
    serializer_class = LinkSerializer
    http_method_names = ['get']
