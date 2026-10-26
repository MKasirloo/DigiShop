import { HeartIcon, ChevronUpIcon } from "../assets/icons";

export default function Footer() {
  return (
    <>
      <footer className="relative mt-20 overflow-hidden bg-linear-to-r from-[#05005b] to-[#3a00c1] text-white">

        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[#4d00ff]/90 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-40 left-1/4 size-96 rounded-full bg-violet-700/75 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex gap-5 border-b border-white/10 py-8 justify-between sm:items-center sm:justify-between">
            <a href="/" className="group w-fit">
              <span className="text-4xl tracking-tight transition group-hover:text-violet-100 font-lalezar!">
                دیجی&zwnj;شاپ
              </span>
              <p className="mt-2 text-xs text-white/50">
                دنیای دیجیتال، یک قدم نزدیک‌تر
              </p>
            </a>

            <a
              href="#top"
              className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/80 transition hover:border-violet-400/40 hover:bg-[#4d00ff]/20 hover:text-white"
            >
              بازگشت به بالا
              <ChevronUpIcon />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-10 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-14">
            <div className="sm:col-span-2 lg:col-span-2">
              <h2 className="text-lg font-black">درباره دیجی‌شاپ</h2>

              <p className="mt-5 max-w-xl text-sm leading-8 text-white/60">
                دنیای دیجیتال در دسترس شماست. در دیجی‌شاپ تلاش می‌کنیم تجربه‌ای
                ساده برای آشنایی با محصولات دیجیتال فراهم کنیم. از موبایل و
                لپ‌تاپ گرفته تا تبلت، کنسول بازی و لوازم جانبی، می‌تونی محصولات
                رو بررسی کنی و با اطلاعات کامل‌تری تصمیم بگیری.
              </p>

              <a
                href="/products"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-violet-300 transition hover:text-white"
              >
                مشاهده محصولات
                <span aria-hidden="true">←</span>
              </a>
            </div>
            <div>
              <h2 className="text-base font-black">دسترسی سریع</h2>

              <div className="mt-5 flex flex-col items-start gap-4">
                <a
                  href="/"
                  className="text-sm text-white/60 transition hover:translate-x-[-3px] hover:text-violet-300"
                >
                  صفحه اصلی
                </a>

                <a
                  href="/products"
                  className="text-sm text-white/60 transition hover:translate-x-[-3px] hover:text-violet-300"
                >
                  همه محصولات
                </a>

                <a
                  href="/profile"
                  className="text-sm text-white/60 transition hover:translate-x-[-3px] hover:text-violet-300"
                >
                  حساب کاربری
                </a>

                <a
                  href="/profile/orders"
                  className="text-sm text-white/60 transition hover:translate-x-[-3px] hover:text-violet-300"
                >
                  سفارش‌های من
                </a>
              </div>
            </div>

            <div>
              <h2 className="text-base font-black">راهنمای خرید</h2>

              <div className="mt-5 flex flex-col items-start gap-4">
                <a
                  href="/products"
                  className="text-sm text-white/60 transition hover:translate-x-[-3px] hover:text-violet-300"
                >
                  جست‌وجوی محصولات
                </a>

                <a
                  href="/profile"
                  className="text-sm text-white/60 transition hover:translate-x-[-3px] hover:text-violet-300"
                >
                  پیگیری سفارش
                </a>

                <a
                  href="/profile"
                  className="text-sm text-white/60 transition hover:translate-x-[-3px] hover:text-violet-300"
                >
                  حساب و سفارش‌ها
                </a>
              </div>

              <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <span className="text-xs font-bold text-violet-300">
                  خرید هوشمندانه
                </span>
                <p className="mt-2 text-xs leading-6 text-white/50">
                  مشخصات محصولات رو بررسی کن و انتخاب مناسب‌تری داشته باش.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="border-t border-white/5 bg-[#17004e] text-white max-md:mb-[70px]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-8 sm:text-right">
          <p className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-white/50 sm:justify-start sm:text-sm">
            <span>ساخته شده با</span>
            <HeartIcon className="text-red-500 fill-red-500 -translate-y-1" />
            <span>توسط</span>
            <a
              href="https://www.linkedin.com/in/mohammad-hossein-kasirloo-8a38912aa/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-violet-300 transition hover:text-white"
            >
              MKasirloo
            </a>
          </p>

          <p className="text-xs text-white/40">
            © تمامی حقوق متعلق به دیجی‌شاپ است.
          </p>
        </div>
      </div>

      <div className="mobile-menu-fixer" />
    </>
  );
}
