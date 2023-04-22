from django.contrib import admin
from .models import TelegramChat


@admin.register(TelegramChat)
class TelegramChatAdmin(admin.ModelAdmin):
    list_display = ('name', 'chat_id')
    search_fields = ('name',)
