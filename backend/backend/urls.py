from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static

API_URL = 'api/v1/'

urlpatterns = [
    path('admin/', admin.site.urls),
    path(API_URL, include('contacts.urls')),
    path(API_URL, include('company.urls')),
    path(API_URL, include('news.urls')),
    path(API_URL, include('clients.urls')),
    path(API_URL, include('bots.urls'))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
