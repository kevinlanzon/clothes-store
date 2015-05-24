describe('Homepage', function() {

  browser.get('index.html');
  productList = element.all(by.tagName('h5'));

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Clothes Store');
  });

  it('displays 13 products', function() {
    expect(productList.count()).toBe(13);
  });
});
