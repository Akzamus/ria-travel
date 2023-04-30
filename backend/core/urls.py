from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

API_URL = 'api/v1/'

urlpatterns = [
    path('admin/', admin.site.urls),
    path(API_URL, include('apps.contacts.urls')),
    path(API_URL, include('apps.company.urls')),
    path(API_URL, include('apps.news.urls')),
    path(API_URL, include('apps.clients.urls')),
    path(API_URL, include('apps.bots.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
