from django.db import models
from django.db.models.signals import post_delete
from django.dispatch import receiver
import os


class Employee(models.Model):
    id = models.AutoField(
        primary_key=True
    )
    name = models.CharField(
        max_length=100,
        null=False,
        blank=False,
        verbose_name='Фамилия и имя'
    )
    experience = models.PositiveIntegerField(
        null=False,
        blank=False,
        verbose_name='Cтаж работы'
    )
    photo = models.ImageField(
        upload_to='employees/',
        null=False,
        blank=False,
        verbose_name='Фото'
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Работники'
        verbose_name = 'Работник'


@receiver(post_delete, sender=Employee)
def delete_post_photo(sender, instance, **kwargs):
    if instance.photo:
        if os.path.isfile(instance.photo.path):
            os.remove(instance.photo.path)
