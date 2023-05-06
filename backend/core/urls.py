from django.contrib import admin
from django.urls import path, include

API_URL = 'api/v1/'

urlpatterns = [
    path('admin/', admin.site.urls),
    path(API_URL, include('apps.contacts.urls')),
    path(API_URL, include('apps.company.urls')),
    path(API_URL, include('apps.news.urls')),
    path(API_URL, include('apps.clients.urls')),
    path(API_URL, include('apps.bots.urls'))
]
