from django.db import models

# Create your models here.

class DisciplineIncident(models.Model):
    year = models.IntegerField()
    county_district_code = models.CharField(max_length=10)
    district_name = models.CharField(max_length=255)
    enrollment_grades_k_12 = models.IntegerField()
    discipline_incidents = models.IntegerField()
    discipline_incidents_rate = models.FloatField()
    