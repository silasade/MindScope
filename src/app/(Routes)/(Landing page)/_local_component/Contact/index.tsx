import React from "react";
import { Call, Home, Mail } from "@/app/(Routes)/_global_components/Icons";
type ContactType = {
  icons: React.ReactNode;
  title: string;
  subtitle: string;
  address: string;
};
const contacts: ContactType[] = [
  {
    icons: <Home color="white" width={30} height={30} />,
    title: "Visit Us",
    subtitle: "Come say hello at our office",
    address: "University of Ibadan",
  },
  {
    icons: <Mail color="white" width={30} height={30} />,
    title: "Mail Us",
    subtitle: "Our team is here to help and guide.",
    address: "silasadegoke331@gmail.com",
  },
  {
    icons: <Call color="white" width={30} height={30} />,
    title: "Call Us",
    subtitle: "Mon - Fri from 8am to 5pm",
    address: "+2349023413635",
  },
];
function Contact() {
  return (
    <div className="flex flex-col gap-8 items-center p-[30px] pt-30 pb-30">
      <h2 className="text-[18px] md:text-[36px] font-[700] text-center text-[#10182F] w-[75%]">
        We’re always available to answer your questions
      </h2>
      <div className="flex flex-col md:flex-row gap-6 md:gap-12">
        {contacts.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-[18px] items-center w-100 md:w-30 bg-[#10182f] p-12 rounded-lg hover:cursor-pointer md:hover:-translate-y-10 transition duration-355 ease-out"
            >
              <span className="bg-[#9747FF] rounded-[100%] p-6 w-fit h-fit">
                {item.icons}
              </span>
              <div className="flex flex-col gap-[6px] text-center text-white">
                <h4 className="text-[18px]">{item.title}</h4>
                <h5 className="text-[16px]">{item.subtitle}</h5>
                <h6 className="text-[16px]">{item.address}</h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contact;
