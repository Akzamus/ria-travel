# Generated by Django 3.2.12 on 2023-04-18 19:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='employee',
            options={'verbose_name_plural': 'Работники'},
        ),
        migrations.AlterField(
            model_name='employee',
            name='photo',
            field=models.ImageField(upload_to='company/', verbose_name='Фото'),
        ),
    ]