import { useRef, useState } from "react";

export default function Verification() {
  const [code, setCode] = useState(['', '', '', '', '']);
  const inputs = useRef([]);
  return(
    <>
      <div className="w-full h-dvh flex justify-center items-center">
        <div className="w-100 h-80 border border-gray-300 rounded-2xl px-6 flex flex-col justify-between">
          <div className="flex justify-center py-6">
            <a href="/">
              <img src="/images/logo.png" alt="logo" className="w-50" />
            </a>
          </div>
          <div>
            <div>
              <p>
                کد تأیید به شماره 09915455887 ارسال شد.
              </p>
              <p className="flex gap-1 text-xs my-2 text-(--text-secondary)">
                شماره شما 09915455887 نیست؟
                <a href="/login" className="text-(--primary-color)">
                  تغییر شماره
                </a>
              </p>
            </div>
            <div className="flex justify-between py-4" dir="ltr">
              {code.map((value, index) => (
                <input
                  key={index}
                  ref={(el) => (inputs.current[index] = el)}
                  placeholder='_'
                  value={value}
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  onKeyDown={(e) => {
                    if(e.key === "Backspace") {
                      const newCode = [...code];
                      newCode[index] = '';
                      setCode(newCode);
                      inputs.current[Math.max(index - 1, 0)].focus();
                    }
                  }}
                  onChange={(e) => {
                    if(e.target.value.length === 1) {
                      const newCode = [...code];
                      newCode[index] = e.target.value;
                      setCode(newCode);
                      if(index < code.length - 1) {
                        inputs.current[index + 1].focus();
                      }
                    }
                    else if(e.target.value.length > 1) {
                      let tempCode = e.target.value.split('');
                      const newCode = [...code];
                      for(let i = 0; i < tempCode.length; i++) {
                        if(index + i > code.length - 1) {
                          break;
                        }
                        newCode[index + i] = tempCode[i];
                        if(index + i + 1 <= inputs.current.length - 1) {
                          inputs.current[index + i + 1].focus();
                        }
                      }
                      setCode(newCode);
                    }
                  }}
                  className="border-2 border-gray-400 outline-none transition-all w-12 h-15 rounded-lg text-center text-2xl focus:border-(--primary-color)!"
                />
              ))}
            </div>
            <div className="mb-6">
              <a href="/profile/dashboard" className="w-full">
                <button className="w-full bg-(--primary-color) text-white py-2 rounded-lg">
                  تأیید کد
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}