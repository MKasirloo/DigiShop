import { ChevronLeftIcon, TomanThinIcon } from "../../assets/icons";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProfileSidebar from "../../components/ProfileSidebar";

import orders from "../../data/orders";

export default function Orders() {
  const statusLabels = {
    done: "انجام شده",
    processing: "در حال پردازش",
    waitingForPayment: "در انتظار پرداخت",
    cancelled: "لغو شده"
  }
  orders.sort((a, b) => {
    const A = a.date.split('/').map(Number);
    const B = b.date.split('/').map(Number);
    return(B[0] - A[0] || B[1] - A[1] || B[2] - A[2]);
  })
  return(
    <>
      <Header />
      <Container>
        <div className="flex max-sm:flex-wrap gap-4">
          <ProfileSidebar active={"orders"} className="max-sm:grow shrink-0" />
          <div className="w-fit overflow-x-auto border border-gray-300 rounded-lg p-4">
            <h3 className="relative w-fit mb-4 pb-1 before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[50%] before:h-0.5 before:bg-(--primary-color)">
              سفارش های من
            </h3>
            <div className="w-full overflow-x-auto">
              <div>
                <table className="w-200 shrink-0 table-auto rounded-lg border-separate border border-gray-300 overflow-x-auto">
                  <thead>
                    <tr>
                      <th className="p-2 bg-violet-200 rounded-tr-md">شماره سفارش</th>
                      <th className="p-2 bg-violet-200">وضعیت سفارش</th>
                      <th className="p-2 bg-violet-200">مبلغ سفارش</th>
                      <th className="p-2 bg-violet-200">تاریخ</th>
                      <th className="p-2 bg-violet-200 rounded-tl-md">پیگیری سفارش</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map(o => {
                      let bgColor, dotColor, textColor;
                      switch (o.status) {
                        case "done":
                          bgColor = "bg-green-100";
                          dotColor = "bg-green-300";
                          textColor = "text-green-900";
                          break;
                      
                        case "processing":
                          bgColor = "bg-blue-100";
                          dotColor = "bg-blue-300";
                          textColor = "text-blue-900";
                          break;
                      
                        case "waitingForPayment":
                          bgColor = "bg-yellow-100";
                          dotColor = "bg-yellow-300";
                          textColor = "text-yellow-900";
                          break;
                      
                        case "cancelled":
                          bgColor = "bg-red-100";
                          dotColor = "bg-red-300";
                          textColor = "text-red-900";
                          break;
                      
                        default:
                          bgColor = "bg-gray-100";
                          dotColor = "bg-gray-300";
                          textColor = "text-gray-900";
                      }
                      return(
                        <tr key={o.id} className="*:font-normal even:bg-gray-100">
                          <th>{'#' + o.id}</th>
                          <th>
                            <div className="flex justify-center">
                              <div className={`flex rounded-full ${bgColor} w-[150px] text-sm gap-2 px-2 py-1 items-center`}>
                                <div className={`w-3 h-3 rounded-full ${dotColor}`}></div>
                                <div className={textColor}>
                                  {statusLabels[o.status]}
                                </div>
                              </div>
                            </div>
                          </th>
                          <th className="flex gap-1 justify-center">
                            <span>
                              {o.amount.toLocaleString()}
                            </span>
                            <TomanThinIcon className="w-4" />
                          </th>
                          <th>{o.date}</th>
                          <th className="flex justify-center items-center">
                            <a href="#" className="flex gap-1 justify-center items-center my-2 text-(--primary-color) border-2 border-(--primary-color) w-fit rounded-lg p-1.5 text-sm bg-white">
                              پیگیری سفارش
                              <ChevronLeftIcon className="w-5 h-5" />
                            </a>
                          </th>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}