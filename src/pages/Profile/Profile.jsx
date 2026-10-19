
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ProfileSidebar from "../../components/ProfileSidebar";
import * as Icons from "../../assets/icons";
import orders from "../../data/orders";

const quickLinks = [
  {
    title: "سفارش‌های من",
    description: "مشاهده و پیگیری سفارش‌ها",
    href: "/profile/orders",
    icon: <Icons.PackageIcon />,
  },
  {
    title: "علاقه‌مندی‌ها",
    description: "محصولات ذخیره‌شده",
    href: "/profile/wishlist",
    icon: <Icons.HeartIcon />,
  },
  {
    title: "پیام‌های من",
    description: "اعلان‌ها و اطلاع‌رسانی‌ها",
    href: "/profile/notifications",
    icon: <Icons.MailIcon />,
  },
  {
    title: "اطلاعات حساب",
    description: "ویرایش اطلاعات شخصی",
    href: "/profile/account",
    icon: <Icons.AccountIcon />,
  },
];

const recentOrders = orders.slice(0, 2);

const statusLabels = {
  done: "انجام شده",
  processing: "در حال پردازش",
  waitingForPayment: "در انتظار پرداخت",
  cancelled: "لغو شده"
}

const recentMessages = [
  {
    id: 1,
    title: "به دیجی‌شاپ خوش آمدید!",
    description: "از خریدت لذت ببر؛ محصولات جدید رو از دست نده.",
    date: "1405/07/25",
    read: false,
  },
  {
    id: 2,
    title: "تخفیف ویژه محصولات اپل",
    description: "محصولات منتخب اپل رو بررسی کن.",
    date: "1405/07/24",
    read: true,
  },
];

