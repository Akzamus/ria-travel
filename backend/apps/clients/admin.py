from django.contrib import admin
from django.utils.html import format_html

from .models import Review


@admin.register(Review)
class ReviewAdmin(admin.ModelAdmin):
    list_display = ('name', 'text', 'photo_tag')
    list_display_links = ('name',)
    search_fields = ('name', 'text')

    def photo_tag(self, obj):
        if obj.photo:
            return format_html('<img class="avatar" src="{}" />'.format(obj.photo.url))

    photo_tag.short_description = 'Фото'
