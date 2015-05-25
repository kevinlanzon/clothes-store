describe('storeControllers', function() {

  describe('ProductListCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(module('clothesStore'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('products/productList.json').
          respond([{name: 'Flip Flop'}, {name: 'Suede Shoes'}]);

      scope = $rootScope.$new();
      ctrl = $controller('ProductListCtrl', {$scope: scope});
    }));

    it('should create "products" model with 2 products fetched from xhr', function() {
      expect(scope.products).toBeUndefined();
      $httpBackend.flush();
      expect(scope.products).toEqual([{name: 'Flip Flop'}, {name: 'Suede Shoes'}]);
    });

    it('initializes with an empty shopping cart', function(){
      expect(scope.shoppingCart).toEqual([]);
    });
  });
});
