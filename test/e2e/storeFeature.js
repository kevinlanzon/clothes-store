describe('Store', function() {

  beforeEach(function() {
    browser.get('index.html');
    products = element.all(by.repeater('product in products'));
    query = element(by.model('query'));
    discountForm = element(by.id('discount'));
    discountSubmit = element(by.id('submit-discount'));
    addProduct = element.all(by.id('add-to-cart')).get(0);
    removeProduct = element.all(by.id('remove-from-cart')).get(0);
    shoppingCart = element.all(by.repeater('product in shoppingCart'));
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Clothes Store');
  });

  it('displays 13 products', function() {
    expect(products.count()).toEqual(13);
  });

  it('displays the product name', function() {
    expect(element(by.binding('product.name')).isPresent()).toBe(true);
  });

  it('displays the product price', function() {
    expect(element(by.binding('product.price')).isPresent()).toBe(true);
  });

  it('displays the product colour', function() {
    expect(element(by.binding('product.colour')).isPresent()).toBe(true);
  });

  it('displays the product colour', function() {
    expect(element(by.binding('product.category')).isPresent()).toBe(true);
  });

  it('displays the product stock count', function() {
    expect(element(by.binding('product.quantity')).isPresent()).toBe(true);
  });

  it('displays an Add to Cart button for each product', function() {
    expect(element(by.id('add-to-cart')).isPresent()).toEqual(true);
  });

  it('should add a product to the shopping cart', function() {
    addProduct.click();
    expect(shoppingCart.count()).toEqual(1);
  });

  it('should remove a product to the shopping cart', function() {
    addProduct.click();
    removeProduct.click();
    expect(shoppingCart.count()).toEqual(0);
  });

  it('should display the total value of the shopping cart', function() {
    addProduct.click();
    addProduct.click();
    expect(element(by.id('cart-total')).getText()).toEqual('Total: £198.00');
  });

  it('can add a £5 discount code "5off" to the shopping cart', function() {
    addProduct.click();
    discountForm.sendKeys('5off');
    discountSubmit.click();
    expect(element(by.id('cart-total')).getText()).toContain('Total: £94.00');
  });

  it('can add a £10 discount code "10off" when the cart total is over £50', function() {
    addProduct.click();
    addProduct.click();
    expect(element(by.id('cart-total')).getText()).toEqual('Total: £198.00');
    discountForm.sendKeys('10off');
    discountSubmit.click();
    expect(element(by.id('cart-total')).getText()).toEqual('Total: £188.00');
  });

  it('should filter the product list as a user types into the search box', function() {
    expect(products.count()).toEqual(13);
    query.sendKeys('Suede Shoes');
    expect(products.count()).toEqual(1);
    query.clear();
    query.sendKeys('Flip Flops');
    expect(products.count()).toEqual(2);
  });
});
