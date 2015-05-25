app.controller('ProductListCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('products/productList.json').success(function(data) {

    $scope.products = data;

  });

  $scope.shoppingCart = [];

  $scope.add = function(product) {
    $scope.shoppingCart.push(product);
  };
}]);
