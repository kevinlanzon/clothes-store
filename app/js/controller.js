app.controller('StoreController', ['$scope', '$http', function($scope, $http) {

  $http.get('products/productList.json').success(function(data) {
    $scope.products = data;
  });

  $http.get('products/vouchers.json').success(function(data) {
    $scope.vouchers = data;
  });

  $scope.shoppingCart = [];
  $scope.total = 0;
  $scope.discount = 0;
  $scope.text = '';

  $scope.addProduct = function(index) {
    $scope.shoppingCart.push($scope.products[index]);
  };

  $scope.removeProduct = function(index) {
    $scope.shoppingCart.splice(index, 1);
  };

  $scope.cartTotal = function() {
    $scope.total = 0;
    angular.forEach($scope.shoppingCart, function(product) {
      $scope.total += product.price;
    });
    return $scope.total -= $scope.discount;
  };

  $scope.fiveVoucher = function() {
    $scope.discount = 5;
    $scope.text = 'Voucher Accepted!'
  };

  $scope.addDiscount = function() {
    if ($scope.text == '5off') {
      $scope.fiveVoucher();
      };
    $scope.cartTotal();
  };
}]);
