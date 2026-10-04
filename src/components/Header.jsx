import { useState } from "react";
import * as Icons from "../assets/icons";
import "./Header.css";

export default function Header({ cartCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  function onMenuClick() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function onSearchInputChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <header>
      <div className="header-fixer"></div>
      <nav className="navbar">
        <div className="navbar-top">
          <div className="navbar-top-right">
            <a href="/" className="logo">
              <img src="images/logo.png" />
              <img src="images/logo-mini.png" />
            </a>
            <div
              className="search-box"
              >
              <Icons.SearchIcon />
              <input
                id="search-input"
                value={searchInput}
                type="text"
                placeholder="جستجو در محصولات..."
                onChange={onSearchInputChange}
              />
            </div>
          </div>
          <div className="navbar-top-left">
            <div className="login-and-cart-container">
              <button className="cart">
                <a href="/cart">
                  <Icons.CartIcon />
                  <span className="cart-count-badge">{cartCount}</span>
                </a>
              </button>
              <span className="login-and-cart-container__divider">|</span>
              <button className="login">
                <a href="/login" className="login-button-container font-normal">
                  <Icons.LoginIcon />
                  <span>ورود</span>
                  <span style={{ fontWeight: 400 }}>|</span>
                  <span>ثبت نام</span>
                </a>
              </button>
            </div>
            <button className="mobile-menu__btn" onClick={onMenuClick}>
              <Icons.MenuIcon />
            </button>
            <div
              className={`mible-menu__overlay ${isMobileMenuOpen && "open"}`}
              onClick={onMenuClick}
            ></div>
          </div>
        </div>
        <div className={`navbar-bottom ${isMobileMenuOpen && "open"}`}>
          <ul className="navbar-bottom__list">
            <li className="navbar-bottom__items group">
              <div className="flex gap-1 items-center relative">
                <Icons.MenuIcon />
                دسته بندی محصولات
              </div>
              <div className="invisible absolute bg-gray-100 text-(--text-primary) w-50 h-fit top-full right-0 z-10 opacity-0 transition-opacity duration-200 rounded-b-lg border border-gray-300
                group-hover:opacity-100
                group-hover:visible
              ">
                <ul className="*:hover:text-(--primary-color) *:hover:bg-white *:flex *:gap-1 *:items-center *:py-3 *:px-2">
                  <li >
                    <Icons.MobileIcon />
                    موبایل
                  </li>
                  <li>
                    <Icons.TabletIcon />
                    تبلت
                  </li>
                  <li>
                    <Icons.ControllerIcon />
                    کنسول بازی
                  </li>
                  <li>
                    <Icons.LaptopIcon />
                    لپ تاپ
                  </li>
                  <li>
                    <Icons.WatchIcon />
                    ساعت هوشمند
                  </li>
                  <li>
                    <Icons.AirpodsIcon />
                    هندزفری
                  </li>
                  <li>
                    <Icons.MobileCoverIcon />
                    قاب و کاور گوشی
                  </li>
                  <li>
                    <Icons.SIMIcon />
                    سیمکارت
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="navbar-bottom__first-divider"
              style={{ color: "rgb(115, 115, 115)" }}
            >
              |
            </li>
            <li className="navbar-bottom__items">
              <Icons.SaleIcon />
              فروش ویژه!
            </li>
            <li className="navbar-bottom__items">
              <Icons.RefreshIcon />
              لوازم دست دوم
            </li>
            <li className="navbar-bottom__items">
              <Icons.OrganizationIcon />
              خرید سازمانی
            </li>
            <li className="navbar-bottom__items">
              <Icons.PhoneIcon />
              ارتباط با ما
            </li>
            <li className="navbar-bottom__items">
              <Icons.InfoIcon />
              درباره ما
            </li>
          </ul>
        </div>
        <div className="bottom-navbar">
          <a href="#" className="bottom-navbar__items">
            <Icons.HomeIcon />
            <p>خانه</p>
          </a>
          <a href="#" className="bottom-navbar__items">
            <Icons.CategoriesIcon />
            <p>دسته بندی</p>
          </a>
          <a href="#" className="bottom-navbar__items">
            <Icons.CartIcon />
            <p>سبد خرید</p>
          </a>
          <a href="./login.html" className="bottom-navbar__items">
            <Icons.AccountIcon />
            <p>حساب کاربری</p>
          </a>
        </div>
      </nav>
    </header>
  );
}
