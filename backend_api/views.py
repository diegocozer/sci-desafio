from django.shortcuts import render
from .models import Sala, Pessoa, Vinculo
from .serializers import SalaSerializer, PessoaSerializer,VinculoSerializer
from rest_framework import viewsets


#CRIA AS VIEWS, SEI QUE TEM OUTRA FORMA DE FAZER. VOU ME CAPACITAR MAIS

class SalaViewSet(viewsets.ModelViewSet):
    serializer_class = SalaSerializer
    queryset = Sala.objects.all()


class PessoaViewSet(viewsets.ModelViewSet):
    serializer_class = PessoaSerializer
    queryset = Pessoa.objects.all()


class VinculoViewSet(viewsets.ModelViewSet):
    serializer_class = VinculoSerializer
    queryset = Vinculo.objects.all()