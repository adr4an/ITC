import { cart } from "../../data/cart.js";

export function renderCheckoutHeader(){
    let numbers = 0;

    cart.forEach(items => {
        numbers += items.quantity;
    });

    const page = `
        Checkout  (<a class="return-to-home-link"
        href="index.html"> ${numbers} Items </a>)
    `;

    const web = document.querySelector('.js-checkout-quantity')
    .innerHTML = page;

    
}