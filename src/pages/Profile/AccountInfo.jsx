import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ProfileSidebar from "../../components/ProfileSidebar";
import * as Icons from "../../assets/icons";

export default function AccountInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswords, setShowPasswords] = useState(false);
  const [userInfo, setUserInfo] = useState({
    firstName: "محمدحسین",
    lastName: "کثیرلو",
    phone: "09123456789",
    email: "example@gmail.com",
    nationalCode: "0123456789",
  });
  const [formData, setFormData] = useState(userInfo);
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;

    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if(passwords.newPassword && passwords.newPassword !== passwords.confirmPassword) {
      alert("رمز عبور جدید و تکرار آن یکسان نیستند.");
      return;
    }
    setUserInfo(formData);
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData(userInfo);
    setPasswords({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setShowPasswords(false);
    setIsEditing(false);
  };

  const fields = [
    {
      name: "firstName",
      label: "نام",
      placeholder: "نام خود را وارد کنید",
      type: "text",
    },
    {
      name: "lastName",
      label: "نام خانوادگی",
      placeholder: "نام خانوادگی خود را وارد کنید",
      type: "text",
    },
    {
      name: "phone",
      label: "شماره موبایل",
      placeholder: "شماره موبایل خود را وارد کنید",
      type: "text",
      dir: "ltr",
    },
    {
      name: "email",
      label: "پست الکترونیک",
      placeholder: "ایمیل خود را وارد کنید",
      type: "email",
      dir: "ltr",
    },
    {
      name: "nationalCode",
      label: "کد ملی",
      placeholder: "کد ملی خود را وارد کنید",
      type: "text",
      dir: "ltr",
    },
  ];

  const passwordFields = [
    {
      name: "currentPassword",
      label: "رمز عبور فعلی",
      placeholder: "رمز عبور فعلی را وارد کنید",
    },
    {
      name: "newPassword",
      label: "رمز عبور جدید",
      placeholder: "رمز عبور جدید را وارد کنید",
    },
    {
      name: "confirmPassword",
      label: "تکرار رمز عبور جدید",
      placeholder: "رمز جدید را دوباره وارد کنید",
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <div className="flex max-sm:flex-col gap-4">
          <ProfileSidebar active={"account"} className="max-sm:grow max-sm:w-full shrink-0" />
          <div className="flex-1 max-sm:shrink-0 min-w-0 p-4 md:p-6 rounded-lg border border-gray-300">
            <div className="flex justify-between items-center gap-3 pb-5 border-b border-gray-200">
              <div>
                <h1 className="text-xl font-bold">
                  اطلاعات کاربری
                </h1>

                <p className="text-xs md:text-sm text-(--text-secondary) mt-2">
                  اطلاعات حساب کاربری خود را مشاهده و مدیریت کنید.
                </p>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex gap-2 items-center text-sm text-(--primary-color) hover:opacity-70 transition-opacity shrink-0"
                >
                  <Icons.EditIcon className="w-5" />
                  ویرایش
                </button>
              )}
            </div>

            <form onSubmit={handleSave}>
              <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-x-5 gap-y-5 py-6">
                {fields.map((field) => (
                  <div
                    key={field.name}
                    className="flex flex-col gap-2"
                  >
                    <label
                      htmlFor={field.name}
                      className="text-sm font-medium"
                    >
                      {field.label}
                    </label>

                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      dir={field.dir || "rtl"}
                      readOnly={!isEditing}
                      className={`w-full min-w-0 rounded-lg border px-3 py-3 text-sm outline-none transition-colors ${
                        isEditing
                          ? "border-gray-300 focus:border-(--primary-color) bg-white"
                          : "border-gray-200 bg-gray-50 text-(--text-secondary)"
                      }`}
                    />
                  </div>
                ))}
              </div>

              {isEditing && (
                <div className="border-t border-gray-200 pt-5">
                  <div className="flex items-center gap-2 mb-5">
                    <Icons.LockIcon className="w-5 text-(--primary-color)" />
                    <h2 className="font-bold text-base">
                      تغییر رمز عبور
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 min-[900px]:grid-cols-2 gap-x-5 gap-y-5">
                    {passwordFields.map((field) => (
                      <div
                        key={field.name}
                        className="flex flex-col gap-2"
                      >
                        <label
                          htmlFor={field.name}
                          className="text-sm font-medium"
                        >
                          {field.label}
                        </label>

                        <div className="relative">
                          <input
                            id={field.name}
                            name={field.name}
                            type={showPasswords ? "text" : "password"}
                            value={passwords[field.name]}
                            onChange={handlePasswordChange}
                            placeholder={field.placeholder}
                            autoComplete="new-password"
                            className="w-full min-w-0 rounded-lg border border-gray-300 bg-white px-3 py-3 pl-11 text-sm outline-none transition-colors focus:border-(--primary-color)"
                          />

                          <button
                            type="button"
                            onClick={() =>
                              setShowPasswords((prev) => !prev)
                            }
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-(--text-secondary) hover:text-(--primary-color)"
                            aria-label={
                              showPasswords
                                ? "مخفی کردن رمزها"
                                : "نمایش رمزها"
                            }
                          >
                            {showPasswords ? (
                              <Icons.EyeOffIcon className="w-5" />
                            ) : (
                              <Icons.EyeIcon className="w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-(--text-secondary) mt-4">
                    اگر قصد تغییر رمز عبور را ندارید، این فیلدها را خالی بگذارید.
                  </p>
                </div>
              )}

              {isEditing && (
                <div className="flex flex-wrap gap-3 justify-end pt-5 mt-5 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm hover:bg-gray-50 transition-colors"
                  >
                    انصراف
                  </button>

                  <button
                    type="submit"
                    className="flex gap-2 items-center justify-center rounded-lg bg-(--primary-color) px-5 py-2.5 text-sm text-white hover:opacity-90 transition-opacity"
                  >
                    <Icons.SaveIcon className="w-5" />
                    ذخیره تغییرات
                  </button>
                </div>
              )}
            </form>

            <div className="flex gap-2 items-center rounded-lg bg-slate-50 p-3 mt-5 text-xs text-(--text-secondary)">
              <Icons.InfoIcon className="w-5 shrink-0" />

              <p>
                اطلاعات خود را به‌درستی وارد کنید تا هنگام ثبت سفارش
                و پیگیری خرید، مشکلی نداشته باشید.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
}