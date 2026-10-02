import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import * as Icons from "../assets/icons";

import cartProducts from "../data/cart";

export default function Cart() {
  const [products, setProducts] = useState(cartProducts);
  let total = 0, totalCount = 0, rawTotal = 0;
  products.map((p) => {
    total += p.quantity * (p.price * (1 - p.discount_percent / 100));
    rawTotal += p.quantity * p.price;
    totalCount += p.quantity;
  });
  return (
    <>
      <Header />
      <Container>
        <div className="flex max-lg:flex-wrap gap-4 justify-center">
          <div className="flex-1 p-3 rounded-lg border border-gray-300 lg:min-w-150">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center py-5">
                <p className="text-xl font-bold">سبد خرید</p>
                <p className="text-sm text-(--text-secondary)">
                  {totalCount + " کالا"}
                </p>
              </div>
              <div className="flex gap-1 items-center text-xs text-(--text-secondary) hover:text-red-500 hover:cursor-pointer transition-colors duration-200" onClick={() => setProducts([])}>
                حذف همه
                <Icons.TrashCanIcon className="w-5" />
              </div>
            </div>
            <ul className="list-none">
              {products.map((p) => {
                return (
                  <div key={p.id} className={`flex p-5 ${p.discount_percent > 0 ? "border border-(--offer-color) rounded-lg my-4" : ''}`}>
                    <div className="w-20 h-20 md:w-25 md:h-25 lg:w-37.5 lg:h-37.5">
                      <img src={p.image_src} alt={p.name} className="w-full" />
                    </div>
                    <div className="flex-1 px-3 *:py-1">
                      <div className="text-sm md:text-base">
                        {p.name}
                      </div>
                      <div className="flex gap-1 text-sm items-center">
                        <div className="text-(--text-secondary) text-xs">
                          رنگ:
                        </div>
                        <div>
                          {p.color.name}
                        </div>
                        <div className="border-2 border-gray-300 w-5 h-5 rounded-full p-px">
                          <div className="w-full h-full rounded-full" style={{ backgroundColor: p.color.code }}></div>
                        </div>
                      </div>
                      <div className="flex gap-1 text-sm items-center">
                        <div className="text-(--text-secondary) text-xs">
                          برند:
                        </div>
                        <div>
                          {p.brand}
                        </div>
                      </div>
                      <div className="rounded-tl-lg rounded-br-lg bg-(--yellow) text-(--text-primary) font-bold px-2 w-fit md:text-sm text-xs">
                        ارسال 1 روزه!
                      </div>
                    </div>
                    <div className=" flex flex-col items-center mr-auto pl-2">
                      {p.discount_percent > 0 && (
                        <div className="flex flex-row-reverse gap-2 items-center">
                          <div className="text-(--text-secondary) text-sm line-through">
                            {p.price.toLocaleString()}
                          </div>
                          <div className="flex items-center justify-center rounded bg-(--offer-color) text-white text-sm px-1">
                            {p.discount_percent + '%'}
                          </div>
                        </div>
                      )}
                      <div className="flex gap-2 items-center font-bold text-(--text-natural) md:text-2xl text-lg">
                        {(p.price * (1 - p.discount_percent / 100)).toLocaleString()}
                        <Icons.TomanIcon />
                      </div>
                      <div className="flex flex-row-reverse text-(--text-primary) rounded-lg border border-gray-300 *:p-1 divide-x divide-gray-300 mt-auto">
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
          <div className="py-6 *:px-4 *:py-2 h-fit rounded-lg w-100 max-lg:w-full bg-slate-50 border border-gray-300 sticky top-20">
            <div className="text-lg">
              جزئیات پرداخت
            </div>
            <div className="flex justify-between items-center text-sm">
              <div>
                مجموع قیمت کالا ها:
              </div>
              <div className="flex gap-1 text-(--text-gray)">
                <div className="">
                  {rawTotal.toLocaleString()}
                </div>
                <div className="w-5">
                  <Icons.TomanThinIcon className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-green-900 bg-emerald-100 text-sm">
              <div className="flex items-center">
                <Icons.CelebrateIcon />
                سود شما از این خرید:
              </div>
              <div className="flex gap-1">
                <div className="">
                  {(rawTotal - total).toLocaleString()}
                </div>
                <div className="w-5">
                  <Icons.TomanThinIcon className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center text-lg">
              <div className="flex items-center">
                مجموع سبد خرید:
              </div>
              <div className="flex gap-1">
                <div className="text-(--text-natural) font-bold">
                  {total.toLocaleString()}
                </div>
                <div className="w-5">
                  <Icons.TomanIcon className="w-full h-full" />
                </div>
              </div>
            </div>
            <div className="py-4!">
              <button className="bg-(--primary-color) text-lg p-2 text-white rounded-lg w-full ">
                <a href="/shipping" className="text-white">
                  ثبت سفارش
                </a>
              </button>
            </div>
            <div className="flex gap-1 text-xs text-(--text-secondary)">
              <Icons.InfoIcon />
              <p className="text-(--text-secondary)">
                مبلغ سفارش هنوز پرداخت نشده و‌ در صورت اتمام موجودی، کالاها از سبد حذف می‌شوند.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
