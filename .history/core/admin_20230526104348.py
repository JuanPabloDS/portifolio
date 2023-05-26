from django.contrib import admin
from .models import Tecnologia,Filtros, Projeto
from stdimage.models import StdImageField


admin.site.register(Tecnologia)
admin.site.register(Filtros)
admin.site.register(Projeto)