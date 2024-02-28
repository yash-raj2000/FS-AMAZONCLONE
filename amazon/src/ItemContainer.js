import React from "react";
import "./ItemContainer.css";

function ItemContainer() {
  return (
    <div>
      <div class="container-boxes">
        <div class="box">
          <h4>Up to 70% off | Clearance store</h4>
          <img src="img1.jpg" className="img" alt="" />
          <a href="javascript" className="a5">
            See more
          </a>
        </div>
        <div class="box">
          <h4>Starting ₹99 | All your home improvement...</h4>
          <div class="boxes">
            <div class="items">
              <img src="img2.jpg" alt="" className="img" />
              <a href="javascript">T-Shirts</a>
            </div>
            <div class="items">
              <img src="img3.jpg" alt="" className="img" />
              <a href="javascript">Footwear</a>
            </div>
          </div>
          <div class="boxes">
            <div class="items">
              <img src="img4.jpg" alt="" className="img" />
              <a href="javascript">Watches</a>
            </div>
            <div class="items">
              <img src="img5.jpg" alt="" className="img" />
              <a href="javascript" className="a5">
                Bags & Luggage
              </a>
            </div>
          </div>
        </div>

        <div class="box">
          <h4>Revamp your home in style</h4>
          <div class="boxes">
            <div class="items">
              <img src="img6.jpg" alt="" className="img" />
              <a href="javascript">Bedsheets</a>
            </div>
            <div class="items">
              <img src="img7.jpg" alt="" className="img" />
              <a href="javascript">Home Decoration</a>
            </div>
          </div>
          <div class="boxes">
            <div class="items">
              <img src="img8.jpg" alt="" className="img" />
              <a href="javascript">Home storage</a>
            </div>
            <div class="items">
              <img src="img9.jpg" alt="" className="img" />
              <a href="javascript" className="a4">
                Lighting Solutions
              </a>
            </div>
          </div>
        </div>
        <div class="box">
          <h4>Bluetooth Calling Smartwatch starts...</h4>
          <img src="img10.jpg" alt="" />
          <a href="javascript" className="a5">
            See more
          </a>
        </div>
      </div>
    </div>
  );
}

export default ItemContainer;
