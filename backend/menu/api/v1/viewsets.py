from rest_framework import authentication
from menu.models import Mainsample
from .serializers import MainsampleSerializer
from rest_framework import viewsets

class MainsampleViewSet(viewsets.ModelViewSet):
    serializer_class = MainsampleSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Mainsample.objects.all()