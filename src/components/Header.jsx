import { useEffect, useState } from "react";
import * as Icons from "../assets/icons";
import categories from "../data/categories";
import "./Header.css";

export default function Header({ cartCount }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : '';
    return () => {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

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
                onChange={(e) => setSearchInput(e.target.value)}
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
                <button className="cart hover:shadow-md transition-shadow">
                  <Icons.CartIcon className="w-7 h-7" />
                  <span className="cart-count-badge">{cartCount}</span>
                </button>
              </a>
              <div className="w-px h-6 bg-gray-200 rounded-full"></div>
              <a href="/login" className="login login-button-container font-iransans font-medium! hover:shadow-md transition-shadow">
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
        <div className="max-md:hidden navbar-bottom mb-1">
          <ul className="navbar-bottom__list">
            <div className="group relative flex h-full items-center navbar-bottom__items">
              <button className="flex h-full items-center gap-2 text-sm font-semibold transition hover:text-(--primary-color)">
                <Icons.MenuIcon />
                دسته‌بندی محصولات
                <Icons.TriangleDownIcon />
              </button>

              <div className="invisible absolute right-0 top-full z-50 w-max min-w-[360px] translate-y-2 rounded-b-xl bg-white opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <ul className="grid grid-cols-2 gap-1 p-3">
                  {categories.map((category) => {
                    return (
                      <li key={category.id}>
                        <a className="flex items-center gap-3 rounded-lg px-3 py-4 text-sm transition hover:bg-violet-50 hover:*:text-(--primary-color)!">
                          <span className="shrink-0 rounded-lg bg-violet-100 p-2">
                            <category.icon />
                          </span>
                          <span className="text-(--text-primary) transition-colors">{category.name_fa}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <li
              className="navbar-bottom__first-divider"
              style={{ color: "rgb(115, 115, 115)" }}
            >
              |
            </li>
            <li className="navbar-bottom__items offer-item">
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
        <div className={`md:hidden ${!isMobileMenuOpen ? "translate-x-full" : ''} fixed flex flex-col justify-between top-0 bottom-0 right-0 mb-1 transition-transform bg-white w-3/5 z-100000000`}>
          <div className="bg-violet-50/70 flex justify-between items-center py-4 px-3 absolute w-full h-20">
            <img src="/images/logo.png" alt="Logo" className="sm:w-40 w-35" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="flex size-9 items-center justify-center rounded-xl bg-white text-xl text-gray-600 shadow-sm hover:text-(--primary-color)">
              <Icons.CrossIcon />
            </button>
          </div>
          <div className="flex-1 mt-20 overflow-auto">
            <ul className="divide-y divide-gray-300">
              <li className="overflow-hidden">
                <button onClick={() => setIsCategoriesMenuOpen(!isCategoriesMenuOpen)} className={`flex gap-2 py-3 px-2 justify-between w-full
                   ${isCategoriesMenuOpen ? "text-(--primary-color)!" : ''}
                `}>
                  <div className="flex gap-1">
                    <Icons.MenuIcon />
                    دسته بندی محصولات
                  </div>
                  <Icons.ChevronDownIcon className={isCategoriesMenuOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>
                <div className={`w-full ${isCategoriesMenuOpen ? "h-fit" : "h-0"} transition-all`}>
                  <ul className="divide-y divide-gray-300">
                    {categories.map((category) => {
                      return (
                        <li key={category.id}>
                          <a className="flex items-center gap-3 rounded-lg px-3 py-4 text-sm transition hover:bg-violet-50 hover:*:text-(--primary-color)!">
                            <span className="shrink-0 rounded-lg bg-violet-100 p-2">
                              <category.icon />
                            </span>
                            <span className="text-(--text-primary) transition-colors">{category.name_fa}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
              <li className="flex gap-2! justify-start! px-2 py-3 hover:text-red-500! hover:after:bg-red-500!">
                <Icons.SaleIcon />
                فروش ویژه!
              </li>
              <li className="flex gap-2! justify-start! px-2 py-3">
                <Icons.RefreshIcon />
                لوازم دست دوم
              </li>
              <li className="flex gap-2! justify-start! px-2 py-3">
                <Icons.OrganizationIcon />
                خرید سازمانی
              </li>
              <li className="flex gap-2! justify-start! px-2 py-3">
                <Icons.PhoneIcon />
                ارتباط با ما
              </li>
              <li className="flex gap-2! justify-start! px-2 py-3">
                <Icons.InfoIcon />
                درباره ما
              </li>
            </ul>
          </div>
          <div className="px-3 py-2 w-full shrink-0">
            <a href="/profile/dashboard" className="bg-(--primary-color) text-white w-full py-2 flex justify-center items-center rounded-lg">
              ورود به حساب کاربری
            </a>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-gray-900/70 z-10000000" onClick={() => setIsMobileMenuOpen(false)}></div>
        )}

        <div className="md:hidden py-5 px-3 fixed bottom-0 w-full z-10">
          <div className="bottom-navbar flex backdrop-blur-2xl rounded-full px-1.5 py-2 *:px-2 *:py-2 border border-white/50">
            <a href="#" className="bottom-navbar__items text-(--primary-color) bg-gray-100/50 px-2 py-2 rounded-full backdrop-blur-2xl">
              <Icons.HomeIcon />
              <span>خانه</span>
            </a>
            <a href="#" className="bottom-navbar__items">
              <Icons.CategoriesIcon />
              <span>دسته بندی</span>
            </a>
            <a href="/cart" className="bottom-navbar__items">
              <Icons.CartIcon />
              <span>سبد خرید</span>
            </a>
            <a href="/login" className="bottom-navbar__items">
              <Icons.AccountIcon />
              <span>حساب کاربری</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
