# Generated by Django 3.0.6 on 2020-06-03 00:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0011_auto_20200520_0309'),
    ]

    operations = [
        migrations.AddField(
            model_name='userprofile',
            name='stack',
            field=models.CharField(blank=True, max_length=222, null=True),
        ),
    ]
