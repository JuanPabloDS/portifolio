from django.db import models
import uuid
from django.db.models import signals
from stdimage.models import StdImageField

class Base(models.Model):
    criado = models.DateField('Data de Criação', auto_now_add=True)
    modificado = models.DateField('data de Atualização', auto_now=True)
    ativo = models.BooleanField('Ativo?', default=True)


def get_file_path(_instance, filename):
    """ Função para gerar nomes aleátorios quando for salvar um
    arquivo de imagem"""
    ext = filename.split('.')[-1]
    filename = f'{uuid.uuid4()}.{ext}'
    return filename


class Tecnologia(Base):
    nome = models.CharField(max_length=100)
    icon = StdImageField('icon',upload_to=get_file_path)


    def register(self):
        self.save()

    class Meta:
        verbose_name = 'Tecnologia'
        verbose_name_plural = 'Tecnologias'


    def __str__(self) -> str:
        """Retorna o str"""
        return f'{self.nome}'


class Filtros(Base):
    nome = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Filtro'
        verbose_name_plural = 'Filtros'


    def __str__(self) -> str:
        """Retorna o str"""
        return f'{self.nome}'


class Projeto(Base):
    titulo = models.CharField(max_length=100)
    texto = models.CharField(max_length=550)
    imagem = StdImageField('imagem',upload_to=get_file_path)
    url = models.CharField(max_length=250)
    git = models.CharField(max_length=250)
    tecnologias = models.ManyToManyField(Tecnologia)
    filtro = models.ManyToManyField(Filtros)


    def register(self):
        self.save()

    class Meta:
        verbose_name = 'Projeto'
        verbose_name_plural = 'Projetos'


    def __str__(self) -> str:
        """Retorna o str"""
        return f'{self.titulo}'