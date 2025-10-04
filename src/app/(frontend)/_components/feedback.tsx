import React from "react";
import { ArrowRight } from "lucide-react";
import { Squircle } from "@squircle-js/react";
import { Button } from "@/components/ui/button";
import { BodyIcons } from "@/icons";
import Image from "next/image";

const FEEDBACK_DATA = [
  {
    id: 1,
    name: "James W.",
    title: "Founder of HorizonTech",
    rating: 5,
    quote:
      "Payroll across three countries used to be a nightmare for us. With the strategies and tools recommended here, everything runs smoothly. We’ve saved weeks of admin time each month.",
    avatar: "/images/feedback/feedback-avatar2.png",
  },
  {
    id: 2,
    name: "Sofia M.",
    title: "HR Manager at GlobalLink",
    rating: 5,
    quote: "I was overwhelmed with compliance rules for international contractors. The guidance I received made the entire process simple and stress-free. Highly recommend!",
    avatar: "/images/feedback/feedback-avatar3.png",
  },
  {
    id: 3,
    name: "Daniel R.",
    title: "COO of BrightWorks",
    rating: 5,
    quote:
      "Scaling a remote team felt impossible until I learned how to structure our operations properly. Our team is now twice the size, and quality hasn’t dropped at all.",
    avatar: "/images/feedback/feedback-avatar4.png",
  },
  {
    id: 4,
    name: "Camelia K.",
    title: "CEO of NovaStart",
    rating: 5,
    quote:
      "I didn’t even know the risks of misclassifying employees until I came across this site. Fixing that early probably saved us thousands in fines.",
    avatar: "/images/feedback/feedback-avatar5.png",
  },
  {
    id: 5,
    name: "Michael L.",
    title: "OM at CloudWave",
    rating: 5,
    quote:
      "The consultation gave us clarity we didn’t have before. Our payroll is now automated, and we’re confident we’re meeting every compliance standard.",
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
]


export const FeedBack = () => {
  return (
    <div className="w-full py-[100px] bg-[url('/images/feedback-background.png')] bg-cover bg-center">
      <div className="max-w-[1008px] mx-auto">
        <div className="flex flex-col items-center gap-[60px]">
          <h2 className="text-4xl font-semibold text-[#101013] text-center">
            Don't just take our words
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {FEEDBACK_DATA.map((testimonial) => (
              <Squircle
                cornerRadius={22}
                cornerSmoothing={1}
                key={testimonial.id}
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
                      <h3 className="font-semibold text-[#101013] text-2xl">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-[#101013]">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        width="31"
                        height="30"
                        viewBox="0 0 31 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17.2319 1.98751C16.6541 0.597912 14.6849 0.597912 14.1071 1.98751L10.8131 9.90931L2.25768 10.5951C0.758279 10.7157 0.149879 12.5877 1.29288 13.5669L7.80888 19.1505L5.81808 27.4971C5.46888 28.9605 7.06188 30.1179 8.34708 29.3331L15.6695 24.8601L22.9937 29.3331C24.2771 30.1179 25.8701 28.9605 25.5209 27.4971L23.5301 19.1505L30.0461 13.5669C31.1891 12.5877 30.5807 10.7157 29.0813 10.5969L20.5277 9.90931L17.2319 1.98751Z"
                          fill="#FFAE00"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-base text-[#212529]/70 leading-[23px] flex-1">
                  "{testimonial.quote}"
                </p>
              </Squircle>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
