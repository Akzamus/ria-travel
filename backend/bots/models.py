from django.db import models


class TelegramChat(models.Model):
    name = models.CharField(
        null=True,
        blank=True,
        max_length=255,
        unique=True,
        verbose_name='Название'
    )
    chat_id = models.CharField(
        null=False,
        blank=False,
        unique=True,
        max_length=255,
        verbose_name='ID'
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Телеграм чат'
        verbose_name_plural = 'Телеграм чаты'

