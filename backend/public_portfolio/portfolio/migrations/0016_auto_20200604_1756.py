# Generated by Django 3.0.6 on 2020-06-04 16:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0015_auto_20200604_1755'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofile',
            name='about',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='address',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='age',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='date_added',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='email',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='image',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='phone',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='resume',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='stack',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='username',
        ),
    ]
