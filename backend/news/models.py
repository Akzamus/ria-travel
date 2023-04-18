from django.db import models


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

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.preview_text:
            self.preview_text = self.main_text[:150] + '...'
        super().save(*args, **kwargs)

    class Meta:
        verbose_name_plural = 'Посты'
