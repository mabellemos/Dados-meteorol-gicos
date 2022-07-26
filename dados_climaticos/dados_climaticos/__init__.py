import requests
from pprint import pprint

chave_API = '3cf17c6b8406f27838e6922c0ebde8aa'
cidade = input('Informe a cidade: ')

base_url = "http://api.openweathermap.org/data/2.5/weather?appid="+chave_API
clima = requests.get(base_url).json()
pprint(clima)