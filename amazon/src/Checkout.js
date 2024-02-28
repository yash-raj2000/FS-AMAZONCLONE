import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
      <div className='checkout'>
          <div className="checkout_left">
              <img className='checkout_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
              <div>
                  <h2 className='checkout_title'>
                      Your Shopping Basket</h2>
                 {/* BasketItem */}
              </div>
          </div>
          <div className="checkout_right">
              <Subtotal />
              <h2>The subtototal go here</h2>
          </div>
    </div>
  )
}

export default Checkout