"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Squircle } from "@squircle-js/react";

// Zod schema for form validation
const joinFormSchema = z.discriminatedUnion("option", [
  z.object({
    option: z.literal("deals"),
    fullName: z.string().optional(),
    location: z.string().optional(),
    email: z.string().optional(),
    phone: z.string().optional(),
  }),
  z.object({
    option: z.literal("work"),
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    location: z.string().min(1, "Please select a location"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(10, "Please enter a valid phone number"),
  }),
]);

type JoinFormData = z.infer<typeof joinFormSchema>;

const JoinPage = () => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState<"deals" | "work" | null>(
    null
  );
  const searchParams = useSearchParams();
  const dealParams = searchParams.get("deal")
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<JoinFormData>({
    resolver: zodResolver(joinFormSchema),
    defaultValues: {
      option: "deals",
      fullName: "",
      location: "",
      email: "",
      phone: "",
    },
  });
  useEffect(() => {
    if (dealParams) {
      setValue("option", dealParams as "deals" | "work")
    }
  }, [])
  const watchedOption = watch("option");

  const onSubmit = (data: JoinFormData) => {
    console.log("Form submitted with data:", data);
    if (data.option === "deals") {
      // Redirect to featured page
      router.push("/featured");
    } else {
      // Handle work with us form submission
      console.log("Work with us form submitted:", data);
      // You can add your submission logic here
      alert("Thank you for your interest! We'll get back to you soon.");
    }
  };

  const handleOptionChange = (option: "deals" | "work") => {
    setValue("option", option);
    setSelectedOption(option);
  };

  return (
    <div className="flex justify-center items-center pt-[100px] pb-[200px] px-4 bg-[url('/images/blog-background.png')] bg-top bg-cover">
      <div className="w-full max-w-[458px] ">
        <Squircle
          cornerRadius={20}
          cornerSmoothing={1}
          height={watchedOption === "deals" ? 470 : 900}
          className="bg-white px-[30px] py-10 w-full flex flex-col gap-10"
        >
          <div>
            <h1 className="text-[32px] leading-[32px] font-bold mb-[10px] text-black">
              {selectedOption === "work" ? "Work with us" : "Join Us"}
            </h1>
            <p className="text-black/50 leading-6 text-sm">
              Notify your team/members of the latest workplace with
              <br />
              instant Slack messages.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
            {/* Radio Button Options */}
            <div className="flex flex-col gap-[5px]">
              <p className="text-xs font-semibold tracking-[-2%] text-black ml-5">
                Select what you want?
              </p>
              <div className="flex gap-4">
                <label className="flex-1">
                  <input
                    type="radio"
                    value="deals"
                    checked={watchedOption === "deals"}
                    onChange={() => handleOptionChange("deals")}
                    className="sr-only"
                  />
                  <div
                    className={`w-[194px] h-[121px] flex items-center justify-center  rounded-[17px] cursor-pointer transition-all bg-[#112200]/10  text-lg border-2 ${watchedOption === "deals"
                      ? " font-semibold text-black border-black"
                      : "font-normal text-black/50 border-transparent"
                      }`}
                  >
                    Get deals
                  </div>
                </label>
                <label className="flex-1">
                  <input
                    type="radio"
                    value="work"
                    checked={watchedOption === "work"}
                    onChange={() => handleOptionChange("work")}
                    className="sr-only"
                  />
                  <div
                    className={`w-[194px] h-[121px] flex items-center justify-center rounded-[17px] cursor-pointer transition-all   bg-[#112200]/10  text-lg border-2${watchedOption === "work"
                      ? " font-semibold text-black border-black"
                      : "font-normal text-black/50 border-transparent"
                      }`}
                  >
                    Work with us
                  </div>
                </label>
              </div>
            </div>

            {/* Form Fields - Show only when Work with us is selected */}
            {watchedOption === "work" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What's your full name?
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    placeholder="Calvin Harris"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008300] focus:border-transparent"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Where are you located?
                  </label>
                  <select
                    {...register("location")}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008300] focus:border-transparent"
                  >
                    <option value="">Select location</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Australia">Australia</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.location.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What is your email address?
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="example@company.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008300] focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What is your phone number?
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="3 XXX XXX XXXX"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008300] focus:border-transparent"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex flex-col gap-[10px]">
              <Button
                type="submit"
                className="flex-1 bg-[#008300] hover:bg-[#006600] text-white py-5  rounded-[15px] font-bold text-[20px] min-h-[70px]"
              >
                {watchedOption === "deals" ? "Next" : "Claim Now"}
              </Button>
              {watchedOption === "work" && (
                <Button
                  type="button"
                  variant="default"
                  onClick={() => handleOptionChange("deals")}
                  className="flex-1 bg-[#ABFF4F]/30 hover:bg-[#ABFF4F] text-black py-5  rounded-[15px] font-bold text-[20px] min-h-[70px] "
                >
                  Back
                </Button>
              )}
            </div>
          </form>
        </Squircle>
      </div>
    </div>
  );
};

export default JoinPage;
