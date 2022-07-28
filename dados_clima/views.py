# -*- coding: utf-8 -*-
from django.shortcuts import render
import requests 
from pprint import pprint

def index(request):
    context = {}
    if request.method == "POST":
        API_chave = '3cf17c6b8406f27838e6922c0ebde8aa'

        cidade = request.POST.get('cidade', None)
        base_url = "http://api.openweathermap.org/data/2.5/weather?appid="+API_chave+"&q="+cidade

        clima = requests.get(base_url).json()
        context['clima'] = clima
    return render(request, "index.html", context=context)
