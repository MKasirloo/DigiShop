import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { CheckIcon, TomanIcon } from "../assets/icons";

export default function PaymentSucceed() {
  const orderDetails = [
    { label: "کد رهگیری سفارش", value: "#12345" },
    { label: "تعداد کالاها", value: "4 کالا" },
    { label: "زمان ارسال", value: "پنجشنبه 12 مهر، ساعت 9 تا 17" },
  ];

  return (
    <>
      <Header />
      <Container>
        <div className="flex justify-center w-full px-3 py-8 md:py-14">
          <div className="w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg shadow-green-900/5">
            <div className="flex flex-col items-center bg-green-50 px-5 py-8">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-bl from-green-400 to-green-700 text-white shadow-md shadow-green-700/20">
                <CheckIcon className="w-15 h-15" />
              </div>
              <h1 className="mt-5 text-2xl font-[Lalezar]! text-green-700">
                پرداخت موفق
              </h1>
              <p className="mt-2 text-center text-sm leading-6 text-green-800">
                پرداخت شما با موفقیت انجام شد و سفارش شما ثبت گردید.
              </p>
            </div>

            <div className="p-5 md:p-6">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-bold text-(--text-natural)">
                  جزئیات سفارش
                </h2>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs text-green-700">
                  ثبت شده
                </span>
              </div>

              <div className="divide-y divide-dashed divide-gray-200 border-y border-gray-200">
                {orderDetails.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start justify-between gap-3 py-3 text-sm"
                  >
                    <span className="shrink-0 text-(--text-secondary)">
                      {item.label}
                    </span>
                    <span className="text-left leading-6 text-(--text-natural)">
                      {item.value}
                    </span>
                  </div>
                ))}

                <div className="flex items-center justify-between gap-3 py-4">
                  <span className="font-bold text-(--text-natural)">
                    مبلغ نهایی
                  </span>
                  <span className="flex items-center gap-1 text-lg font-bold text-green-700">
                    399,657,000
                    <TomanIcon className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  href="/products"
                  className="flex w-full items-center justify-center rounded-xl bg-green-700 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-green-800"
                >
                  بازگشت به فروشگاه
                </a>
                <a
                  href="/profile/orders"
                  className="flex w-full items-center justify-center rounded-xl border border-green-700 px-4 py-3 text-sm font-medium text-green-700 transition-colors hover:bg-green-50"
                >
                  پیگیری سفارش
                </a>
              </div>

              <p className="mt-4 text-center text-xs leading-6 text-(--text-secondary)">
                لطفاً کد رهگیری سفارش را برای مراجعات بعدی نگهداری کنید.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}