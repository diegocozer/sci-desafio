from django.db import models

# Create your models here.
class Sala(models.Model):
    sala = models.CharField(max_length=250)
    salaCafe = models.CharField(max_length=200)
    lotacao = models.DecimalField(max_digits=350, decimal_places=0)
    lotacaoCafe = models.DecimalField(max_digits=350, decimal_places=0)
    pessoas = models.CharField(max_length=255, default='')


    def __str__(self):
        return self.sala

class Pessoa(models.Model):
    nome = models.CharField(max_length=250)
    sobrenome = models.CharField(max_length=200)
  
    def __str__(self) -> str:
        return self.nome


class Vinculo(models.Model):
    salaReuniao = models.CharField(max_length=250)
    salaCafe = models.CharField(max_length=200)
    pessoa = models.CharField(max_length=200)


    def __str__(self) -> str:
        return self.nome

