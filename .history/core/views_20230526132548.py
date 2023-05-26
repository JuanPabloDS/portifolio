from django.views.generic import TemplateView
from django.core.paginator import Paginator, InvalidPage, EmptyPage
from django.db.models import Q
from .models import Tecnologia, Projeto


class IndexView(TemplateView):
    template_name: str = 'index.html'

    def get(self, request):



            values = Tecnologia.objects.all()


            if self.request.GET.get("search"):
                """Recebe os dados da busca que são passados na URL"""

                query = self.request.GET.get("search")


                if query.isdigit():
                    values = Tecnologia.objects.filter(
                        Q(sistema=query)
                    )

            if not len(values) == 0:

                paginator = Paginator(values, 15)

                # Esteja certo de que o `page request` é um inteiro. Se não, mostre a primeira página.
                try:
                    page = int(request.GET.get('page', '1'))
                except ValueError:
                    page = 1

                # Se o page request (9999) está fora da lista, mostre a última página.
                try:
                    tecnologias = paginator.page(page)
                except (EmptyPage, InvalidPage):
                    tecnologias = paginator.page(paginator.num_pages)

            else:
                paginator = ''

            context = {
                'paginator': paginator,

            }

            return render( request, 'index.html', context)



    template_name: str = 'listar-empresa.html'
