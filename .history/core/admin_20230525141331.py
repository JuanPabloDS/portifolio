from django.contrib import admin

from .models import Tecnologia, Projeto


@admin.register(Tecnologia)
class TecnologiaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'imagem',)