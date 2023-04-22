# Generated by Django 3.2.12 on 2023-04-22 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TelegramChat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=255, null=True, unique=True, verbose_name='Название')),
                ('chat_id', models.CharField(max_length=255, unique=True, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'Телеграм чат',
                'verbose_name_plural': 'Телеграм чаты',
            },
        ),
    ]
