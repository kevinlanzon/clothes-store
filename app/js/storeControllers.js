app.controller('ProductListCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('products/productList.json').success(function(data) {

    $scope.products = data;

  });

  $scope.shoppingCart = [];
  $scope.total = 0;

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
