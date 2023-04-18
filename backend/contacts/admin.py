from django.contrib import admin
from django.utils.html import format_html

from .models import Link, PhoneNumber


@admin.register(Link)
class SocialLinkAdmin(admin.ModelAdmin):
    list_display = ('name', 'icon_preview', 'shortened_url')

    def icon_preview(self, obj):
        return format_html(f'<i class="{obj.icon}"></i>')

    def name(self, obj):
        return dict(obj.ICON_CHOICES)[obj.icon]

    def shortened_url(self, obj):
        return format_html('<a href="{0}" target="_blank">{1}</a>'.format(obj.url, obj.url[:50]))

    icon_preview.short_description = 'Иконка'
    name.short_description = 'Название'
    shortened_url.short_description = 'URL'


@admin.register(PhoneNumber)
class PhoneNumberAdmin(admin.ModelAdmin):
    list_display = ('number_display',)

    def number_display(self, obj):
        return obj.number

    number_display.short_description = 'Телефон'


admin.site.site_title = 'RIA TRAVEL'
admin.site.site_header = 'Ria Travel админ панель'
