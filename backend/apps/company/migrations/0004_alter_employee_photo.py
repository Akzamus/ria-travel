# Generated by Django 3.2.12 on 2023-04-22 09:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0003_alter_employee_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='photo',
            field=models.ImageField(upload_to='employees', verbose_name='Фото'),
        ),
    ]
