from django.db import models

# Create your models here.
class Player(models.Model):
    username = models.CharField(max_length = 200, default="Cookie God")
    score = models.IntegerField(default=0)
