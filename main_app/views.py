from django.shortcuts import render
from main_app.serializers import PhoneBookSerializer
from main_app.models import UserPhoneBook
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status




class UserPhoneBookList(APIView):
    """
    List all snippets, or create a new User PhoneBook.
    """
    def get(self, request, format=None):
        try:
            instances = UserPhoneBook.objects.all()
            serializer = PhoneBookSerializer(instances, many=True)

            my_json={"data":serializer.data,"status":"success"}
            return Response(my_json)
        except:
            my_json={"status":"failed"}
            return Response(my_json,status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def post(self, request, format=None):
        try:
            serializer = PhoneBookSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except:
            my_json={"status":"failed"}
            return Response(my_json,status=status.HTTP_500_INTERNAL_SERVER_ERROR)
class UserPhoneDetail(APIView):
    """
    Retrieve, update or delete a UserPhoneBook instance.
    """
    def get_object(self, id):
        try:
            return UserPhoneBook.objects.get(user_id=id)
        except UserPhoneBook.DoesNotExist:
            raise Http404

    def get(self, request, id, format=None):
        try:
            instance = self.get_object(id)
            serializer = PhoneBookSerializer(instance)
            my_json={"data":serializer.data,"status":"success"}
            return Response(my_json)
        except:
            my_json={"status":"failed"}
            return Response(my_json,status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def put(self, request, id, format=None):
        try: 
            instance = self.get_object(id)
            serializer = PhoneBookSerializer(instance, data=request.data)
            if serializer.is_valid():
                serializer.save()
                my_json={"data":serializer.data,"status":"success"}
                return Response(my_json)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except:
            my_json={"status":"failed"}
            return Response(my_json,status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, id, format=None):
        try:
            instance = self.get_object(id)
            instance.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except:
            my_json={"status":"failed"}
            return Response(my_json,status=status.HTTP_500_INTERNAL_SERVER_ERROR)
