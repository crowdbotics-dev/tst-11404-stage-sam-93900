
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import MainsampleViewSet
router = DefaultRouter()
router.register('mainsample', MainsampleViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
