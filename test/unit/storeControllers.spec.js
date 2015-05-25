describe('storeControllers', function() {

  describe('ProductListCtrl', function() {
    var scope, ctrl, $httpBackend;

    beforeEach(module('clothesStore'));

    beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('products/productList.json').
          respond([{name: 'Mock Product 1', price: 50}, {name: 'Mock Product 2', price: 50}]);

      $httpBackend.expectGET('products/vouchers.json').
          respond([{ name: '5Off', value: 5, minSpend: 0   },
                   { name: '10Off', value: 10, minSpend: 50 },
                   { name: '15Off', value: 15, minSpend: 75 }
                  ]);

      scope = $rootScope.$new();
      ctrl = $controller('ProductListCtrl', {$scope: scope});
      $httpBackend.flush();
    }));

    it('should create "products" model with 2 products fetched from xhr', function() {
      expect(scope.products).toEqual([{name: 'Mock Product 1', price: 50}, {name: 'Mock Product 2', price: 50}]);
    });

    it('initializes with an empty shopping cart', function() {
      expect(scope.shoppingCart).toEqual([]);
    });

    it('can add a product to the shopping cart', function() {
      scope.addProduct(0);
      expect(scope.shoppingCart.length).toEqual(1);
    });

    it('can remove a product from the shopping cart', function() {
      scope.removeProduct(0);
      expect(scope.shoppingCart.length).toEqual(0);
    });

    it('calculates the shopping cart total', function() {
      scope.addProduct(0);
      scope.addProduct(1);
      expect(scope.cartTotal()).toEqual(100);
    });

    it('can apply a £5 discount voucher to the shopping cart total', function() {
      scope.addProduct(0);
      scope.addDiscount('5Off');
      expect(scope.discountedTotal).toEqual(45);
    });
  });
});
