from django.urls import path
from .views import HomePageView, AboutPageView, LocationPageView, MenuPageView

urlpatterns = [ 
    path('', HomePageView.as_view(), name='home'),
    path('about/', AboutPageView.as_view(), name='about'),
    path('location/', LocationPageView.as_view(), name='location'),
    path('menu/', MenuPageView.as_view(), name='menu'),
]