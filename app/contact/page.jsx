"use client";

import { ContactDiaryIcon } from "@/components/common/Icon";
import InnerLayout from "@/components/common/InnerLayout";
import SectionTitleChip from "@/components/common/SectionTitleChip";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/xjkvozvw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        reset();
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <InnerLayout>
      <SectionTitleChip icon={<ContactDiaryIcon />} text="Contact" />
      <div className="mt-3 sm:mt-5 lg:mt-[30px]">
        <h1 className="commonParaHeading">Let&apos;s Work Together!</h1>
        <p className="mt-[10px] commonPara">
          Lorem ipsum dolor sit amet consectetu roin luctus adicing augue tellus
          mi habitass mper cursus vestib ulum pharetra malesuada.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-full">
          {/* First name and last name */}
          <div className="flex w-full items-center justify-center sm:justify-between gap-7 sm:gap-4 max-sm:flex-col">
            <div className="inputLayout">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                id="firstName"
                placeholder="John"
                className={`input ${
                  errors.firstName ? "!border-b-red-500" : "border-white/30"
                }`}
                {...register("firstName", {
                  required: "First name is required",
                })}
              />
              {errors.firstName && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </div>

            <div className="inputLayout">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                id="lastName"
                placeholder="Doe"
                className={`input ${
                  errors.lastName ? "!border-b-red-500" : "border-white/30"
                }`}
                {...register("lastName", {
                  required: "Last name is required",
                })}
              />
              {errors.lastName && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mt-7 sm:mt-10">
            <div className="inputLayout">
              <label htmlFor="email">Email Address*</label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@gmail.com"
                className={`input ${
                  errors.email ? "!border-b-red-500" : "border-white/30"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
          </div>

          {/* Message */}
          <div className="inputLayout mt-7 sm:mt-10">
            <label htmlFor="message">Message*</label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              className={`input resize-none ${
                errors.message ? "!border-b-red-500" : "border-white/30"
              }`}
              {...register("message", {
                required: "Message cannot be empty",
              })}
            />
            {errors.message && (
              <span className="text-red-500">{errors.message.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="relative max-w-[200px] w-full group mt-9 sm:mt-10 inline-block"
          >
            <div className="w-full relative z-[1] px-5 sm:px-6 py-2 sm:py-[14px] border border-primary font-medium text-primary hover:text-white transition-all duration-300 ease-linear flex items-center justify-center gap-1">
              <span className="text-lg md:text-xl text-white group-hover:text-primary transition-all duration-300 ease-linear">
                Submit
              </span>
            </div>
            <div className="absolute w-full group-hover:w-0 h-full top-0 left-0 duration-300 ease-linear bg-primary"></div>
          </button>
        </form>
      </div>
    </InnerLayout>
  );
}
