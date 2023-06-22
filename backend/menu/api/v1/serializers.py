from rest_framework import serializers
from menu.models import Mainsample

class MainsampleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Mainsample
        fields = "__all__"