import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            id="1"
            title="The lean startup"
            price={249}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={4}
          />

          <Product
            id="2"
            title="Samsung 5th Generation Smart Watch"
            price={12499}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={5}
          />
        </div>

        <div className="home_row">
          <Product
            id="4"
            title="Amazon Echo (3rd generation)"
            price={249}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={4}
          />
          <Product
            id="2"
            title="Samsung 5th Generation Smart Watch"
            price={12499}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="New Apple iPad Pro (12.9-inch)"
            price={72249}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="9"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={149999}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
