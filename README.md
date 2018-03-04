# bamazon
// we are calling the database through node bamazon.js
PS C:\Users\Admin\bootcamp\bamazon> node bamazonCustomer.js

//2 optons display, either display products or lets begin our purchase
? Please Choose [Display Products] if you do not know what you want to pruchase (Use arrow keys)
> Display Products
  Lets Begin our purchase

// choose display products and it will return products than ask for and id To Purchase
Selecting all products...

id  product_name      department_name  price  stock_quantity
--  ----------------  ---------------  -----  --------------
1   barbell           fitness          50     100
2   TV                entertainment    300    10
3   Collars           fitness          5      1
4   Xbox One          entertainment    300    15
5   dumbbell          fitness          40     20
6   Playstation 4     entertainment    300    12
7   Coffee Maker      home             30     14
8   Picasso Painting  art              3000   15
9   Knives            home             39     8
10  Paint brush       art              3      10


//Ask the question of how many items do you want to purchase, follow by Quantity question.
? What is the item number of the item you wish to purchase? 2
 How many would you like to buy? 3


//Created a function called byStuff() that my tutor and I went through.
// getting error 
(node:3700) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): ReferenceError: purchaseUpdate is not defined
// will need to worko through and resolve this problem.






