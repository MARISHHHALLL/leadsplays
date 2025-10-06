"use client";

import React, { Suspense, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Squircle } from "@squircle-js/react";
import toast from "react-hot-toast";

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
  return (
    <Suspense fallback={null}>
      <JoinForm />
    </Suspense>
  );
};

export default JoinPage;

const JoinForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dealParam = searchParams.get("deal");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
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

  const watchedOption = watch("option");

  useEffect(() => {
    if (dealParam === "deals" || dealParam === "work") {
      setValue("option", dealParam);
    }
  }, [dealParam, setValue]);

  const onSubmit = async (data: JoinFormData) => {
    if (data.option === "deals") {
      router.push("/featured");
      return;
    } else {
      const response = await fetch("/api/mutateUsers", {
        method: "POST",
        body: JSON.stringify(data)
      })
      const res = await response.json()
      if (res.success) {
        toast.success(`Demand created!`)
        reset()
      }
    }

  };

  const handleOptionChange = (option: "deals" | "work") => {
    setValue("option", option, { shouldValidate: true });
  };

  return (
    <section className="bg-[url('/images/blog-background.png')] bg-top bg-cover">
      <div className="mx-auto w-full md:max-w-[458px] max-w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Squircle
          cornerRadius={24}
          cornerSmoothing={1}
          className="flex flex-col md:w-[460px] w-full gap-8 bg-white p-6 shadow-xl sm:p-10"
        >
          <div className="space-y-3 text-left">
            <h1 className="text-3xl font-bold text-black sm:text-4xl">
              {watchedOption === "work" ? "Work with us" : "Join Us"}
            </h1>
            <p className="text-sm leading-6 text-black/60 sm:text-base">
              Notify your team of the latest workplace updates with instant Slack messages.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/70">
                Select what you want
              </p>
              <div className="grid gap-4 grid-cols-2 mt-5 md:mt-0">
                {[
                  { value: "deals", label: "Get deals" },
                  { value: "work", label: "Work with us" },
                ].map((option) => {
                  const isActive = watchedOption === option.value;
                  return (
                    <label key={option.value} className="block">
                      <input
                        type="radio"
                        name="option"
                        value={option.value}
                        checked={isActive}
                        onChange={() => handleOptionChange(option.value as "deals" | "work")}
                        className="sr-only"
                      />
                      <div
                        className={`md:w-[194px] md:h-[121px] w-[140px] h-[90px] flex items-center justify-center rounded-[17px] cursor-pointer transition-all bg-[#112200]/10 text-sm md:text-lg border-2 ${isActive
                          ? "font-semibold text-black border-black"
                          : "font-normal text-black/50 border-transparent"
                          }`}
                      >
                        {option.label}
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {watchedOption === "work" && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    What's your full name?
                  </label>
                  <input
                    {...register("fullName")}
                    type="text"
                    placeholder="Calvin Harris"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#008300]"
                  />
                  {errors.fullName && (
                    <p className="text-sm text-red-500">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Where are you located?
                  </label>
                  <select
                    {...register("location")}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#008300]"
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
                    <p className="text-sm text-red-500">{errors.location.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    What is your email address?
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="example@company.com"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#008300]"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    What is your phone number?
                  </label>
                  <input
                    {...register("phone")}
                    type="tel"
                    placeholder="3 XXX XXX XXXX"
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#008300]"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-3">
              <Button
                type="submit"
                className="w-full rounded-[15px] bg-[#008300] md:py-4 md:h-[70px] py-3 h-[60px] text-base md:text-[20px] font-bold text-white hover:bg-[#006600] sm:py-4"
              >
                {watchedOption === "deals" ? "Next" : "Work with us"}
              </Button>
              {watchedOption === "work" && (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => handleOptionChange("deals")}
                  className="w-full rounded-[15px]  md:py-4 md:h-[70px] py-3 h-[60px] text-base md:text-[20px] font-bold border-[#ABFF4F]/60 bg-[#ABFF4F]/20   text-black hover:bg-[#ABFF4F]/40"
                >
                  Back
                </Button>
              )}
            </div>
          </form>
        </Squircle>
      </div>
    </section>
  );
};


