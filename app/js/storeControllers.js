app.controller('ProductListCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('products/productList.json').success(function(data) {
    $scope.products = data;
  });

  $http.get('products/vouchers.json').success(function(data) {
    $scope.vouchers = data;
  });

  $scope.shoppingCart = [];
  $scope.discount = [];

  $scope.addProduct = function(index) {
    $scope.shoppingCart.push($scope.products[index]);
  };

  $scope.removeProduct = function(index) {
    $scope.shoppingCart.splice(index, 1);
  };

  $scope.cartTotal = function() {
    var total = 0;
    angular.forEach($scope.shoppingCart, function(product) {
      total += product.price;
    });

    angular.forEach($scope.discount, function(voucher) {
      total -= voucher.value;
    })
    return total;
  };

  $scope.addDiscount = function(voucher) {
    if(($scope.cartTotal() >= voucher.minSpend)) {
      $scope.discount.push(voucher);
    };
  };
}]);
