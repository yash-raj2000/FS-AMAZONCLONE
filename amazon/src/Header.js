import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginIcon from "@mui/icons-material/Login";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <>
      <div className="header">
        <div className="menuIcon">
          <MenuIcon />
        </div>

        <Link to="/">
          <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <div className="header_search">
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>

        <div className="header_nav">
          <div className="header_option">
            <span className="header_optionLineOne">Hello </span>
            <span className="header_optionLineTwo">sign in</span>
          </div>

          <Link to="/orders">
            <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>

          <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">Prime</span>
          </div>

          <div className="header_option-login">
            <span className="header_optionLineTwo">Sign In</span>
            <LoginIcon />
          </div>

          <Link to="/checkout">
            <div className="header_optionBasket">
              <ShoppingCartIcon />
              <span className="header_optionLineTwo header_basketCount">0</span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header1">
        <div className="header_search1">
          <input className="header_searchInput" type="text" />
          <SearchIcon className="header_searchIcon" />
        </div>
      </div>
    </>
  );
}

export default Header;
