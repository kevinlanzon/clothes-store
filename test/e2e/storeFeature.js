describe('Store', function() {

  beforeEach(function() {
    browser.get('index.html');
    products = element.all(by.repeater('product in products'));
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
    expect(element(by.id('add-to-cart')).isPresent()).toBe(true);
  });

  it('should filter the product list as a user types into the search box', function() {
    var query = element(by.model('query'));
    expect(products.count()).toEqual(13);
    query.sendKeys('Suede Shoes');
    expect(products.count()).toEqual(1);

    query.clear();
    query.sendKeys('Flip Flops');
    expect(products.count()).toEqual(2);
  });
});
