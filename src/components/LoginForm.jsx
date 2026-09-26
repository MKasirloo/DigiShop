import { useState } from "react";
import styles from "./LoginForm.module.css";
import { ChevronRightIcon } from "../assets/icons";

export default function LoginForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  function onPhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" />
          <a href="/" className={styles.backIcon}>
            <ChevronRightIcon />
          </a>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.text}>
            <p className={styles.title}>
              ورود یا ثبت نام در {' '}
              <span className={styles.textLogo}>دیجی شاپ</span>
            </p>

            <p className={styles.desc}>
              برای ورود به دیجی شاپ شماره موبایل خود را وارد کنید:
            </p>
          </div>

          <form className={styles.loginForm}>
            <div className={styles.inputWrapper}>
              <input
                id="phoneNumber"
                className={styles.mobileNumber}
                value={phoneNumber}
                onChange={onPhoneNumberChange}
                maxLength={11}
                minLength={11}
                
              />
              <label htmlFor="phoneNumber" className={styles.mobileNumberLable}>شماره موبایل...</label>
            </div>
            <button className={styles.loginButton} disabled={phoneNumber === ''}>
              ورود به دیجی شاپ
            </button>
          </form>

          <div className={styles.policyWrapper}>
            <div className={styles.policy}>
              ورود شما به معنای پذیرش شرایط {' '}
              <a href="/">دیجی شاپ</a>
              {' '} و {' '}
              <a href="#">قوانین حریم خصوصی</a>
              {' '}است.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}