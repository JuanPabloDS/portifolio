from django.contrib import admin
from .models import Tecnologia, Projeto
from stdimage.models import StdImageField


@admin.register(Tecnologia)
class TecnologiaAdmin(admin.ModelAdmin):
    list_display = ('nome', 'icon','criado', 'modificado', 'ativo',)


@admin.register(Projeto)
class ProjetoAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'texto', 'imagem', 'url', 'git', 'tecnologias', 'criado', 'modificado', 'ativo',)