describe('Homepage', function() {

  browser.get('index.html');

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Clothes Store');
  });
});
