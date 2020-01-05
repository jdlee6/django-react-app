from django.urls import reverse, resolve
from articles.api.views import ArticleViewSet
from rest_framework.test import APIRequestFactory
from articles.models import Article
import pytest

class TestUrls:
    @pytest.mark.django_db 
    def test_view_set(self):
        '''
        tests article view set 
        '''
        request = APIRequestFactory().get('')
        article_detail = ArticleViewSet.as_view({'get': 'retrieve'}) 
        article = Article.objects.create(title='test') # post request
        response = article_detail(request, pk=article.pk) # get detail request based on primary key
        assert response.status_code == 200
