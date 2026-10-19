
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import {
  ChevronDownIcon,
  ClockIcon,
  ShippingIcon,
  TomanThinIcon,
  TomanIcon,
  CheckIcon,
  ChevronRightIcon,
  CrossIcon,
} from "../assets/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import addresses from "../data/addresses";
import cartProducts from "../data/cart";

export default function Shipping() {
  const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const shippingDays = [];

  for (let i = 1; i <= 10; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);

    const parts = formatter.formatToParts(date);

    shippingDays.push({
      id: i,
      weekday: parts.find((p) => p.type === "weekday").value,
      day: parts.find((p) => p.type === "day").value,
      month: parts.find((p) => p.type === "month").value,
    });
  }

  const [addressIndex, setAddressIndex] = useState(0);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [shippingDateId, setShippingDateId] = useState(1);
  const [shippingTime, setShippingTime] = useState("morning");

  const openAddressModal = () => {
    setAddressIndex(addressIndex);
    setIsAddressModalOpen(true);
  };

  const closeAddressModal = () => {
    setIsAddressModalOpen(false);
  };

  return (
    <>
      <Header />

      <Container>
        <div className="mb-4 rounded-lg border border-gray-300 p-4">
          <div className="relative flex justify-center p-2">
            <a
              href="/cart"
              className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-1 max-lg:text-sm"
            >
              <ChevronRightIcon />
              سبد خرید
            </a>

            <img
              src="/images/logo.png"
              alt="Digishop logo"
              className="h-8 max-md:invisible"
            />
          </div>

          <div className="flex items-center justify-center p-4">
            <div className="relative">
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-(--primary-color) text-white">
                <CheckIcon className="h-4 w-4" />
              </div>
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 text-center text-xs text-nowrap text-(--text-secondary)">
                سبد خرید
              </div>
            </div>

            <div className="h-0.5 w-10 bg-(--primary-color)" />

            <div className="relative">
              <div className="h-5 w-5 rounded-full border-3 border-(--primary-color)" />
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 text-center text-xs text-nowrap text-(--text-secondary)">
                ارسال
              </div>
            </div>

            <div className="h-0.5 w-10 bg-(--primary-color)" />

            <div className="relative">
              <div className="h-5 w-5 rounded-full border-3 border-(--primary-color)" />
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2 text-center text-xs text-nowrap text-(--text-secondary)">
                پرداخت
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 *:p-4 max-md:flex-wrap">
          <div className="min-w-0 flex-1 overflow-auto rounded-lg border border-gray-300 *:py-4">
            <div className="rounded-2xl border border-violet-200 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-(--primary-color)">
                  <ShippingIcon />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="font-bold text-gray-800">
                      آدرس تحویل سفارش
                    </div>

                    <button
                      type="button"
                      onClick={openAddressModal}
                      className="flex shrink-0 items-center gap-1 rounded-lg px-2 py-1 text-sm font-semibold text-(--primary-color) transition hover:bg-violet-50"
                    >
                      تغییر آدرس
                      <ChevronRightIcon className="rotate-180" />
                    </button>
                  </div>
                  <div>
                    <p className="pt-4 text-2xl font-bold text-(--text-natural)">
                      {addresses[addressIndex].name}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {addresses[addressIndex].address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div>خلاصه سبد خرید</div>

              <div className="flex items-center rounded-lg bg-gray-100 p-1 text-sm text-(--text-secondary)">
                {cartProducts.length + " کالا"}
              </div>
            </div>

            <div className="flex gap-2 divide-x divide-gray-300 overflow-x-auto">
              {cartProducts.map((p) => (
                <div
                  key={p.id}
                  className="flex flex-col justify-center gap-2 p-2"
                >
                  <div className="h-16 w-16">
                    <img
                      className="w-full"
                      src={p.image_src}
                      alt={p.name}
                    />
                  </div>

                  <div className="flex justify-center text-xs text-(--text-secondary)">
                    {p.color.name + " " + p.quantity + "x"}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-1 text-(--text-primary)">
                <ClockIcon />
                <span>زمان ارسال</span>

                <div className="mr-2 rounded-tl-lg rounded-br-lg bg-linear-to-r from-yellow-500 to-yellow-300 p-1">
                  ارسال سریع دیجی شاپ!
                </div>
              </div>

              <div className="mt-2 p-2">
                <Swiper
                  modules={[Navigation, FreeMode]}
                  navigation
                  freeMode
                  slidesPerView="auto"
                  spaceBetween={32}
                >
                  {shippingDays.map((d) => (
                    <SwiperSlide key={d.id} className="w-fit!">
                      <button
                        type="button"
                        onClick={() => setShippingDateId(d.id)}
                        className={`flex h-28 w-20 shrink-0 flex-col items-center justify-between rounded-lg py-2 transition-all duration-100 hover:cursor-pointer ${
                          shippingDateId === d.id
                            ? "bg-(--primary-color) text-white shadow-md"
                            : "bg-[#f8f8f8]"
                        }`}
                      >
                        <span>{d.weekday}</span>
                        <span className="text-2xl">{d.day}</span>
                        <span
                          className={`text-sm ${
                            shippingDateId !== d.id
                              ? "text-(--text-secondary)"
                              : ""
                          }`}
                        >
                          {d.month}
                        </span>
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="my-4 border-y border-gray-300 px-2">
                <button
                  type="button"
                  className="flex w-full justify-start gap-2 border-b border-gray-200 py-4"
                  onClick={() => setShippingTime("morning")}
                >
                  <div
                    className={`h-5 w-5 rounded-full ${
                      shippingTime === "morning"
                        ? "border-4 border-(--primary-color)"
                        : "border-2 border-neutral-800"
                    }`}
                  />

                  <div
                    className={
                      shippingTime === "morning"
                        ? "font-bold"
                        : "font-normal"
                    }
                  >
                    ساعت 9 تا 17
                  </div>
                </button>

                <button
                  type="button"
                  className="flex w-full justify-start gap-2 border-b border-gray-200 py-4"
                  onClick={() => setShippingTime("night")}
                >
                  <div
                    className={`h-5 w-5 rounded-full ${
                      shippingTime === "night"
                        ? "border-4 border-(--primary-color)"
                        : "border-2 border-neutral-800"
                    }`}
                  />

                  <div
                    className={
                      shippingTime === "night"
                        ? "font-bold"
                        : "font-normal"
                    }
                  >
                    ساعت 17 تا 23
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="sticky top-20 h-fit w-full divide-y divide-gray-200 rounded-lg border border-gray-300 md:w-75">
            <div className="flex items-center justify-between p-4 text-(--text-secondary)">
              <div className="text-sm">هزینه کالا ها:</div>

              <div className="flex gap-0.5">
                <div className="text-sm">30,699,000</div>
                <TomanThinIcon className="h-4 w-4 text-(--text-secondary)" />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 text-(--text-secondary)">
              <div className="text-sm">هزینه ارسال:</div>

              <div className="flex gap-0.5">
                <div className="text-sm">300,000</div>
                <TomanThinIcon className="h-4 w-4 text-(--text-secondary)" />
              </div>
            </div>

            <div className="flex items-center justify-between p-4 font-bold text-(--text-natural)">
              <div className="text-sm">هزینه نهایی:</div>

              <div className="flex gap-0.5">
                <div>30,999,000</div>
                <TomanIcon className="h-4 w-4 text-(--text-secondary)" />
              </div>
            </div>

            <div className="flex justify-center px-2 py-4">
              <a href="/payment" className="w-full">
                <button className="w-full rounded-lg bg-(--primary-color) p-2 text-white">
                  اقدام به پرداخت
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>

      {isAddressModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
          onClick={closeAddressModal}
        >
          <div
            dir="rtl"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-gray-100 p-5">
              <div>
                <h2
                  id="address-modal-title"
                  className="text-lg font-black text-gray-800"
                >
                  انتخاب آدرس ارسال
                </h2>

                <p className="mt-1 text-xs text-gray-500">
                  سفارش به کدام آدرس ارسال شود؟
                </p>
              </div>

              <button
                type="button"
                onClick={closeAddressModal}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-100 text-xl text-red-400 transition hover:bg-red-200"
              >
                <CrossIcon />
              </button>
            </div>

            <div className="max-h-[55vh] space-y-3 overflow-y-auto p-5">
              {addresses.length > 0 ? (
                addresses.map((address, index) => (
                  <button
                    key={address.id ?? index}
                    type="button"
                    onClick={() => setAddressIndex(index)}
                    className={`flex w-full items-start gap-3 rounded-xl border p-4 text-right transition ${
                      addressIndex === index
                        ? "border-(--primary-color) bg-violet-50/70 ring-1 ring-(--primary-color)"
                        : "border-gray-200 hover:border-violet-200 hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        addressIndex === index
                          ? "border-(--primary-color) bg-(--primary-color) text-white"
                          : "border-gray-300"
                      }`}
                    >
                      {addressIndex === index && <CheckIcon />}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="mb-2 flex flex-wrap items-center gap-2 font-bold text-gray-800">
                        {address.name}

                        {addressIndex === index && (
                          <span className="rounded-md bg-violet-100 px-2 py-1 text-[10px] font-medium text-(--primary-color)">
                            انتخاب‌شده
                          </span>
                        )}
                      </span>

                      <span className="block text-sm leading-7 text-gray-600">
                        {address.address}
                      </span>
                    </span>
                  </button>
                ))
              ) : (
                <p className="py-8 text-center text-sm text-gray-500">
                  هنوز آدرسی ثبت نکرده‌ای.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
