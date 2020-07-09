
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include
from .views import RegisterApiView, UserViewSet, index, ProfileAPI
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework_jwt.views import refresh_jwt_token


from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet, basename='user')




urlpatterns = [

    path('signup/', RegisterApiView.as_view(), name = "signup"),  
    path('index/', index),
    path('signin/', obtain_jwt_token),
    path('api-token-refresh/', refresh_jwt_token),
    path('', include(router.urls) ),
    path('<username>/', ProfileAPI.as_view()),
   
  
   
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)