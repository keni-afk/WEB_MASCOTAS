let products = [];
let total = 0;

function add(product, price) {
    console.log(product, price);
    products.push(product);
    total = total + price; 
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

/*
const add =(product, price)=> {
    products.push(product)
    total+=price
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

const pay =()=> { window.alert(products.join(", \n")) } 

*/

function pay() {
    window.alert(products.join(", \n"));
}
