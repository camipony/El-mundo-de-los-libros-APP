# Generated by Django 4.1.6 on 2023-02-03 06:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0004_alter_favorites_id_book_alter_item_cart_id_book_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='item_cart',
            name='count',
        ),
    ]