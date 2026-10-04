import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { CardClockIcon, CardIcon, CheckIcon, ChevronRightIcon, CircleCheckIcon, DiscountIcon, InfoIcon, TomanIcon, TomanThinIcon, WalletIcon } from "../assets/icons";
import { useState } from "react";

export default function Payment() {
  const [discountCode, setDiscountCode] = useState('');
  const [hasDiscount, setHasDiscount] = useState(false);
  const [discountFailed, setDiscountFailed] = useState(false);

  function handleDiscountCode() {
    if(discountCode === "test") {
      setHasDiscount(true);
      setDiscountFailed(false);
    }
    else {
      setDiscountFailed(true);
      setHasDiscount(false);
    }
  }

  return(
    <>
      <Header />
      <Container>
        <div className="p-4 border border-gray-300 rounded-lg">
          <div className="flex justify-center relative p-2">
            <a href="/shipping" className="flex gap-1 items-center absolute right-0 top-1/2 -translate-y-1/2 max-lg:text-sm">
              <ChevronRightIcon />
              زمان و شیوه ارسال
            </a>
            <img src="/images/logo.png" alt="Digishop logo" className="h-8 max-md:invisible" />
          </div>
          <div className="flex justify-center items-center p-4">
            <div className="relative">
              <div className="w-5 h-5 bg-(--primary-color) rounded-full text-white flex items-center justify-center">
                <CheckIcon className="w-4 h-4" />
              </div>
              <div className="absolute left-1/2 top-full -translate-x-1/2 text-xs text-center text-nowrap pt-2 text-(--text-secondary)">
                سبد خرید
              </div>
            </div>
            <div className="w-10 h-0.5 bg-(--primary-color) flex"></div>
            <div className="relative">
              <div className="w-5 h-5 bg-(--primary-color) rounded-full text-white flex items-center justify-center">
                <CheckIcon className="w-4 h-4" />
              </div>
              <div className="absolute left-1/2 top-full -translate-x-1/2 text-xs text-center text-nowrap pt-2 text-(--text-secondary)">
                ارسال
              </div>
            </div>
            <div className="w-10 h-0.5 bg-(--primary-color) flex"></div>
            <div className="relative">
              <div className="w-5 h-5 border-3 border-(--primary-color) rounded-full text-white flex items-center justify-center"></div>
              <div className="absolute left-1/2 top-full -translate-x-1/2 text-xs text-center text-nowrap pt-2 text-(--text-secondary)">
                پرداخت
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-4 *:p-4 mt-4">
          <div className="border border-gray-300 rounded-lg w-full">
            <div>
              انتخاب روش پرداخت
            </div>
            <div className="w-fit mt-4">
              <form className="*:flex *:justify-between *:p-4 *:gap-1 *:w-fit">
                <div className="flex items-center">
                  <input className="w-5 h-5 peer" type="radio" id="online" name="payment" defaultChecked />
                  <label className="flex justify-between gap-1 peer-checked:text-(--primary-color)" htmlFor="online">
                    <CardIcon />
                    پرداخت اینترنتی
                  </label>
                </div>
                <div className="flex items-center">
                  <input className="peer w-5 h-5" type="radio" id="credit" name="payment" />
                  <label className="flex justify-between gap-1 peer-checked:text-(--primary-color)" htmlFor="credit">
                    <CardClockIcon />
                    پرداخت اعتباری
                  </label>
                </div>
                <div className="flex">
                  <input className="peer w-5 h-5" type="radio" id="wallet" name="payment" />
                  <label className="flex justify-between gap-1 peer-checked:text-(--primary-color)" htmlFor="wallet">
                    <div className="flex">
                      <WalletIcon />
                    </div>
                    <div>
                      پرداخت با کیف پول
                      <div className="flex items-center gap-1 mt-1">
                        <div className="text-xs text-(--text-secondary)">
                          موجودی:
                        </div>
                        <div className="flex items-center gap-1 text-sm text-(--text-primary)">
                          3,990,000
                          <TomanThinIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </form>
            </div>
            <div>
              <div>
                کد تخفیف
                <p className="text-xs text-(--text-secondary) py-1">
                  اگر کد تخفیف دارید وارد کنید.
                </p>
                <p className="flex gap-1 text-xs">
                  <InfoIcon className="w-4 h-4" />
                  برای نمونه کد "test" را وارد کنید.
                </p>
              </div>
              <div className="mt-2">
                <div className="flex gap-2">
                  <input onChange={(e) => setDiscountCode(e.target.value)} value={discountCode} className="border-2 border-(--offer-color) rounded-lg px-2 py-1 outline-none focus:shadow-md focus:shadow-red-700/30 transition-shadow placeholder:text-sm" type="text" placeholder="کد تخفیف..." />
                  <button onClick={handleDiscountCode} className="bg-(--offer-color) text-white px-2 py-1 rounded-lg text-sm">ثبت</button>
                </div>
                {discountFailed ? (
                  <div className="py-2 text-red-600 text-xs">
                    کد تخفیف اشتباه است. لطفا دوباره تلاش کنید.
                  </div>
                ) : ''}
                {hasDiscount ? (
                  <div className="py-2 text-green-600 text-xs">
                    کد تخفیف با موفقیت اعمال شد.
                  </div>
                ) : ''}
              </div>
            </div>
          </div>
          <div className="w-100 h-fit sticky top-20 border border-gray-300 rounded-lg p-4 divide-y divide-gray-300 *:p-3">
            <div className="text-sm text-(--text-secondary) flex justify-between items-center">
              <div>
                قیمت کالا ها
              </div>
              <div className="flex gap-1 items-center">
                30,699,000
                <TomanThinIcon className="w-5 h-5" />
              </div>
            </div>
            <div className="text-sm text-(--text-secondary) flex justify-between items-center">
              <div>
                هزینه ارسال
              </div>
              <div className="flex gap-1 items-center">
                400,000
                <TomanThinIcon className="w-5 h-5" />
              </div>
            </div>
            {
              hasDiscount ? (
                <div className="text-sm text-(--text-secondary) flex justify-between items-center">
                  <div className="flex gap-1 items-center">
                    <DiscountIcon />
                    کد تخفیف
                  </div>
                  <div className="flex gap-1 items-center">
                    1,000,000
                    <TomanThinIcon className="w-5 h-5" />
                  </div>
                </div>
              ) : ''
            }
            <div>
              <div className="text-sm text-(--text-primary) flex justify-between items-center">
                <div>
                  مبلغ قابل پرداخت
                </div>
                <div className="flex gap-1 items-center font-bold text-(--text-natural)">
                  400,000
                  <TomanIcon className="w-5 h-5" />
                </div>
              </div>
              <a href="/payment-succeed">
                <button className="bg-(--primary-color) text-white w-full my-4 p-2 rounded-lg">
                  پرداخت
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}