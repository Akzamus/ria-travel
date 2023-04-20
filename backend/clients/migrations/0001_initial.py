# Generated by Django 3.2.12 on 2023-04-20 16:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255, verbose_name='Имя')),
                ('photo', models.ImageField(blank=True, null=True, upload_to='reviews/', verbose_name='Фото')),
                ('text', models.TextField(verbose_name='Текст')),
            ],
        ),
    ]
