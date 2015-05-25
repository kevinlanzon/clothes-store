app.controller('ProductListCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('products/productList.json').success(function(data) {

    $scope.products = data;

  });

  $scope.shoppingCart = [];
  $scope.total = 0;
  $scope.totalDiscount = [];
  $scope.vouchers = [
    { name: 'fiveOff', value: 5, spendReq: 0    },
    { name: 'tenOoff', value: 10, spendReq: 50 },
    { name: 'fifteenOff', value: 15, spendReq: 75 }
  ];

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
    return $scope.total;
  };
}]);
