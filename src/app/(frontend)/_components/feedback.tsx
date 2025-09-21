import React from "react";
import { ArrowRight } from "lucide-react";
import { Squircle } from "@squircle-js/react";
import { Button } from "@/components/ui/button";
import { BodyIcons } from "@/icons";
import Image from "next/image";
export const FeedBack = () => {
  return (
    <div className="w-full py-[100px] bg-[url('/images/feedback-background.png')] bg-cover bg-center">
      <div className="max-w-[1008px] mx-auto">
        <div className="flex flex-col items-center gap-[60px]">
          <h2 className="text-4xl font-semibold text-[#101013] text-center">
            Don't just take our words
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[
              {
                id: 1,
                name: "Mark Zellers",
                title: "CEO, Co-Founder",
                rating: 5,
                quote:
                  "We're looking for people who share our vision! most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
                avatar: "/images/feedback-avatar.png",
              },
              {
                id: 2,
                name: "Mark Zellers",
                title: "CTO, Founder",
                rating: 5,
                quote:
                  "This platform has revolutionized how we manage our team. The time savings are incredible and our productivity has increased significantly.",
                avatar: "/images/feedback-avatar.png",
              },
              {
                id: 3,
                name: "Mark Zellers",
                title: "VP of Operations",
                rating: 5,
                quote:
                  "The administrative burden has been completely eliminated. We can now focus on what really matters - growing our business.",
                avatar: "/images/feedback-avatar.png",
              },
              {
                id: 4,
                name: "Mark Zellers",
                title: "Head of HR",
                rating: 5,
                quote:
                  "Our team collaboration has improved dramatically. The streamlined processes have made everyone's job easier and more efficient.",
                avatar: "/images/feedback-avatar.png",
              },
              {
                id: 5,
                name: "Mark Zellers",
                title: "Founder & CEO",
                rating: 5,
                quote:
                  "The ROI has been incredible. We've saved thousands of hours and our team is more motivated than ever before.",
                avatar: "/images/feedback-avatar.png",
              },
              {
                id: 6,
                name: "Mark Zellers",
                title: "COO, Co-Founder",
                rating: 5,
                quote:
                  "This solution has transformed our workflow. We're able to scale faster and more efficiently than we ever thought possible.",
                avatar: "/images/feedback-avatar.png",
              },
            ].map((testimonial) => (
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
