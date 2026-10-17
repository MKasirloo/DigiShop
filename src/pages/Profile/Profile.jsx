import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ProfileSidebar from "../../components/ProfileSidebar";
import { CheckIcon, CrossIcon, SyncIcon } from "../../assets/icons";

export default function Profile() {
  return(
    <>
      <Header />
      <Container>
        <div className="flex flex-wrap gap-4">
          <ProfileSidebar active={"dashboard"} className="max-sm:grow" />
          <div className="flex-1 flex-wrap">
            <div className="border border-gray-300 rounded-lg h-fit p-4 min-w-[250px] max-sm:min-w-[50%]">
              <h3 className="relative w-fit mb-4 pb-1 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[50%] before:h-0.5 before:bg-(--primary-color)">
                سفارش های من
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <a href="/profile/orders" className="min-w-50 flex justify-between items-center border border-gray-300 rounded-lg px-4 py-2">
                  <div className="flex flex-col gap-2 max-lg:gap-1 items-center justify-center">
                    <div className="relative">
                      <div className="blur-lg absolute inset-3 bg-blue-300 rounded-full z-0 opacity-50 translate-2.5"></div>
                      <SyncIcon className="relative z-10 w-15 text-blue-700" />
                    </div>
                    <span className="text-sm text-center text-blue-700">
                      در حال پردازش
                    </span>
                  </div>
                  <div className="flex flex-col justify-center h-full items-center">
                    <div className="text-4xl max-md:text-3xl font-bold text-(--text-natural)">
                      1
                    </div>
                    <div className="text-(--text-secondary) text-sm">
                      سفارش
                    </div>
                  </div>
                </a>
                <a href="/profile/orders" className="min-w-50 flex justify-between items-center border border-gray-300 rounded-lg px-4 py-2">
                  <div className="flex flex-col gap-2 max-lg:gap-1 items-center justify-center">
                    <div className="relative">
                      <div className="blur-lg absolute inset-3 bg-green-300 rounded-full z-0 opacity-50 translate-2.5"></div>
                      <CheckIcon className="relative z-10 w-15 text-green-700" />
                    </div>
                    <span className="text-sm text-center text-green-700">
                      تحویل داده شده
                    </span>
                  </div>
                  <div className="flex flex-col justify-center h-full items-center">
                    <div className="text-4xl max-md:text-3xl font-bold text-(--text-natural)">
                      3
                    </div>
                    <div className="text-(--text-secondary) text-sm">
                      سفارش
                    </div>
                  </div>
                </a>
                <a href="/profile/orders" className="min-w-50 flex justify-between items-center border border-gray-300 rounded-lg px-4 py-2">
                  <div className="flex flex-col gap-2 max-lg:gap-1 items-center justify-center">
                    <div className="relative">
                      <div className="blur-lg absolute inset-3 bg-red-300 rounded-full z-0 opacity-50 translate-2.5"></div>
                      <CrossIcon className="relative z-10 w-15 text-red-700" />
                    </div>
                    <span className="text-sm text-center text-red-700">
                      لغو شده
                    </span>
                  </div>
                  <div className="flex flex-col justify-center h-full items-center">
                    <div className="text-4xl max-md:text-3xl font-bold text-(--text-natural)">
                      2
                    </div>
                    <div className="text-(--text-secondary) text-sm">
                      سفارش
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}