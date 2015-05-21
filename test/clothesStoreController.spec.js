describe('ClothesStoreController', function() {
  beforeEach(module('ClothesStore'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ClothesStoreController');
  }));

  it('initialises with an empty shopping cart', function() {
    expect(ctrl.shoppingCart).toEqual([]);
  });
});
