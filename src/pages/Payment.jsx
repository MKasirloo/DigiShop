
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import {
  CardClockIcon,
  CardIcon,
  CheckIcon,
  ChevronRightIcon,
  DiscountIcon,
  InfoIcon,
  TomanIcon,
  TomanThinIcon,
  WalletIcon,
} from "../assets/icons";

export default function Payment() {
  const [discountCode, setDiscountCode] = useState("");
  const [hasDiscount, setHasDiscount] = useState(false);
  const [discountFailed, setDiscountFailed] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("online");

  const productsPrice = 30699000;
  const shippingPrice = 400000;
  const discountAmount = hasDiscount ? 1000000 : 0;
  const totalPrice = productsPrice + shippingPrice - discountAmount;

  function handleDiscountCode(e) {
    e?.preventDefault();

    if (discountCode.trim().toLowerCase() === "test") {
      setHasDiscount(true);
      setDiscountFailed(false);
    } else {
      setHasDiscount(false);
      setDiscountFailed(true);
    }
  }

  const paymentMethods = [
    {
      id: "online",
      label: "پرداخت اینترنتی",
      description: "پرداخت از طریق درگاه بانکی",
      icon: <CardIcon />,
    },
    {
      id: "credit",
      label: "پرداخت اعتباری",
      description: "پرداخت با اعتبار حساب",
      icon: <CardClockIcon />,
    },
    {
      id: "wallet",
      label: "پرداخت با کیف پول",
      description: "استفاده از موجودی کیف پول",
      icon: <WalletIcon />,
    },
  ];

  return (
    <>
      <Header />

      <Container>
        <div className="rounded-2xl border border-gray-300 bg-white p-4">
          <div className="relative flex items-center justify-center p-2">
            <a
              href="/shipping"
              className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-lg px-2 py-1 text-sm text-(--text-secondary) transition hover:bg-gray-100 hover:text-(--primary-color) max-sm:text-xs"
            >
              <ChevronRightIcon />
              زمان و شیوه ارسال
            </a>

            <img
              src="/images/logo.png"
              alt="Digishop logo"
              className="h-8 max-sm:invisible"
            />
          </div>

          <div className="flex items-center justify-center px-4 pb-5 pt-6">
            <div className="relative">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-(--primary-color) text-white">
                <CheckIcon className="h-4 w-4" />
              </div>
              <span className="absolute left-1/2 top-full -translate-x-1/2 pt-2 text-center text-xs text-nowrap text-(--text-secondary)">
                سبد خرید
              </span>
            </div>

            <div className="h-0.5 w-12 bg-(--primary-color) max-sm:w-8" />

            <div className="relative">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-(--primary-color) text-white">
                <CheckIcon className="h-4 w-4" />
              </div>
              <span className="absolute left-1/2 top-full -translate-x-1/2 pt-2 text-center text-xs text-nowrap text-(--text-secondary)">
                ارسال
              </span>
            </div>

            <div className="h-0.5 w-12 bg-(--primary-color) max-sm:w-8" />

            <div className="relative">
              <div className="h-7 w-7 rounded-full border-[3px] border-(--primary-color) bg-white" />
              <span className="absolute left-1/2 top-full -translate-x-1/2 pt-2 text-center text-xs text-nowrap font-bold text-(--primary-color)">
                پرداخت
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-1 items-start gap-5 md:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0 space-y-6 rounded-2xl border border-gray-300 bg-white p-4 sm:p-5">
            <section>
              <h2 className="text-lg font-bold text-gray-800">
                انتخاب روش پرداخت
              </h2>
              <p className="mt-1 text-sm text-(--text-secondary)">
                روش پرداخت موردنظرتان را انتخاب کنید.
              </p>

              <div className="mt-4 space-y-3">
                {paymentMethods.map(m => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id)}
                    aria-pressed={paymentMethod === m.id}
                    className={`flex w-full items-center gap-3 rounded-xl border p-4 text-right transition ${
                      paymentMethod === m.id
                        ? "border-(--primary-color) bg-violet-50 ring-1 ring-(--primary-color)"
                        : "border-gray-200 hover:border-violet-200 hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                        paymentMethod === m.id
                          ? "bg-violet-100 text-(--primary-color)"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {m.icon}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-sm font-bold ${
                          paymentMethod === m.id
                            ? "text-(--primary-color)"
                            : "text-gray-800"
                        }`}
                      >
                        {m.label}
                      </span>

                      <span className="mt-1 block text-xs leading-5 text-(--text-secondary)">
                        {m.description}
                      </span>

                      {m.id === "wallet" && (
                        <span className="mt-2 flex flex-wrap items-center gap-1 text-xs text-(--text-secondary)">
                          موجودی کیف پول:
                          <span className="font-bold text-gray-800">
                            ۳,۹۹۰,۰۰۰
                          </span>
                          <TomanThinIcon className="h-4 w-4" />
                        </span>
                      )}
                    </span>

                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        paymentMethod === m.id
                          ? "border-(--primary-color)"
                          : "border-gray-300"
                      }`}
                    >
                      {paymentMethod === m.id && (
                        <span className="h-2.5 w-2.5 rounded-full bg-(--primary-color)" />
                      )}
                    </span>
                  </button>
                ))}
              </div>

              {paymentMethod === "wallet" && (
                <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-800">
                  موجودی کیف پولت برای پرداخت کامل این سفارش کافی نیست.
                </div>
              )}
            </section>

            <section className="border-t border-gray-100 pt-5">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-50 text-(--offer-color)">
                  <DiscountIcon />
                </div>

                <div>
                  <h2 className="font-bold text-gray-800">کد تخفیف</h2>
                  <p className="mt-1 text-xs text-(--text-secondary)">
                    اگر کد تخفیف داری، اینجا واردش کن.
                  </p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-1 text-xs leading-6 text-(--text-secondary)">
                <InfoIcon className="h-4 w-4 shrink-0" />
                برای تست، کد <span className="font-bold">test</span> رو وارد
                کن.
              </div>

              <form onSubmit={handleDiscountCode} className="mt-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={discountCode}
                    onChange={(e) => {
                      setDiscountCode(e.target.value);
                      setDiscountFailed(false);
                    }}
                    placeholder="کد تخفیف..."
                    className="min-w-0 flex-1 rounded-xl border border-gray-300 px-3 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-(--offer-color) focus:ring-2 focus:ring-red-100"
                  />

                  <button
                    type="submit"
                    className="shrink-0 rounded-xl bg-(--offer-color) px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95"
                  >
                    ثبت کد
                  </button>
                </div>

                {discountFailed && (
                  <p className="mt-2 text-xs leading-6 text-red-600">
                    کد تخفیف معتبر نیست. دوباره بررسی کنید.
                  </p>
                )}

                {hasDiscount && (
                  <p className="mt-2 flex items-center gap-1 text-xs leading-6 text-emerald-600">
                    <CheckIcon className="h-4 w-4" />
                    کد تخفیف با موفقیت اعمال شد.
                  </p>
                )}
              </form>
            </section>
          </div>

          <div className="h-fit rounded-2xl border border-gray-200 bg-white shadow-sm md:sticky md:top-20">
            <div className="border-b border-gray-100 p-4">
              <h2 className="font-bold text-gray-800">صورتحساب</h2>
            </div>

            <div className="space-y-4 p-4">
              <div className="flex items-center justify-between gap-3 text-sm text-(--text-secondary)">
                <span>قیمت کالاها</span>
                <span className="flex shrink-0 items-center gap-1">
                  {productsPrice.toLocaleString()}
                  <TomanThinIcon className="h-4 w-4" />
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 text-sm text-(--text-secondary)">
                <span>هزینه ارسال</span>
                <span className="flex shrink-0 items-center gap-1">
                  {shippingPrice.toLocaleString("en-US")}
                  <TomanThinIcon className="h-4 w-4" />
                </span>
              </div>

              {hasDiscount && (
                <div className="flex items-center justify-between gap-3 text-sm text-emerald-600">
                  <span className="flex items-center gap-1">
                    <DiscountIcon />
                    تخفیف
                  </span>
                  <span className="flex shrink-0 items-center gap-1">
                    {discountAmount.toLocaleString("en-US")}
                    <TomanThinIcon className="h-4 w-4" />
                  </span>
                </div>
              )}
            </div>

            <div className="mx-4 border-t border-dashed border-gray-200" />

            <div className="p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-(--text-secondary)">
                  مبلغ قابل پرداخت
                </span>

                <span className="flex shrink-0 items-center gap-1 font-bold text-(--text-natural)">
                  {totalPrice.toLocaleString()}
                  <TomanIcon className="h-5 w-5" />
                </span>
              </div>

              <a
                href={paymentMethod === "wallet" ? undefined : "/payment-succeed"}
                onClick={(e) => {
                  if (paymentMethod === "wallet") {
                    e.preventDefault();
                  }
                }}
                aria-disabled={paymentMethod === "wallet"}
                className={`mt-5 flex w-full items-center justify-center rounded-xl p-3 font-semibold text-white transition ${
                  paymentMethod === "wallet"
                    ? "cursor-not-allowed bg-gray-300"
                    : "bg-(--primary-color) hover:bg-violet-700"
                }`}
              >
                {paymentMethod === "online"
                  ? "پرداخت اینترنتی"
                  : paymentMethod === "credit"
                    ? "پرداخت اعتباری"
                    : "پرداخت با کیف پول"}
              </a>

              <p className="mt-3 text-center text-xs leading-6 text-gray-400 flex gap-1 items-center">
                <InfoIcon className="w-4 h-4" />
                مبلغ نهایی پس از اعمال تخفیف محاسبه شده است.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
