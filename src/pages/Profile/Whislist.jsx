import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import * as Icons from "../../assets/icons";

import wishlistProducts from "../../data/wishlist";
import ProfileSidebar from "../../components/ProfileSidebar";

export default function Wishlist() {
  const [products, setProducts] = useState(wishlistProducts);

  const handleRemove = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <>
      <Header />
      <Container>
        <div className="flex max-sm:flex-wrap gap-4">
          <ProfileSidebar active={"wishlist"} className="max-sm:grow shrink-0" />
          <div className="p-3 rounded-lg border border-gray-300 w-full">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center py-5">
                <p className="text-xl font-bold">
                  لیست علاقه‌مندی‌ها
                </p>

                <p className="text-sm text-(--text-secondary)">
                  {products.length} کالا
                </p>
              </div>

              <button
                onClick={() => setProducts([])}
                className="flex gap-1 items-center text-xs text-(--text-secondary) hover:text-red-500 transition-colors duration-200"
              >
                حذف همه
                <Icons.TrashCanIcon className="w-5" />
              </button>
            </div>

            {products.length > 0 ? (
              <ul className="list-none">
                {products.map((p) => {
                  const discountedPrice =
                    p.price * (1 - p.discount_percent / 100);

                  return (
                    <li
                      key={p.id}
                      className={`flex flex-wrap sm:flex-nowrap gap-3 p-4 md:p-5 ${
                        p.discount_percent > 0
                          ? "border border-(--offer-color) rounded-lg my-4"
                          : "border-b border-gray-200"
                      }`}
                    >
                      <div className="w-20 h-20 md:w-25 md:h-25 lg:w-37.5 lg:h-37.5 shrink-0">
                        <img
                          src={p.image_src}
                          alt={p.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0 px-2 *:py-1">
                        <div className="text-sm md:text-base">
                          {p.name}
                        </div>


                        <button
                          onClick={() => handleRemove(p.id)}
                          className="flex gap-1 items-center text-xs text-(--text-secondary) hover:text-red-500 transition-colors"
                        >
                          <Icons.TrashCanIcon className="w-4" />
                          حذف از علاقه‌مندی‌ها
                        </button>
                      </div>
                      <div className="flex flex-col items-end justify-between gap-3 mr-auto">
                        <div>
                          {p.discount_percent > 0 && (
                            <div className="flex flex-row-reverse gap-2 items-center">
                              <div className="text-(--text-secondary) text-sm line-through">
                                {p.price.toLocaleString()}
                              </div>

                              <div className="flex items-center justify-center rounded bg-(--offer-color) text-white text-sm px-1">
                                {p.discount_percent + "%"}
                              </div>
                            </div>
                          )}

                          <div className="flex gap-2 items-center justify-end font-bold text-(--text-natural) md:text-2xl text-lg">
                            {discountedPrice.toLocaleString()}
                            <Icons.TomanIcon />
                          </div>
                        </div>

                        <button className="flex gap-2 items-center justify-center bg-(--primary-color) hover:opacity-90 transition-opacity text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap">
                          <Icons.AddIcon />
                          افزودن به سبد
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <div className="text-center text-(--text-secondary) py-16">
                لیست علاقه‌مندی‌های شما خالی است.
              </div>
            )}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}