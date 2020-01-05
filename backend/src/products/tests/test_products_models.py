from mixer.backend.django import mixer
import pytest

@pytest.fixture
def product(request, db):
    return mixer.blend('products.Product', quantity=request.param)

# <name of fixture>, <[value]>, indirect=True
@pytest.mark.parametrize('product', [1], indirect=True)
def test_product_is_in_stock(product):
    '''
    tests when quantity is >= 1 -> property returns True
    '''
    assert product.is_in_stock == True

@pytest.mark.parametrize('product', [0], indirect=True)
def test_product_is_not_in_stock(product):
    '''
    tests when product is 0 -> property returns False
    '''
    assert product.is_in_stock == False