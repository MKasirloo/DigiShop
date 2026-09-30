import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import * as Icons from "../assets/icons";

import styles from "./Cart.module.css";

import cartProducts from "../data/cart";

export default function Cart() {
  const [products, setProducts] = useState(cartProducts);
  let total = 0, totalCount = 0;
  products.map((p) => {
    total += p.quantity * (p.price * (1 - p.discount_percent / 100));
    totalCount += p.quantity;
  });
  return (
    <>
      <Header />
      <Container>
        <div className={`${styles.cartContainer} flex gap-4`}>
          <div
            className={`${styles.cart} p-3 rounded-lg border border-gray-300 w-full`}
          >
            <div className="flex gap-2 items-center py-5">
              <p className="text-xl font-bold">سبد خرید</p>
              <p className="text-sm text-[var(--text-secondary)]">
                {totalCount + " کالا"}
              </p>
            </div>
            <ul className="list-none">
              {products.map((p) => {
                return (
                  <div key={p.id} className={`flex p-5 ${p.discount_percent > 0 ? "border border-[var(--offer-color)] rounded-lg my-4" : ''}`}>
                    <div className="w-[200px] h-[200px]">
                      <img src={p.image_src} alt={p.name} className="w-full" />
                    </div>
                    <div className="px-3 *:py-1">
                      <div>{p.name}</div>
                      <div className="flex gap-1 text-sm items-center">
                        <div className="text-[var(--text-secondary)] text-xs">
                          رنگ:
                        </div>
                        <div>
                          {p.color.name}
                        </div>
                        <div className="border-2 border-gray-300 w-5 h-5 rounded-full p-[1px]">
                          <div className="w-full h-full rounded-full" style={{ backgroundColor: p.color.code }}></div>
                        </div>
                      </div>
                      <div className="flex gap-1 text-sm items-center">
                        <div className="text-[var(--text-secondary)] text-xs">
                          برند:
                        </div>
                        <div>
                          {p.brand}
                        </div>
                      </div>
                      <div className="rounded-tl-lg rounded-br-lg bg-[var(--yellow)] text-[var(--text-primary)] font-bold px-2 w-fit text-sm">
                        ارسال 1 روزه!
                      </div>
                    </div>
                    <div className=" flex flex-col items-center mr-auto pl-2">
                      {p.discount_percent > 0 && (
                        <div className="flex flex-row-reverse gap-2 ">
                          <div className="text-[var(--text-secondary)] line-through">
                            {p.price.toLocaleString()}
                          </div>
                          <div className="flex items-center justify-center rounded bg-[var(--offer-color)] text-white text-sm px-[2px] py-[1px]">
                            {p.discount_percent + '%'}
                          </div>
                        </div>
                      )}
                      <div className="flex gap-2 items-center font-bold text-[var(--text-natural)] text-2xl">
                        {(p.price * (1 - p.discount_percent / 100)).toLocaleString()}
                        <Icons.TomanIcon />
                      </div>
                      <div className="flex flex-row-reverse text-[var(--text-primary)] rounded-lg border border-gray-300 *:p-1 divide-x divide-gray-300 mt-auto">
                        <button onClick={() => setProducts(products.map(product => 
                          product.id === p.id
                          ? {...product, quantity: p.quantity - 1}
                          : product
                        ).filter(product => product.quantity > 0)
                        )}>
                          {p.quantity > 1 ? (
                            <Icons.RemoveLineIcon />
                          ) : (
                            <Icons.TrashCanIcon />
                          )}
                        </button>
                        <div className="w-6 flex justify-center">
                          {p.quantity}
                        </div>
                        <button onClick={() => setProducts(products.map(product => 
                          product.id === p.id
                          ? {...product, quantity: p.quantity + 1}
                          : product
                        ).filter(product => product.quantity > 0)
                        )}>
                          <Icons.AddIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
          <div className="p-3 rounded-lg w-[300px] bg-[rgba(var(--primary-color),0.1)]">
            {total.toLocaleString()}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
