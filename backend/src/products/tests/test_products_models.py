from mixer.backend.django import mixer
import pytest

@pytest.mark.django_db
class TestModels:

    def test_product_is_in_stock(self):
        '''
        tests when quantity is >= 1 -> property returns True
        '''
        product = mixer.blend('products.Product', quantity=1)
        assert product.is_in_stock == True

    def test_product_is_not_in_stock(self):
        '''
        tests when product is 0 -> property returns False
        '''
        product = mixer.blend('products.Product', quantity=0)
        assert product.is_in_stock == False