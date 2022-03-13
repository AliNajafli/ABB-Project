from rest_framework import serializers
from main_app.models import UserPhoneBook

class PhoneBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserPhoneBook
        fields = '__all__'