
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ProfileSidebar from "../../components/ProfileSidebar";
import * as Icons from "../../assets/icons";

const notifications = [
  {
    id: 1,
    title: "به دیجی‌شاپ خوش آمدید!",
    message:
      "سلام محمد عزیز! 💜\n\nبه خانواده دیجی‌شاپ خوش اومدی. از این به بعد می‌تونی جدیدترین محصولات دیجیتال رو بررسی کنی، محصولات موردعلاقه‌ات رو ذخیره کنی و سفارش‌هات رو به‌راحتی مدیریت کنی.\n\nاز خریدت لذت ببر!",
    date: "1405/07/25",
    time: "10:30",
    type: "account",
    read: false,
  },
  {
    id: 2,
    title: "تخفیف ویژه محصولات اپل",
    message:
      "فرصت خوبیه برای خرید! 🍎\n\nتعدادی از محصولات منتخب اپل با تخفیف ویژه در دیجی‌شاپ قرار گرفتن. محصولات رو بررسی کن و اگه چیزی نظرت رو جلب کرد، به لیست علاقه‌مندی‌هات اضافه کن.",
    date: "1405/07/24",
    time: "16:45",
    type: "offer",
    read: false,
  },
  {
    id: 3,
    title: "سفارش شما با موفقیت ثبت شد",
    message:
      "محمد عزیز، سفارش آزمایشی شماره #DS-1024 با موفقیت ثبت شد.\n\nوضعیت فعلی: در انتظار پرداخت\n\nاین یک پیام نمونه برای نمایش رابط کاربری است و به سفارش واقعی مربوط نیست.",
    date: "1405/07/23",
    time: "12:20",
    type: "order",
    read: true,
  },
  {
    id: 4,
    title: "به‌روزرسانی قوانین بازگشت کالا",
    message:
      "مشتری گرامی، اطلاعات مربوط به شرایط بازگشت کالا و خدمات پس از فروش در بخش راهنمای دیجی‌شاپ قابل مشاهده است.\n\nپیش از ثبت سفارش، شرایط مربوط به محصول موردنظر خود را مطالعه کنید.",
    date: "1405/07/21",
    time: "09:15",
    type: "info",
    read: true,
  },
  {
    id: 5,
    title: "پیشنهاد ویژه برای شما 🎁",
    message:
      "یه پیشنهاد جذاب برای طرفدارهای تکنولوژی!\n\nمحصولات پرفروش این هفته رو ببین و مدل‌های مختلف رو از نظر قیمت و امکانات با هم مقایسه کن.\n\nاین پیام صرفاً نمونه است و تخفیف واقعی‌ای را اعلام نمی‌کند.",
    date: "1405/07/19",
    time: "18:00",
    type: "offer",
    read: true,
  },
];

const messageStyles = {
  account: {
    icon: Icons.AccountIcon,
    color: "bg-violet-100 text-violet-700",
    label: "حساب کاربری",
  },
  offer: {
    icon: Icons.CelebrateIcon,
    color: "bg-amber-100 text-amber-700",
    label: "پیشنهاد ویژه",
  },
  order: {
    icon: Icons.BagIcon,
    color: "bg-emerald-100 text-emerald-700",
    label: "سفارش",
  },
  info: {
    icon: Icons.InfoIcon,
    color: "bg-sky-100 text-sky-700",
    label: "اطلاع‌رسانی",
  },
};

