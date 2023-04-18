from django.contrib import admin
from django.utils.html import format_html

from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ('title', 'preview_text', 'created_at', 'photo_tag')
    sortable_by = ('created_at',)
    search_fields = ('title',)

    def photo_tag(self, obj):
        return format_html('<img class="post-image" src="{}" />'.format(obj.photo.url))

    photo_tag.short_description = 'Изображение'
