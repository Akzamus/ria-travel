from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models


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
    experience = models.IntegerField(
        validators=[MinValueValidator(0), MaxValueValidator(100)],
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