export default function Notifications() {
  const [messages, setMessages] = useState(notifications);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedMessage, setSelectedMessage] = useState(null);
  const unreadCount = messages.filter((m) => !m.read).length;
  const filteredMessages = messages.filter((m) => {
    if (activeFilter === "unread") return !m.read;
    if (activeFilter === "read") return m.read;
    return true;
  });
  const openMessage = (message) => {
    setMessages((prev) =>
      prev.map(m =>
        m.id === message.id ? { ...m, read: true } : m
      )
    );
    setSelectedMessage({ ...message, read: true });
  };
  const deleteMessage = (id) => {
    setMessages((prev) => prev.filter(m => m.id !== id));
    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };
  const markAllAsRead = () => {
    setMessages((prev) => prev.map((m) => ({ ...m, read: true })));
    if (selectedMessage) {
      setSelectedMessage((prev) => ({ ...prev, read: true }));
    }
  };

  return (
    <>
      <Header />

      <Container>
        <div className="flex max-sm:flex-col gap-4">
          <ProfileSidebar active="notifications" className="max-sm:w-full shrink-0" />

          <div className="flex-1 min-w-0 rounded-xl border border-gray-200 bg-white p-4 md:p-6">
            <div className="flex flex-wrap justify-between items-center gap-3 border-b border-gray-200 pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-bold">
                    پیام‌های من
                  </h1>

                  {unreadCount > 0 && (
                    <span className="rounded-full bg-(--primary-color) px-2 py-0.5 text-xs text-white">
                      {unreadCount} جدید
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs md:text-sm text-(--text-secondary)">
                  اطلاعیه‌ها و پیام‌های حساب کاربری شما
                </p>
              </div>

              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="flex items-center gap-2 text-xs md:text-sm text-(--primary-color) hover:opacity-70 transition-opacity"
                >
                  <Icons.CheckIcon className="w-4" />
                  خواندن همه
                </button>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto py-5">
              {[
                { id: "all", label: "همه پیام‌ها" },
                { id: "unread", label: "خوانده‌نشده" },
                { id: "read", label: "خوانده‌شده" },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`shrink-0 rounded-lg px-4 py-2 text-sm transition-colors ${
                    activeFilter === filter.id
                      ? "bg-(--primary-color) text-white"
                      : "border border-gray-200 text-(--text-secondary) hover:bg-gray-50"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {filteredMessages.length > 0 ? (
              <div className="flex flex-col gap-3">
                {filteredMessages.map((message) => {
                  const style = messageStyles[message.type];
                  const MessageIcon = style.icon;

                  return (
                    <div
                      key={message.id}
                      className={`flex gap-3 rounded-xl border p-3 md:p-4 transition-colors ${
                        !message.read
                          ? "border-violet-200 bg-violet-50/70"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <button
                        onClick={() => openMessage(message)}
                        className="flex flex-1 min-w-0 gap-3 text-right"
                      >
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.color}`}
                        >
                          <MessageIcon className="h-5 w-5" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h2
                              className={`text-sm ${
                                !message.read
                                  ? "font-bold text-gray-900"
                                  : "font-medium text-gray-700"
                              }`}
                            >
                              {message.title}
                            </h2>

                            {!message.read && (
                              <span className="h-2 w-2 rounded-full bg-(--primary-color)" />
                            )}
                          </div>

                          <p className="mt-2 line-clamp-2 whitespace-pre-line text-xs leading-6 text-(--text-secondary)">
                            {message.message}
                          </p>

                          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-(--text-secondary)">
                            <span>{style.label}</span>
                            <span>{message.date}</span>
                            <span>{message.time}</span>
                          </div>
                        </div>
                      </button>

                      <button
                        onClick={() => deleteMessage(message.id)}
                        title="حذف پیام"
                        aria-label="حذف پیام"
                        className="h-fit shrink-0 rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-500"
                      >
                        <Icons.TrashCanIcon className="h-5 w-5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <Icons.MailIcon className="h-8 w-8" />
                </div>

                <p className="mt-4 font-bold">
                  {activeFilter === "unread"
                    ? "پیام خوانده‌نشده‌ای نداری"
                    : activeFilter === "read"
                      ? "هنوز پیامی خوانده نشده"
                      : "صندوق پیام‌ها خالی است"}
                </p>

                <p className="mt-2 text-sm text-(--text-secondary)">
                  پیام‌های جدیدت اینجا نمایش داده می‌شن.
                </p>
              </div>
            )}
            {messages.length > 0 && (
              <div className="mt-5 border-t border-gray-200 pt-4 text-xs text-(--text-secondary)">
                نمایش {filteredMessages.length} از {messages.length} پیام
              </div>
            )}
          </div>
        </div>
      </Container>

      <Footer />

      {selectedMessage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelectedMessage(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-xl md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-gray-200 pb-4">
              <div className="flex items-start gap-3">
                {(() => {
                  const style = messageStyles[selectedMessage.type];
                  const MessageIcon = style.icon;

                  return (
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${style.color}`}
                    >
                      <MessageIcon className="h-5 w-5" />
                    </div>
                  );
                })()}

                <div>
                  <h2
                    id="message-title"
                    className="font-bold leading-6"
                  >
                    {selectedMessage.title}
                  </h2>

                  <p className="mt-2 text-xs text-(--text-secondary)">
                    {selectedMessage.date} ـ {selectedMessage.time}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMessage(null)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                <Icons.CrossIcon className="h-5 w-5" />
              </button>
            </div>

            <p className="whitespace-pre-line py-5 text-sm leading-8 text-gray-700">
              {selectedMessage.message}
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedMessage(null)}
                className="rounded-lg bg-(--primary-color) px-5 py-2.5 text-sm text-white hover:opacity-90"
              >
                متوجه شدم
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
