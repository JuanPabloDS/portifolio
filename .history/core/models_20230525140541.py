from django.db import models


class Base(models.Model):
    criado = models.DateField('Data de Criação', auto_now_add=True)
    modificado = models.DateField('data de Atualização', auto_now=True)
    ativo = models.BooleanField('Ativo?', default=True)


class Tecnologia(Base):
    nome = models.CharField(max_length=100)
    icon = models.CharField(max_length=250)


    def register(self):
        self.save()

    class Meta:
        verbose_name = 'Tecnologia'
        verbose_name_plural = 'Tecnologias'


    def __str__(self) -> str:
        """Retorna o str"""
        return f'{self.nome}'


class Projeto(Base):
    titulo = models.CharField(max_length=100)
    texto = models.CharField(max_length=550)
    imagem = models.CharField(max_length=250)
    url = models.CharField(max_length=250)
    git = models.CharField(max_length=250)
    tecnologias = models.ForeignKey(Tecnologia, on_delete=models.CASCADE)


    def register(self):
        self.save()

    class Meta:
        verbose_name = 'Projeto'
        verbose_name_plural = 'Projetos'


    def __str__(self) -> str:
        """Retorna o str"""
        return f'{self.titulo}'