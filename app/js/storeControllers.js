app.controller('ProductListCtrl', ['$scope', '$http', function($scope, $http) {

  $http.get('products/productList.json').success(function(data) {

    $scope.products = data;

  });

  $scope.shoppingCart = [];
  $scope.discount = [];
  $scope.vouchers = [
    { name: '£ 5 Discount Voucher', value: 5, minSpend: 0   },
    { name: '£10 Discount Voucher', value: 10, minSpend: 50 },
    { name: '£15 Discount Voucher', value: 15, minSpend: 75 }
  ];

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
