import {hello} from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js"
import  dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js"
import {cart,removeFromCart,updateDeliveryOption} from "../data/cart.js"
import {products} from "../data/products.js"
import { deliveryOptions} from "../data/deliveryOptions.js"

//Named export,default export


hello()
// console.log(dayjs())
const today =  dayjs()
const deliveryDate = today.add(7,"days")
console.log(deliveryDate.format('dddd, MMMM D'))
// console.log(deliveryOptions[0].deliveryDays)
console.log(cart)
console.log(deliveryOptions);
console.log('Looking for delivery option with id:', deliveryOptions[0].id);
console.log('Looking for delivery option with id:', deliveryOptions[1].id);
console.log('Looking for delivery option with id:', deliveryOptions[2].id);


let matchingProductHTML = '';
function deliveryOptionsHTML (matchingProduct,cartItem){
  let optionsHTML = ''
  deliveryOptions.forEach((deliveryOption) => {
    const today = dayjs()
    const deliveryDate = today.add(deliveryOption.deliveryDays,"days")
    const dateString = deliveryDate.format('dddd,  MMMM D')

    const priceString = deliveryOption.priceCents === 0 ? 'FREE' : `${(deliveryOption.priceCents / 100).toFixed(2)}`

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId 

    optionsHTML += `
    <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id = ${deliveryOption.id}>
                  <input type="radio"
                  ${isChecked ? 'checked' : ''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingProduct.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString}- Shipping
                    </div>
                  </div>
                </div>`
  })
  return optionsHTML
}




cart.forEach((cartItem) => {
  const productId = cartItem.productId

  // let matchingProduct;
  let matchingProduct = products.find((product) => {
    return productId === product.id
  })
  // products.forEach((product) => {
  //   if(productId === product.id){
  //     matchingProduct = product

  //   }
  // })

// const deliveryOptionId = cartItem.deliveryOptionId
// let deliveryOption ;

// deliveryOptions.forEach((option) => {
//   if (option.id === deliveryOptionId){
//     deliveryOption = option
//   }
// });
// console.log(deliveryOption)
// const today = dayjs()
// console.log(today)
// const deliveryDate = today.add(deliveryOption.deliveryDays,"days")
// console.log(deliveryDate,'deliverydate')
// const dateString = deliveryDate.format('dddd,  MMMM D')
// console.log(dateString)
// deliveryOptions.forEach((option) => {
//   if (option.id === deliveryOptionId){
//       deliveryOption = option;
//   }
// });

// // Add a check before accessing deliveryOption properties
//   if (deliveryOption) {
//     const today = dayjs();
//     const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
//     console.log(deliveryDate)
//     console.log(typeof deliveryDate)
//     const dateString = deliveryDate.format('dddd, MMMM D');
//     console.log(dateString)
//     // Proceed with using deliveryOption properties
//   } else {
//     console.error(`Delivery option with id ${deliveryOptionId} not found.`);
//     // Handle the case where deliveryOption is undefined
//   }

//   if (!matchingProduct) {
//     console.error(`Product with id ${productId} not found.`);
//     return;
// }

const deliveryOptionId = cartItem.deliveryOptionId;

let deliveryOption;
deliveryOptions.forEach((option) => {
  if(option.id === deliveryOptionId){
    deliveryOption = option

  }
})
// const deliveryOption = deliveryOptions.find(option => option.id === deliveryOptionId);

if (!deliveryOption) {
    console.error(`Delivery option with id ${deliveryOptionId} not found.`);
    return;
}

const today = dayjs();
const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
const dateString = deliveryDate.format('dddd, MMMM D'); // dateString is defined here



  // if (matchingProduct) {


    matchingProductHTML += `
        <div class="cart-item-container js-cart-container-${matchingProduct.id}">
            <div class="delivery-date">
                Delivery date: ${dateString}
            </div>
            <div class="cart-item-details-grid">
                <img class="product-image" src="${matchingProduct.image}">
                <div class="cart-item-details">
                    <div class="product-name">
                        ${matchingProduct.name}
                    </div>
                    <div class="product-price">
                        $${(matchingProduct.priceCents / 100).toFixed(2)}
                    </div>
                    <div class="product-quantity">
                        <span>
                            Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                        </span>
                        <span class="update-quantity-link link-primary">
                            Update
                        </span>
                        <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                            Delete
                        </span>
                    </div>
                </div>
                <div class="delivery-options">
                    <div class="delivery-options-title">
                        Choose a delivery option:
                    </div>
                    ${deliveryOptionsHTML(matchingProduct,cartItem)}
                </div>
            </div>
        </div>`

})
document.querySelector('.js-order-summary').innerHTML = matchingProductHTML;





document.querySelectorAll('.js-delete-link').forEach((link) => {
  link.addEventListener('click',() => {
    const productId = link.dataset.productId;
    console.log(productId)

    removeFromCart(productId)

   
    const container = document.querySelector(`.js-cart-container-${productId}`)
    container.remove()
      
 })
})

document.querySelectorAll('.js-delivery-option').forEach((element) =>{
  element.addEventListener('click',() => {
    const {productId,deliveryOptionId} = element.dataset;

    updateDeliveryOption(productId,deliveryOptionId)
  })
})

    
 
    