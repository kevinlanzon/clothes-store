describe('storeControllers', function() {

  describe('ProductListCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(module('clothesStore'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('products/productList.json').
          respond([{name: 'Mock Product 1', price: 5}, {name: 'Mock Product 2', price: 5}]);

      scope = $rootScope.$new();
      ctrl = $controller('ProductListCtrl', {$scope: scope});
    }));

    it('should create "products" model with 2 products fetched from xhr', function() {
      expect(scope.products).toBeUndefined();
      $httpBackend.flush();
      expect(scope.products).toEqual([{name: 'Mock Product 1', price: 5}, {name: 'Mock Product 2', price: 5}]);
    });

    it('initializes with an empty shopping cart', function() {
      expect(scope.shoppingCart).toEqual([]);
    });

    it('can add a product to the shopping cart', function() {
      $httpBackend.flush();
      scope.addProduct(0);
      expect(scope.shoppingCart.length).toEqual(1);
    });

    it('can remove a product from the shopping cart', function() {
      scope.removeProduct(0);
      expect(scope.shoppingCart.length).toEqual(0);
    });

    it('calculates the shopping cart total', function() {
      $httpBackend.flush();
      scope.addProduct(0);
      scope.addProduct(1);
      expect(scope.cartTotal()).toEqual(10);
    });
  });
});
