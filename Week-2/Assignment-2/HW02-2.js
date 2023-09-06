function avg(data) {
    // your code here
    let answer = 0;
    for(let i = 0; i < data['products'].length; i++){
        answer = answer + data['products'][i].price;
    }
    return answer;
}


console.log(
    avg({
        size: 3,
        products: [{
            name: 'Product 1',
            price: 100,
            },{
            name: 'Product 2',
            price: 700,
            },{
            name: 'Product 3',
            price: 250,
        },],
    })
); // should print the average price of all products
    