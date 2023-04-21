from django.db import models
import os

from django.db.models.signals import post_delete
from django.dispatch import receiver


class Post(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    title = models.CharField(
        max_length=255,
        null=False,
        blank=False,
        verbose_name='Заголовок'
    )
    photo = models.ImageField(
        upload_to='news/',
        null=False,
        blank=False,
        verbose_name='Фото'
    )
    preview_text = models.TextField(
        null=True,
        blank=True,
        verbose_name='Текст для предпросмотра'
    )
    main_text = models.TextField(
        null=False,
        blank=False,
        verbose_name='Основой текст'
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        editable=True,
        verbose_name='Cоздано'
    )

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.preview_text:
            self.preview_text = self.main_text[:150] + '...'
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = 'Посты'
        verbose_name = 'Пост'


class PopularPlace(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    photo = models.ImageField(
        null=False,
        blank=False,
        upload_to='places/',
        verbose_name='Фото'
    )
    title = models.CharField(
        max_length=255,
        null=False,
        blank=False,
        verbose_name='Название'
    )
    is_displayed = models.BooleanField(
        default=True,
        verbose_name='Отображать'
    )

    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = 'Популярные места'
        verbose_name = 'Популярное место'


@receiver(post_delete, sender=Post)
def delete_post_photo(sender, instance, **kwargs):
    if instance.photo:
        if os.path.isfile(instance.photo.path):
            os.remove(instance.photo.path)


@receiver(post_delete, sender=PopularPlace)
def delete_post_photo(sender, instance, **kwargs):
    if os.path.isfile(instance.photo.path):
        os.remove(instance.photo.path)
