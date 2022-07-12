from backend_api.views import SalaViewSet, PessoaViewSet, VinculoViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views

router = DefaultRouter()
router.register(r'sala', views.SalaViewSet, basename='sala')
router.register(r'pessoa', views.PessoaViewSet, basename='pessoa')
router.register(r'vinculo', views.VinculoViewSet, basename='vinculo')
urlpatterns = router.urls