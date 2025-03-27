# Generated by Django 5.1.6 on 2025-02-27 08:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('phone_number', models.CharField(max_length=15)),
                ('address', models.TextField()),
                ('car_number', models.CharField(max_length=20, unique=True)),
                ('mac_address', models.CharField(blank=True, max_length=20, null=True)),
            ],
        ),
    ]
