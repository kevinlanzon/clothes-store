describe('storeControllers', function() {

  describe('ProductListCtrl', function(){

    beforeEach(module('clothesStore'));

    it('should create "products" model with 13 products', inject(function($controller) {
      var scope = {},
      ctrl = $controller('ProductListCtrl', {$scope:scope});
      expect(scope.products.length).toBe(13);
    }));
  });
});