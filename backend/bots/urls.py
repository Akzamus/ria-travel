from django.urls import path
from .views import ContactFormView, tg_webhook

urlpatterns = [
    path('contact-form/', ContactFormView.as_view(), name='contact-form'),
    path('tg-webhook/', tg_webhook, name='tg-webhook'),
]
