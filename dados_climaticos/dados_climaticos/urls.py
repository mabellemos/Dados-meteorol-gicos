from django.contrib import admin
from django.urls import path, include
from . import clima
urlpatterns = [
    path('admin/', admin.site.urls),
    #path('', include(clima.urls)),
]
