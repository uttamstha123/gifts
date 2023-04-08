import React from "react";
import "./header.css";
import logo from '../../../../assests/home/images/logo.png'
const Header = () => {
  const totalQty = 0;
  const totalPrice = 0;

  return (
    <nav className="header">
      {/* Small Screen show sidebar menu */}
      <div className="header__sideMenu">
        <ul className="header__sideMenuNav">
          <li className="header__sideMenuItem header__sideMenuClose">
            <span className="header__sideMenuCloseIcon">
              <i className="fa-solid fa-xmark"></i>
            </span>
          </li>
          <li className="header__sideMenuItem">
            <a href="/">
              Home
              <span className="header__sideMenuArrowIcon">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </a>
          </li>
          <li className="header__sideMenuItem">
            <a href="/shop">Shop</a>
          </li>
          <li className="header__sideMenuItem">
            <a href="#">
              Pages
              <span className="header__sideMenuArrowIcon">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </a>
          </li>
          <li className="header__sideMenuItem">
            <a href="#">Out Story</a>
          </li>
          <li className="header__sideMenuItem">
            <a href="#">
              Blog
              <span className="header__sideMenuArrowIcon">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
            </a>
          </li>
          <li className="header__sideMenuItem">
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      <div className="header__top">
        <div className="header__topLeft">
          <ul className="header__topLeftLinks">
            <li className="location">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              <span className="header__secondaryText">
                46 Kingston Ave, Queensbury
              </span>
            </li>
            <li className="language">
              <span>English</span>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </li>
          </ul>
        </div>
        <div className="header__topRight">
          <ul>
            <li className="header__topRightLink">
              <a href="#">Sign In / Register</a>
            </li>
            <li className="header__topRightLink">
              <a href="#">About Us</a>
            </li>
            <li className="header__topRightLink">
              <a href="#">Track Orders</a>
            </li>
            <li className="header__topRightLink">
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="header__solidDivider"></div>
      <div className="header__middle">
        <div className="header__middleLogo">
          <a href="/" className="header__navLogo">
            {/* <h1>
              Gif<span className="header__navLogoBlack">ts</span>
            </h1> */}
            <img src={logo} alt="Logo"/>
          </a>
        </div>
        {/* Small Screen Show Menu Toggle */}
        <div className="header__middleMenu">
          <span className="header__middleMenuIcon">
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
        {/* Large Screen Show Banner */}
        <div className="header__middleBanner">
          <div className="header__middleBannerLogo">
            <span>
              <i className="fa-solid fa-truck-fast"></i>
            </span>
          </div>
          <div className="header__middleBannerDetails">
            <p className="header__secondaryText">Free standard shipping</p>
            <p className="header__primaryText">on all orders over ₹999</p>
          </div>
        </div>
        <div className="header__dottedVerticalDivider"></div>
        <div className="header__middleBanner">
          <div className="header__middleBannerLogo">
            <span>
              <i className="fa-solid fa-headset"></i>
            </span>
          </div>
          <div className="header__middleBannerDetails">
            <p className="header__secondaryText">support@example.com</p>
            <p className="header__primaryText">012 - 345 - 6789</p>
          </div>
        </div>
        <div className="header__dottedVerticalDivider"></div>
        <div className="header__middleBanner">
          <div className="header__middleBannerLogo">
            <span>
              <i className="fa-solid fa-cart-shopping"></i>
            </span>
          </div>
          <div className="header__middleBannerDetails">
            <p className="header__tertiaryText">Cart: {totalQty} items</p>
            <p className="header__primaryText">₹{totalPrice}</p>
          </div>
        </div>
      </div>
      <div className="header__dottedHorizontalDivider"></div>
      <div className="header__bottom">
        <div className="header__bottomNavbarContainer">
          <ul className="header__bottomNavbarItems">
            <li className="header__bottomNavItem header__bottomLinkActive">
              <a href="/">Home</a>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </li>
            <li className="header__bottomNavItem">
              <a href="/shop">Shop</a>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </li>
            <li className="header__bottomNavItem">
              <a href="#">Pages</a>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </li>
            <li className="header__bottomNavItem">
              <a href="#">Our Story</a>
            </li>
            <li className="header__bottomNavItem">
              <a href="#">Blog</a>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </li>
            <li className="header__bottomNavItem">
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="header__bottomSearch">
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input type="text" placeholder="Search..." />
          </div>
        </div>
      </div>
    </nav>
  );
};

// window.addEventListener("load", () => {
//   const menu = document.querySelector(".header__middleMenu");
//   const sidebar = document.querySelector(".header__sideMenu");
//   const closeMenu = document.querySelector(".header__sideMenuCloseIcon");

//   function swipeRightSidebar() {
//     sidebar.classList.toggle("show");
//   }

//   menu.addEventListener("click", swipeRightSidebar);

//   closeMenu.addEventListener("click", swipeRightSidebar);
// });
export default Header;
