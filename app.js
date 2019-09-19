const order = {
    toppings: [],
    basePrice: 80,
    total: 80
}

const toppings = [{
        name: 'pepperoni',
        price: 20
    },{
        name: 'mushroom',
        price: 40
    }, {
        name: 'cheese',
        price: 0
    }, {
        name: 'pineapple',
        price: 30
    }
]

// Cache topping containers
let $pizza  = null;
let $mushrooms = null;
let $pepperoni = null;
let $pineapple = null;
let $total = null;

$(document).ready(function () {
    // Write the best jQuery ever here
    $pizza = $('.pizza');
    $mushrooms = $('.mushrooms');
    $pepperoni = $('.pepperonis');
    $pineapple = $('.pineapples');
    $total = $('#total');

    function calcPrice(){
        order.total = order.basePrice;
        $.each(toppings, function(key, value){
            if(order.toppings.includes(value.name)){
                order.total += value.price;
            }
        });
    }

    $('.btn-topping').click(function(e){

        if(order.toppings.includes(e.target.id)){
            $.each(order.toppings, function(key, value){
                if(value === e.target.id){
                    order.toppings.splice(key, 1);
                    calcPrice();
                }
            });
        }
        else{
            order.toppings.push(e.target.id);
            calcPrice();
        }

        var toppingElement = generateTopping(e.target.id);

        switch(e.target.id){
            case 'cheese':
                $pizza.toggleClass('no-cheese');
                break;
            case 'pepperoni':
                $pepperoni.html() == "" ? $pepperoni.html(toppingElement) : $pepperoni.html("");
                break;
            case 'mushroom':
                $mushrooms.html() == "" ? $mushrooms.html(toppingElement) : $mushrooms.html("");
                break;
            case 'pineapple':
                $pineapple.html() == "" ? $pineapple.html(toppingElement) : $pineapple.html("");
                break;
        }
        $total.text(order.total);
    });
});

// Automatically generate the toppings based on the name and id from the button.
function generateTopping(topping) {
    const looper = Array(10).fill(topping);
    return looper.map(item => `<div class="${item}"></div>`).join('');
}