from django.contrib import admin
from .models import Sala, Pessoa, Vinculo
# Register your models here.

class SalaAdmin(admin.ModelAdmin):
    list = ('sala', 'SalaCafe', 'lotacao', 'lotacaoCafe', )

    admin.site.register(Sala)


class PessoaAdmin(admin.ModelAdmin):
    list = ('nome', 'sobrenome')

    admin.site.register(Pessoa)

class VinculoAdmin(admin.ModelAdmin):
    list = ('salaReuniao', 'salaCafe', 'pessoa')

    admin.site.register(Vinculo)