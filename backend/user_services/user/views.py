
from rest_framework.templatetags.rest_framework import data
from .serializers import *
from django.http import HttpResponse, JsonResponse
from rest_framework .parsers import JSONParser
from django.views.decorators.csrf import csrf_exempt
import os
from django.core.serializers import serialize
import json


# Create your views here.

def hello(request):
    return HttpResponse('Hello world!')

def get_users(request):
    users = list(User.objects.values())
    return JsonResponse(users, safe=False)

@csrf_exempt
def create_user(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors,status=400)

@csrf_exempt
def check_login(request,email):
    try:
        user = User.objects.filter(email=email)
    except:
        return HttpResponse(status=404)


    if request.method == 'GET':
       serializer = UserSerializer(user,many=True)
       return JsonResponse(serializer.data,safe=False)


@csrf_exempt
def user_by_id(request,pk):
    try:
        user = User.objects.get(pk=pk)
    except:
        return HttpResponse(status=404)
    if request.method == 'GET':
        serializer = UserSerializer(user, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = UserSerializer(user, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data,status=201)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        user.delete()
        return HttpResponse(status=201)

