from django.contrib import admin
from django.utils.html import format_html

from .models import Employee


@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name', 'experience', 'photo_tag')
    list_filter = ('experience',)
    search_fields = ('name',)

    def photo_tag(self, obj):
        return format_html('<img class="avatar" src="{}" />'.format(obj.photo.url))

    photo_tag.short_description = 'Фото'
