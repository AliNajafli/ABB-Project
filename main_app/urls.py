
from django.urls import path
from main_app.views import *
urlpatterns = [
    path('add/', UserPhoneBookList.as_view()),
    path('list/', UserPhoneBookList.as_view()),
    path('edit/<uuid:id>/', UserPhoneDetail.as_view()),
    path('delete/<uuid:id>/', UserPhoneDetail.as_view()),
]
