from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response

from restaurantApp.models import *


# Create your views here.
class addRestaurant_view(APIView):
    def post(self, request):
        name = request.data["name"]
        cuisine = request.data["cuisine"]
        address = request.data["address"]
        city = request.data["city"]
        rating = request.data["rating"]

        if not Restaurant.objects.filter(name=name).exists():
            Restaurant.objects.create(
                name=name, cuisine=cuisine, address=address, city=city, rating=rating
            )
            print("data added")

            return Response({"msg": "Data Inserted Successfully"})

        else:
            return Response({"msg": "Name Alreay Exist "})

    def get(self, request):
        data = Restaurant.objects.values()

        return Response({"msg": "Working ", "data": data})


class deleteRestaurant_view(APIView):
    def delete(self, request, id):
        if Restaurant.objects.filter(id=id).exists():
            query = Restaurant.objects.filter(id=id)
            query.delete()

            return Response({"msg": "Data Deleted"})

        else:
            return Response({"msg": "Wrong Data"})


class getRestaurantBy_view(APIView):
    def get(self, request, id):
        query = Restaurant.objects.filter(id=id).values()
        return Response({"data": query})


class updateRestaurantBy_view(APIView):
    def put(self, request):
        resoId = request.data["resoId"]
        name = request.data["name"]
        cuisine = request.data["cuisine"]
        address = request.data["address"]
        city = request.data["city"]
        rating = request.data["rating"]

        if Restaurant.objects.filter(id=resoId).exists():
            Restaurant.objects.filter(id=resoId).update(
                name=name, cuisine=cuisine, address=address, city=city, rating=rating
            )
            # print("data added")

            return Response({"msg": "Data Updated"})

        else:
            return Response({"msg": "Error in update "})
