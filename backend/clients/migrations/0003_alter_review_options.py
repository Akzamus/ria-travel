# Generated by Django 3.2.12 on 2023-04-21 05:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('clients', '0002_alter_review_id'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='review',
            options={'verbose_name': 'Отзыв', 'verbose_name_plural': 'Отзывы'},
        ),
    ]