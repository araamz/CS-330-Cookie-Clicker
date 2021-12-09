from django.urls import path
from . import views

urlpatterns = [

	path('', views.apiOverview, name='api-overview'),
    path('download_score/', views.download_score, name="download-score"),
    path('upload_score/', views.upload_score, name="upload-score"),

]

