# Generated by Django 3.0.3 on 2020-04-25 09:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0005_remove_userprofile_password'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='password',
            field=models.CharField(default='password', max_length=122),
            preserve_default=False,
        ),
    ]