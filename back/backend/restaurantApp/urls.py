from django.contrib import admin
from django.urls import path

from restaurantApp.views import *

urlpatterns = [
    path("add/", addRestaurant_view.as_view(), name="addRestaurant_view"),
    path("getBy/<str:id>", getRestaurantBy_view.as_view(), name="getRestaurantBy_view"),
    path(
        "delete/<str:id>", deleteRestaurant_view.as_view(), name="deleteRestaurant_view"
    ),
    path("update/", updateRestaurantBy_view.as_view(), name="updateRestaurantBy_view"),
]
