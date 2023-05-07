from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings
from .settings import DEBUG, API_URL

urlpatterns = [
    path('admin/', admin.site.urls),
    path(API_URL, include('apps.contacts.urls')),
    path(API_URL, include('apps.company.urls')),
    path(API_URL, include('apps.news.urls')),
    path(API_URL, include('apps.clients.urls')),
    path(API_URL, include('apps.bots.urls'))
]

if DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
