import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { CheckIcon, TomanIcon } from "../assets/icons";

export default function PaymentSucceed() {
  return(
    <>
      <Header />
      <Container>
        <div className="flex justify-center w-full max-md:mt-4 mt-10">
          <div className="p-4 flex flex-col items-center w-full md:w-100 rounded-lg shadow-md shadow-green-700/50">
            <div className="flex gap-4 items-center w-fit h-20 my-4">
              <p className="text-3xl font-[Lalezar]! text-green-700">
                پرداخت موفق
              </p>
              <div className="flex justify-center items-center text-white w-16 h-16 bg-linear-to-bl from-green-400 to-green-700 rounded-full">
                <CheckIcon className="w-full h-full" />
              </div>
            </div>
            <div className="w-full border-y border-gray-300">
              <ul className="divide-dashed divide-y divide-gray-300">
                <li className="flex justify-between w-full text-sm py-2 px-1 text-neutral-800">
                  <div>
                    کد رهگیری سفارش:
                  </div>
                  <div>
                    #12345
                  </div>
                </li>
                <li className="flex justify-between w-full text-sm py-2 px-1 text-neutral-800">
                  <div>
                    تعداد کالا ها:
                  </div>
                  <div>
                    4 کالا
                  </div>
                </li>
                <li className="flex justify-between w-full text-sm py-2 px-1 text-neutral-800">
                  <div>
                    زمان ارسال:
                  </div>
                  <div>
                    پنجشنبه 12 مهر ساعت 9 تا 17
                  </div>
                </li>
                <li className="flex justify-between w-full text-sm py-2 px-1 text-(--text-natural)">
                  <div className="font-bold">
                    مبلغ نهایی:
                  </div>
                  <div className="flex gap-1 items-center font-bold">
                    399,657,000
                    <TomanIcon className="w-5 h-5" />
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full mt-4">
              <a href="/products">
                <button className="py-2 w-full rounded-lg bg-green-700 text-white">
                  بازگشت به فروشگاه
                </button>
              </a>
            </div>
            <div className="w-full mt-2">
              <a href="/products">
                <button className="py-2 w-full rounded-lg border-2 border-green-700 text-green-700">
                  پیگیری سفارش
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