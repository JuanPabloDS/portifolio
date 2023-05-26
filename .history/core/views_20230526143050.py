from django.views.generic import TemplateView
from django.core.paginator import Paginator, InvalidPage, EmptyPage
from django.db.models import Q
from .models import Tecnologia, Projeto
from django.shortcuts import render, redirect


class IndexView(TemplateView):
    template_name: str = 'index.html'

    def get(self, request):



            values = Projeto.objects.all()


            if self.request.GET.get("search"):
                """Recebe os dados da busca que são passados na URL"""

                query = self.request.GET.get("search")

                if not query == 'Todos':
                    values = Projeto.objects.filter(
                        Q(filtro=query)
                    )


            context = {
                'tecnologia': values,

            }

            return render( request, 'index.html', context)



    template_name: str = 'listar-empresa.html'
