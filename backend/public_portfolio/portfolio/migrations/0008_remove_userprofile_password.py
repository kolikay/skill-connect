# Generated by Django 3.0.3 on 2020-04-25 22:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0007_auto_20200425_2256'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='password',
        ),
    ]