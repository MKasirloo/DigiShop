import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { ChevronDownIcon, ClockIcon, ShippingIcon, TomanThinIcon, TomanIcon } from "../assets/icons";

import addresses from "../data/addresses";
import cartProducts from "../data/cart";

export default function Shipping() {
  const fromatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  const shippingDays = [];

  for (let i = 1; i <= 11; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    const parts = fromatter.formatToParts(date);
    shippingDays.push({
      id: i,
      weekday: parts.find((p) => p.type === "weekday").value,
      day: parts.find((p) => p.type === "day").value,
      month: parts.find((p) => p.type === "month").value,
    });
  }

  const [addressIndex, setAddressIndex] = useState(0);
  const [shippingDateId, setShippingDateId] = useState(1);
  const [shippingTime, setShippingTime] = useState("morning");
  return (
    <>
      <Header />
      <Container>
        <div className="flex gap-4 *:p-4">
          <div className="flex-1 min-w-0 *:py-4 border border-gray-300 rounded-lg">
            <div className="flex border border-(--primary-color) rounded-lg">
              <div className="flex items-center px-2">
                <ShippingIcon />
              </div>
              <div className="flex-1 px-4 py-2">
                <div className="flex justify-between max-md:w-full text-(--primary-color)">
                  <div>ارسال به آدرس انتخاب شده</div>
                  <button className="flex gap-1 text-(--primary-color)">
                    <span>تغییر آدرس</span>
                    <ChevronDownIcon />
                  </button>
                </div>
                <div>{addresses[addressIndex].address}</div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <div>خلاصه سبد خرید</div>
              <div className="text-sm bg-gray-100 p-1 text-(--text-secondary) rounded-lg flex items-center">
                {cartProducts.length + " کالا"}
              </div>
            </div>
            <div className="flex gap-2 divide-x divide-gray-300 overflow-x-auto">
              {cartProducts.map((p) => {
                return (
                  <div
                    key={p.id}
                    className="flex flex-col justify-center gap-2 p-2"
                  >
                    <div className="w-16 h-16">
                      <img className="w-full" src={p.image_src} alt={p.name} />
                    </div>
                    <div className="flex justify-center text-(--text-secondary) text-xs">
                      {p.color.name + " " + p.quantity + "x"}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="flex gap-1 items-center text-(--text-primary)">
                <ClockIcon />
                <span>زمان ارسال</span>
                <div className="bg-linear-to-r from-yellow-500 to-yellow-300 p-1 rounded-tl-lg rounded-br-lg mr-2">
                  ارسال سریع دیجی شاپ!
                </div>
              </div>
              {/* Swiper THIS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
              <div className="flex gap-8 mt-2 overflow-auto p-2">
                {shippingDays.map((d) => {
                  return (
                    <div
                      key={d.id}
                      onClick={() => setShippingDateId(d.id)}
                      className={`w-20 h-28 py-2 flex shrink-0 flex-col justify-between items-center rounded-lg hover:cursor-pointer transition-all duration-100
                      ${
                        shippingDateId === d.id
                          ? "bg-(--primary-color) text-white! shadow-md-(--primary-color)"
                          : "bg-[#f8f8f8]"
                      }`}
                    >
                      <div>{d.weekday}</div>
                      <div className="text-2xl">{d.day}</div>
                      <div
                        className={`text-sm ${
                          shippingDateId !== d.id
                            ? "text-(--text-secondary)"
                            : ""
                        }`}
                      >
                        {d.month}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="my-4 px-2 border-y border-gray-300">
                <button
                  className="py-4 w-full flex justify-start gap-2 border-b border-gray-200"
                  onClick={() => setShippingTime("morning")}
                >
                  <div
                    className={`w-5 h-5 rounded-full ${
                      shippingTime === "morning"
                        ? "border-4 border-(--primary-color)"
                        : "border-2 border-neutral-800"
                    }`}
                  ></div>
                  <div className={`${
                      shippingTime === "morning"
                        ? "font-bold"
                        : "font-normal"
                    }`}>ساعت 9 تا 17</div>
                </button>
                <button
                  className="py-4 w-full flex justify-start gap-2 border-b border-gray-200"
                  onClick={() => setShippingTime("night")}
                >
                  <div className={`w-5 h-5 rounded-full ${
                      shippingTime === "night"
                        ? "border-4 border-(--primary-color) font-bold"
                        : "border-2 border-neutral-800"
                    }`}></div>
                  <div className={`${
                      shippingTime === "night"
                        ? "font-bold"
                        : "font-normal"
                    }`}>ساعت 17 تا 23</div>
                </button>
              </div>
            </div>
          </div>
          <div className="h-fit w-75 border border-gray-300 rounded-lg divide-y divide-gray-200">
            <div className="p-4 flex justify-between items-center text-(--text-secondary)">
              <div className="text-sm">
                قیمت کالا ها:
              </div>
              <div className="flex gap-0.5">
                <div className="text-sm">
                  30,699,000
                </div>
                <TomanThinIcon className="w-4 h-4 text-(--text-secondary)" />
              </div>
            </div>
            <div className="p-4 flex justify-between items-center text-(--text-secondary)">
              <div className="text-sm">
                هزینه ارسال:
              </div>
              <div className="flex gap-0.5">
                <div className="text-sm">
                  300,000
                </div>
                <TomanThinIcon className="w-4 h-4 text-(--text-secondary)" />
              </div>
            </div>
            <div className="p-4 flex justify-between items-center text-(--text-natural) font-bold">
              <div className="text-sm">
                هزینه نهایی:
              </div>
              <div className="flex gap-0.5">
                <div>
                  30,999,000
                </div>
                <TomanIcon className="w-4 h-4 text-(--text-secondary)" />
              </div>
            </div>
            <div className="px-2 py-4 flex justify-center">
              <button className="bg-(--primary-color) text-white w-full p-2 rounded-lg">
                اقدام به پرداخت
              </button>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}
