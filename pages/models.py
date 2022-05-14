from django.db import models

# Create your models here.
class Menu(models.Model):
    name = models.CharField(unique=True, max_length=80)
    type = models.CharField(max_length=20)
    size_small = models.IntegerField(blank=True, null=True)
    price_small = models.IntegerField(blank=True, null=True)
    size_big = models.IntegerField(blank=True, null=True)
    price_big = models.IntegerField(blank=True, null=True)
    description = models.CharField(max_length=300, null=True)
    def __str__(self):
        return self.name