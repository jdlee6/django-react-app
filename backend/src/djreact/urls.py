from django.contrib import admin
from django.urls import path, include
from products.views import product_detail


urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls),
    path('api/', include('articles.api.urls')),
    # product detail view
    path('<int:pk>', product_detail, name='detail')
]
