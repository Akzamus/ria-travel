from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver
import os


class Review(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    name = models.CharField(
        max_length=255,
        null=False,
        blank=False,
        verbose_name='Имя'
    )
    photo = models.ImageField(
        upload_to='reviews/',
        null=True,
        blank=True,
        verbose_name='Фото'
    )
    text = models.TextField(
        null=False,
        blank=False,
        verbose_name='Текст'
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Отзывы'
        verbose_name = 'Отзыв'


@receiver(post_delete, sender=Review)
def delete_post_photo(sender, instance, **kwargs):
    if instance.photo:
        if os.path.isfile(instance.photo.path):
            os.remove(instance.photo.path)