export default function Profile() {
  return (
    <>
      <Header />

      <Container>
        <div className="flex max-md:flex-col gap-4">
          <ProfileSidebar
            active="dashboard"
            className="max-sm:grow shrink-0 max-md:w-full"
          />

          <div className="flex-1 min-w-0 flex flex-col gap-4">
            <section className="border border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-center gap-3 mb-5">
                <h3 className="relative w-fit pb-1 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-1/2 before:h-0.5 before:bg-(--primary-color)">
                  سفارش‌های من
                </h3>

                <a
                  href="/profile/orders"
                  className="text-sm text-(--primary-color) hover:opacity-70 transition flex gap-1 items-center"
                >
                  <span>
                    همه سفارش‌ها
                  </span>
                  <Icons.ArrowLeftIcon />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                <a
                  href="/profile/orders"
                  className="min-w-0 flex justify-between items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 hover:border-blue-400 hover:shadow-sm transition"
                >
                  <div className="flex flex-col gap-2 items-center">
                    <div className="relative">
                      <div className="blur-lg absolute inset-3 bg-blue-300 rounded-full opacity-50 translate-2.5" />
                      <Icons.SyncIcon className="relative z-10 w-12 text-blue-700" />
                    </div>
                    <span className="text-sm text-center text-blue-700">
                      در حال پردازش
                    </span>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-(--text-natural)">
                      1
                    </div>
                    <div className="text-(--text-secondary) text-sm">
                      سفارش
                    </div>
                  </div>
                </a>

                <a
                  href="/profile/orders"
                  className="min-w-0 flex justify-between items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 hover:border-green-400 hover:shadow-sm transition"
                >
                  <div className="flex flex-col gap-2 items-center">
                    <div className="relative">
                      <div className="blur-lg absolute inset-3 bg-green-300 rounded-full opacity-50 translate-2.5" />
                      <Icons.CheckIcon className="relative z-10 w-12 text-green-700" />
                    </div>
                    <span className="text-sm text-center text-green-700">
                      تحویل داده شده
                    </span>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-(--text-natural)">
                      3
                    </div>
                    <div className="text-(--text-secondary) text-sm">
                      سفارش
                    </div>
                  </div>
                </a>

                <a
                  href="/profile/orders"
                  className="min-w-0 flex justify-between items-center gap-3 border border-gray-300 rounded-lg px-4 py-3 hover:border-red-400 hover:shadow-sm transition"
                >
                  <div className="flex flex-col gap-2 items-center">
                    <div className="relative">
                      <div className="blur-lg absolute inset-3 bg-red-300 rounded-full opacity-50 translate-2.5" />
                      <Icons.CrossIcon className="relative z-10 w-12 text-red-700" />
                    </div>
                    <span className="text-sm text-center text-red-700">
                      لغو شده
                    </span>
                  </div>

                  <div className="text-center">
                    <div className="text-4xl font-bold text-(--text-natural)">
                      2
                    </div>
                    <div className="text-(--text-secondary) text-sm">
                      سفارش
                    </div>
                  </div>
                </a>
              </div>
            </section>

            <section className="border border-gray-300 rounded-lg p-4">
              <h3 className="relative w-fit mb-5 pb-1 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-1/2 before:h-0.5 before:bg-(--primary-color)">
                دسترسی سریع
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {quickLinks.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 border border-gray-200 rounded-lg p-3 hover:border-(--primary-color) hover:bg-purple-50/40 transition group"
                  >
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-purple-50 flex items-center justify-center text-2xl text-(--primary-color) group-hover:scale-105 transition">
                      {item.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-(--text-natural)">
                        {item.title}
                      </div>
                      <p className="text-sm text-(--text-secondary) mt-1">
                        {item.description}
                      </p>
                    </div>

                    <span className="text-gray-400 group-hover:text-(--primary-color) transition">
                      <Icons.ArrowLeftIcon />
                    </span>
                  </a>
                ))}
              </div>
            </section>

            <section className="border border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-center gap-3 mb-5">
                <h3 className="relative w-fit pb-1 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-1/2 before:h-0.5 before:bg-(--primary-color)">
                  آخرین سفارش‌ها
                </h3>

                <a href="/profile/orders" className="text-sm text-(--primary-color) hover:opacity-70 transition flex gap-1 items-center">
                  <span>
                    مشاهده همه
                  </span>
                  <Icons.ArrowLeftIcon />
                </a>
              </div>

              <div className="flex flex-col">
                {recentOrders.map((order, index) => (
                  <div
                    key={order.id}
                    className={`flex flex-wrap justify-between items-center gap-3 py-4 ${
                      index !== 0 ? "border-t border-gray-200" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-11 h-11 shrink-0 rounded-lg bg-gray-100 flex items-center justify-center text-xl">
                        <Icons.PackageIcon />
                      </div>

                      <div className="min-w-0">
                        <div className="font-medium">
                          {order.name}
                        </div>
                        <div className="text-xs text-(--text-secondary) mt-1">
                          سفارش #{order.id}
                        </div>
                        <div className="text-xs text-(--text-secondary) mt-1">
                          {order.date}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 mr-auto">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          order.status === "done"
                            ? "bg-green-50 text-green-700"
                            :
                              order.status === "processing"
                                ? "bg-blue-50 text-blue-700"
                                : order.status === "waitingForPayment"
                                  ? "bg-yellow-50 text-yellow-700"
                                  : order.status === "cancelled"
                                  ? "bg-red-50 text-red-700" : "bg-gray-50 text-gray-700"
                        }`}
                      >
                        {statusLabels[order.status]}
                      </span>

                      <span className="text-sm font-medium">
                        {order.amount.toLocaleString()} تومان
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="border border-gray-300 rounded-lg p-4">
              <div className="flex justify-between items-center gap-3 mb-5">
                <h3 className="relative w-fit pb-1 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-1/2 before:h-0.5 before:bg-(--primary-color)">
                  پیام‌های اخیر
                </h3>

                <a
                  href="/profile/notifications"
                  className="text-sm text-(--primary-color) hover:opacity-70 transition flex gap-1 items-center"
                >
                  <span>
                    همه پیام ها
                  </span>
                  <Icons.ArrowLeftIcon />
                </a>
              </div>

              <div className="flex flex-col">
                {recentMessages.map((message, index) => (
                  <a
                    key={message.id}
                    href="/profile/messages"
                    className={`flex items-start gap-3 py-4 hover:bg-gray-50 transition ${
                      index !== 0 ? "border-t border-gray-200" : ""
                    }`}
                  >
                    <div className="w-10 h-10 shrink-0 rounded-full bg-purple-50 text-(--primary-color) flex items-center justify-center text-xl">
                      <Icons.MailIcon />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-medium">
                          {message.title}
                        </span>

                        {!message.read && (
                          <span className="w-2 h-2 rounded-full bg-(--primary-color)" />
                        )}
                      </div>

                      <p className="text-sm text-(--text-secondary) mt-1 leading-6">
                        {message.description}
                      </p>

                      <span className="text-xs text-gray-400 mt-2 block">
                        {message.date}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}
