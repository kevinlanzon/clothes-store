describe('storeController', function() {
  beforeEach(module('clothesStore'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('storeController');
  }));

  it('initialises with an empty shopping cart', function() {
    expect(ctrl.shoppingCart).toEqual([]);
  });
});
