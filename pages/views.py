from django.views.generic import TemplateView, ListView
from .models import Menu
# Create your views here.

class HomePageView(TemplateView):
    template_name = 'index.html'

class AboutPageView(TemplateView):
    template_name = 'about.html'

class LocationPageView(TemplateView):
    template_name = 'locations.html'

class MenuPageView(ListView):
    model = Menu
    template_name = 'menu.html'
    context_object_name = 'all_drinks_list'
