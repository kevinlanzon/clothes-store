app.controller('ProductListCtrl', function($scope) {
  $scope.products = [
    {
      "name": "Almond Toe Court Shoes",
      "id": "0",
      "colour": "Patent Black",
      "category": "Women's Footwear",
      "price": 99.00,
      "image": "images/black_shoe.jpg",
      "quantity": 5,
      "canPurchase": true
    },
    {
      "name": "Suede Shoes",
      "id": "1",
      "colour": "Blue",
      "category": "Women's Footwear",
      "price": 42.00,
      "image": "images/blue_suede.jpg",
      "quantity": 4,
      "canPurchase": true
    },
    {
      "name": "Leather Driver Saddle Loafers",
      "id": "2",
      "colour": "Tan",
      "category": "Men's Footwear",
      "price": 34.00,
      "image": "images/saddle_loafers.jpg",
      "quantity": 12,
      "canPurchase": true
    },
    {
      "name": "Flip Flops",
      "id": "3",
      "colour": "Red",
      "category": "Men's Footwear",
      "price": 19.00,
      "image": "images/red_flip_flops.jpg",
      "quantity": 6,
      "canPurchase": true
    },
    {
      "name": "Flip Flops",
      "id": "4",
      "colour": "Blue",
      "category": "Men's Footwear",
      "price": 19.00,
      "image": "images/blue_flip_flops.jpg",
      "quantity": 0,
      "canPurchase": false,
      "soldOut": "Sold Out"
    },
    {
      "name": "Gold Button Cardigan",
      "id": "5",
      "colour": "Black",
      "category": "Women's Casualwear",
      "price": 167.00,
      "image": "images/gold_button_cardigan.jpg",
      "quantity": 6,
      "canPurchase": true
    },
    {
      "name": "Cotton Shorts",
      "id": "6",
      "colour": "Medium Red",
      "category": "Women's Casualwear",
      "price": 30.00,
      "image": "images/red_cotton_shorts.jpg",
      "quantity": 5,
      "canPurchase": true
    },
    {
      "name": "Fine Stripe Short Sleeve Shirt",
      "id": "7",
      "colour": "Grey",
      "category": "Men's Casualwear",
      "image": "images/grey_stripe_shirt.jpg",
      "price": 49.00,
      "quantity": 9,
      "canPurchase": true
    },
    {
      "name": "Fine Stripe Short Sleeve Shirt",
      "id": "8",
      "colour": "Green",
      "category": "Men's Casualwear",
      "image": "images/green_stripe_shirt.jpg",
      "old_price": 49.99,
      "price": 39.99,
      "quantity": 3,
      "canPurchase": true
    },
    {
      "name": "Sharkskin Waistcoat",
      "id": "9",
      "colour": "Charcoal",
      "category": "Men's Formalwear",
      "image": "images/waistcoat.jpg",
      "price": 75.00,
      "quantity": 2,
      "canPurchase": true
    },
    {
      "name": "Lightweight Patch Pocket Blazer",
      "id": "10",
      "colour": "Deer",
      "category": "Men's Formalwear",
      "price": 175.50,
      "image": "images/blazer.jpg",
      "quantity": 1,
      "canPurchase": true
    },
    {
      "name": "Bird Print Dress",
      "id": "11",
      "colour": "Black",
      "category": "Women's Formalwear",
      "price": 270.00,
      "image": "images/bird_print_dress.jpg",
      "quantity": 10,
      "canPurchase": true
    },
    {
      "name": "Mid Twist Cut-Out Dress",
      "id": "12",
      "colour": "Pink",
      "category": "Women's Formalwear",
      "price": 540.00,
      "image": "images/mid_twist_dress.jpg",
      "quantity": 5,
      "canPurchase": true
    }
  ];
});
