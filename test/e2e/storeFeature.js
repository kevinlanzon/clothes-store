describe('Store', function() {

  beforeEach(function() {
    browser.get('index.html');
    productList = element.all(by.tagName('h4'));
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Clothes Store');
  });

  it('displays 13 products', function() {
    expect(productList.count()).toBe(13);
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

  it('displays an Add to Cart button for each product', function() {
    expect(element(by.id('add-to-cart')).isPresent()).toBe(true);
  });

  it('should filter the product list as a user types into the search box', function() {
    var productList = element.all(by.repeater('product in products'));
    var query = element(by.model('query'));
    expect(productList.count()).toBe(13);
    query.sendKeys('Suede Shoes');
    expect(productList.count()).toBe(1);

    query.clear();
    query.sendKeys('Flip Flops');
    expect(productList.count()).toBe(2);
  });
});
