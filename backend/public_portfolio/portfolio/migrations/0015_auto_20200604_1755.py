# Generated by Django 3.0.6 on 2020-06-04 16:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0014_auto_20200604_1753'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
