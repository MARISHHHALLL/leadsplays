import { ArrowRight } from "lucide-react";
import { Squircle } from "@squircle-js/react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FEEDBACK_DATA = [
  {
    id: 1,
    name: "James W.",
    title: "Founder of HorizonTech",
    rating: 5,
    quote:
      "Payroll across three countries used to be a nightmare for us. With the strategies and tools recommended here, everything runs smoothly. We've saved weeks of admin time each month.",
    avatar: "/images/feedback/feedback-avatar2.png",
  },
  {
    id: 2,
    name: "Sofia M.",
    title: "HR Manager at GlobalLink",
    rating: 5,
    quote:
      "I was overwhelmed with compliance rules for international contractors. The guidance I received made the entire process simple and stress-free. Highly recommend!",
    avatar: "/images/feedback/feedback-avatar3.png",
  },
  {
    id: 3,
    name: "Daniel R.",
    title: "COO of BrightWorks",
    rating: 5,
    quote:
      "Scaling a remote team felt impossible until I learned how to structure our operations properly. Our team is now twice the size, and quality hasn't dropped at all.",
    avatar: "/images/feedback/feedback-avatar4.png",
  },
  {
    id: 4,
    name: "Camelia K.",
    title: "CEO of NovaStart",
    rating: 5,
    quote:
      "I didn't even know the risks of misclassifying employees until I came across this site. Fixing that early probably saved us thousands in fines.",
    avatar: "/images/feedback/feedback-avatar5.png",
  },
  {
    id: 5,
    name: "Michael L.",
    title: "OM at CloudWave",
    rating: 5,
    quote:
      "The consultation gave us clarity we didn't have before. Our payroll is now automated, and we're confident we're meeting every compliance standard.",
    avatar: "/images/feedback/feedback-avatar6.png",
  },
  {
    id: 6,
    name: "Priya S.",
    title: "Co-Founder of RemBridge",
    rating: 5,
    quote:
      "Managing a team spread across five countries was overwhelming. With the right systems in place, we finally feel in control of our operations.",
    avatar: "/images/feedback/feedback-avatar.png",
  },
];

export const FeedBack = () => {
  return (
    <section className="w-full bg-[url('/images/feedback/feedback-background.png')] bg-cover bg-center">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-semibold text-[#101013] sm:text-4xl">
            Don't just take our words
          </h2>
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEEDBACK_DATA.map((testimonial) => (
            <Squircle
              key={testimonial.id}
              cornerRadius={22}
              cornerSmoothing={1}
              className="bg-gradient-to-t from-[#EBFFD6] to-white rounded-2xl p-[33px] flex flex-col gap-5 h-[383px] w-[322px]"
            >
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5">
                  <Squircle
                    cornerRadius={20}
                    height={80}
                    width={80}
                    className="size-20 bg-gray-300 flex items-center justify-center"
                  >
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.id}-avatar`}
                      width={80}
                      height={80}
                      className="object-cover h-full w-full"
                    />
                  </Squircle>
                  <div>
                    <h3 className="text-xl font-semibold text-[#101013]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-[#101013]/70">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.3402 1.60683C12.8314 0.365462 11.1587 0.365465 10.6499 1.60683L8.20838 7.66242L1.47842 8.21319C0.144878 8.32443 -0.406323 9.94366 0.560911 10.7765L5.65852 15.2171L4.28432 21.7679C4.00999 23.0911 5.40391 24.1113 6.57011 23.4292L11.9951 20.2468L17.4218 23.4292C18.5879 24.1113 19.9819 23.0911 19.7075 21.7679L18.3333 15.2171L23.431 10.7765C24.3972 9.94366 23.846 8.32443 22.5125 8.21319L15.7825 7.66242L13.3402 1.60683Z"
                        fill="#FFAE00"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-sm leading-6 text-[#212529]/80 sm:text-base">
                  "{testimonial.quote}"
                </p>
              </div>
            </Squircle>
          ))}
        </div>
      </div>
    </section>
  );
};
