from django.urls import reverse, resolve

# 1 assert statement per function == good practice
class TestUrls:
    def test_detail_url(self):
        path = reverse('detail', kwargs={'pk': 1})
        assert resolve(path).view_name == 'detail'