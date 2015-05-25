app.controller('ProductListCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('products/productList.json').success(function(data) {

    $scope.products = data;

  });

  $scope.shoppingCart = [];

  $scope.addProduct = function(index) {
    $scope.shoppingCart.push($scope.products[index]);
  };

  $scope.removeProduct = function(index) {
    $scope.shoppingCart.splice(index, 1);
  };
}]);
