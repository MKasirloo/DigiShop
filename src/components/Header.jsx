import { useState } from "react";
import * as Icons from "../assets/icons";
import categories from "../data/categories";
import "./Header.css";

export default function Header({ cartCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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
              <img src="/images/logo.png" />
              <img src="/images/logo-mini.png" />
            </a>
            <div className="search-box relative text-gray-500! hover:bg-gray-200! focus-within:bg-gray-200! transition-colors">
              <Icons.SearchIcon />
              <input
                id="search-input"
                value={searchInput}
                type="text"
                placeholder="جستجو در محصولات..."
                onChange={onSearchInputChange}
                className="placeholder:text-gray-500"
              />
              {searchInput !== '' && (
                <button onClick={() => setSearchInput('')} className="absolute left-2 rounded-md bg-red-200 text-red-500"><Icons.CrossIcon /></button>
              )}
            </div>
          </div>
          <div className="navbar-top-left">
            <div className="login-and-cart-container whitespace-nowrap max-md:hidden!">
              <a href="/cart">
                <button className="cart">
                  <Icons.CartIcon className="w-7 h-7" />
                  <span className="cart-count-badge">{cartCount}</span>
                </button>
              </a>
              <div className="w-px h-6 bg-gray-200 rounded-full"></div>
              <a href="/login" className="login login-button-container font-bold">
                <Icons.LoginIcon />
                <span>ورود</span>
                <span style={{ fontWeight: 400 }}>|</span>
                <span>ثبت نام</span>
              </a>
            </div>
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden flex size-9 items-center justify-center rounded-lg bg-white text-xl text-gray-600 shadow-md hover:text-(--primary-color)">
              <Icons.MenuIcon />
            </button>
          </div>
        </div>
        {/* Desktop navbar */}
        <div className={`max-md:hidden navbar-bottom ${isMobileMenuOpen && "open"}`}>
          <ul className="navbar-bottom__list">
            <li className="navbar-bottom__items group">
              <div className="flex gap-1 items-center relative">
                <Icons.MenuIcon />
                دسته بندی محصولات
                <Icons.TriangleDownIcon />
              </div>
              <div
                className="invisible absolute text-(--text-primary) bg-white top-full right-0 z-10 opacity-0 transition-opacity rounded-b-lg
                group-hover:opacity-100
                group-hover:visible
              "
              >
                <ul className="grid grid-cols-2 list-none">
                  {categories.map(c => (
                    <li className="flex gap-2 items-center py-4 px-5">
                      <span className="block w-fit rounded-md p-1 bg-violet-100 text-violet-500">
                        {<c.icon />}
                      </span>
                      {c.name_fa}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li
              className="navbar-bottom__first-divider"
              style={{ color: "rgb(115, 115, 115)" }}
            >
              |
            </li>
            <li className="navbar-bottom__items hover:text-red-500! hover:after:bg-red-500!">
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
        
        {/* Mobile sidebar */}
        <div className={`md:hidden ${!isMobileMenuOpen ? "translate-x-full" : ''} fixed flex flex-col justify-between top-0 bottom-0 right-0 transition-transform bg-white w-3/5 z-100000000`}>
          <div>
            <div className="bg-violet-50/70 flex justify-between items-center py-4 px-3">
              <img src="/images/logo.png" alt="Logo" className="sm:w-40 w-35" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="flex size-9 items-center justify-center rounded-xl bg-white text-xl text-gray-600 shadow-sm hover:text-(--primary-color)">
                <Icons.CrossIcon />
              </button>
            </div>
            <ul className="divide-y divide-gray-300">
              <li className="flex gap-2! justify-start! font-light px-2 py-3 hover:text-red-500! hover:after:bg-red-500!">
                <Icons.SaleIcon />
                فروش ویژه!
              </li>
              <li className="flex gap-2! justify-start! font-light px-2 py-3">
                <Icons.RefreshIcon />
                لوازم دست دوم
              </li>
              <li className="flex gap-2! justify-start! font-light px-2 py-3">
                <Icons.OrganizationIcon />
                خرید سازمانی
              </li>
              <li className="flex gap-2! justify-start! font-light px-2 py-3">
                <Icons.PhoneIcon />
                ارتباط با ما
              </li>
              <li className="flex gap-2! justify-start! font-light px-2 py-3">
                <Icons.InfoIcon />
                درباره ما
              </li>
            </ul>
          </div>
          <div className="px-3 py-2 w-full">
            <a href="/profile/dashboard" className="bg-(--primary-color) text-white w-full py-2 flex justify-center items-center rounded-lg">
              ورود به حساب کاربری
            </a>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900/70 z-10000000" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        <div className="bottom-navbar">
          <a href="#" className="bottom-navbar__items">
            <Icons.HomeIcon />
            <p>خانه</p>
          </a>
          <a href="#" className="bottom-navbar__items">
            <Icons.CategoriesIcon />
            <p>دسته بندی</p>
          </a>
          <a href="/cart" className="bottom-navbar__items">
            <Icons.CartIcon />
            <p>سبد خرید</p>
          </a>
          <a href="/login" className="bottom-navbar__items">
            <Icons.AccountIcon />
            <p>حساب کاربری</p>
          </a>
        </div>
      </nav>
    </header>
  );
}
