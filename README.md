# Pizzabuilder by Frode and Harald

We have one function that handles all the click events. The function is activated when a button with class 'btn-topping' is clicked.
When a button is clicked we check the id of the clicked button. Based on this id we add/remove the correct topping.

When we add/remove toppings we use a 'toggleClass' for the cheese and for the rest we check if the html of the correct div is empty.
If it's empty we add topping and if it is contains topping we clear the div.

We also have a function that updates the price. Every time we add a new topping we reset the orderPrice to the basePrice.
We then add the price of all toppings in the order.toppings array.
