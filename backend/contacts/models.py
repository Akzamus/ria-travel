from django.db import models


class PhoneNumber(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    number = models.CharField(
        max_length=18,
        null=False,
        blank=False,
        unique=True,
        help_text='Формат ввода: +7 (999) 999-99-99',
        verbose_name='Номер'
    )

    def __str__(self):
        return self.number

    class Meta:
        verbose_name_plural = 'Номера телефонов'
        verbose_name = 'Номер телефона'


class Link(models.Model):
    ICON_CHOICES = [
        ('bi bi-facebook', 'Facebook'),
        ('bi bi-instagram', 'Instagram'),
        ('bi bi-twitter', 'Twitter'),
        ('bi bi-whatsapp', 'WhatsApp'),
        ('bi bi-telegram', 'Telegram'),
        ('bi bi-youtube', 'YouTube'),
        ('bi bi-geo-alt-fill', 'Map')
    ]

    id = models.AutoField(
        primary_key=True
    )
    url = models.URLField(
        null=False,
        blank=False,
        verbose_name='URL'
    )
    icon = models.CharField(
        max_length=50,
        choices=ICON_CHOICES,
        null=False,
        blank=False,
        verbose_name='Иконка'
    )

    def __str__(self):
        return dict(self.ICON_CHOICES)[self.icon]

    class Meta:
        verbose_name_plural = 'Ссылки'
        verbose_name = 'Ссылка'
