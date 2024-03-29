/*

import { cart } from "../data/cart.js";
import { getProduct } from "../data/products.js";
import { saveToStorage } from "../data/cart.js";

export function placeContainer(){
    let pages = '';


    cart.forEach(items => {
        let cartProduct = getProduct(items.productId);

        pages += `
            <div class="order-container">
                    
                <div class="order-header">
                    <div class="order-header-left-section">
                        <div class="order-date">
                        <div class="order-header-label">Order Placed:</div>
                        <div>August 12</div>
                        </div>
                        <div class="order-total">
                        <div class="order-header-label">Total:</div>
                        <div> ₱${cartProduct.priceCents * items.quantity} </div>
                        </div>
                    </div>

                    <div class="order-header-right-section">
                        <div class="order-header-label">Order ID:</div>
                        <div> ${cartProduct.id} </div>
                    </div>
                </div>

                <div class="order-details-grid">
                <div class="product-image-container">
                    <img src="${cartProduct.image}">
                </div>

                <div class="product-details">
                    <div class="product-name">
                        ${cartProduct.name}
                    </div>
                    <div class="product-delivery-date">
                    Arriving on: August 19
                    </div>
                    <div class="product-quantity">
                    ${items.quantity}
                    </div>
                    <button class="buy-again-button button-primary">
                    <img class="buy-again-icon" src="images/icons/buy-again.png">
                    <span class="buy-again-message"> Buy it again </span>
                    </button>
                </div>

                    <div class="product-actions">
                        <a href="tracking.html">
                        <button class="track-package-button button-secondary">
                            Track package
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    saveToStorage();
}

export function placeOrderFunction(){

      const button = document.querySelector('.js-place-order-button');
      button.addEventListener('click', () => {
          placeContainer();
      });
  
}

*/