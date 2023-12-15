import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./testimonial.module.css";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

import Icon from "@mdi/react";
import { motion } from "framer-motion";

import { mdiDomain } from "@mdi/js";
import { Cursor } from "react-creative-cursor";

import "react-creative-cursor/dist/styles.css";

const Testimonials = () => {
  const clientTestimonials = [
    {
      id: 1,
      clientName: "",
      clientDesignation: "IT Manager",
      thumbnail: "1",
      description:
        "We would like to express our sincere appreciation for the Godrej Infotech team for delivering our Power BI solution on time and with great quality. We really like the data visualizations & dashboards provided and it makes it easier for us to get a good grip on our business performance indicators.",
      category: "static",
      link: "/",
    },

  ];

  return (
    <>
      {/* <Cursor isGelly={true} /> */}
      {/* <div className='w-screen-lg px-[2rem] mx-auto lg:px-0 lg:max-w-screen bg-[#F2F2F2]'>
        <div class="grid grid-cols-14 gap-4">
          <div class="col-start-3 col-span-4 ml-[30px] bg-[#f20]">
            <h4
              className={` font-medium text-[#0745D3] uppercase ribbon`}
            >
              CLIENT TESTIMONIALS
            </h4>
            <div className="flex flex-col gap-4">
              <h3 className="text-4xl leading-[42px] font-bold">
                What Experts think About us
              </h3>
              <p className="font-normal leading-[22px]">
                Discover how we have helped our clients to realize tangible outcomes aligned with their business goals.
              </p>
            </div>
          </div>
          <div class="col-start-7 col-span-8 bg-[#f20]">
          <Swiper
                className={`mySwiper pb-8`}
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[Autoplay, Pagination]}
              >
                {
                  clientTestimonials.map((ct, index) => (
                    <SwiperSlide key={ct.id} className='min-w-[300px] pb-8'>
                      <div className=''>
                        <div>
                          <Image src={`/testimonial-${ct.id}.png`}
                            alt="blog post"
                            width="315"
                            height="200" />
                        </div>
                        <div className=''>
                          <p
                            className={` text-clip text-[#475467] leading-[22px] text-sm pt-[16px]  pb-[14px]`}
                          >
                            {`“${ct.description}”`}
                          </p>
                        </div>
                        <div className='flex flex-row justify-start items-start'>
                          <div className='mr-4'>
                            <Icon path={mdiDomain} size={1} />
                          </div>
                          <div>
                            <p className='text-base font-medium text-[#101828] leading-[22px]'>{ct.clientName}</p>
                            <p className='text-sm font-normal text-[#101828] leading-[22px]'>{ct.clientDesignation}</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
          </div>
        </div>
      </div> */}

      <div className="w-screen-lg mx-auto px-[2rem]  lg:px-0 lg:max-w-screen bg-[#F5F5F5]">
        <div className="pt-[5em] pb-[2em]">
          <div className="grid lg:grid-cols-7 grid-cols-1 gap-4">
            <div className="col-span-1 col-start-1 col-end-2 lg:col-start-2 lg:col-end-4 ">
              <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                CLIENT TESTIMONIALS
              </h4>
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl leading-[42px] font-bold">
                  Delighted customers share their success experience
                </h3>
                <p className="font-normal leading-[22px]">
                  Discover how we have helped our clients to realize tangible
                  outcomes aligned with their business goals.
                </p>
              </div>
            </div>

            {/* Slider Section */}
            <div
              data-cursor-text="Drag"
              data-cursor-size="100px"
              className="col-span-1 col-start-1 col-end-2 lg:col-start-4 lg:col-span-4 hover:cursor-grab"
            >
              <Swiper
                className={`mySwiper pb-8`}
                slidesPerView={1}
                spaceBetween={10}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                modules={[Autoplay, Pagination]}
              >
                {clientTestimonials.map((ct, index) => (
                  <SwiperSlide key={ct.id} className="min-w-[300px] pb-8">
                    <div className="">
                      <div>
                        <Image
                          src={`/testimonial-${ct.id}.png`}
                          alt="blog post"
                          width="315"
                          height="200"
                        />
                      </div>
                      <div className="">
                        <p
                          className={` text-clip text-[#475467] leading-[22px] text-sm pt-[16px]  pb-[14px]`}
                        >
                          {`“${ct.description}”`}
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-start">
                        <div className="mr-4">
                          <Icon path={mdiDomain} size={1} />
                        </div>
                        <div>
                          <p className="text-base font-medium text-[#101828] leading-[22px]">
                            {ct.clientName}
                          </p>
                          <p className="text-sm font-normal text-[#101828] leading-[22px]">
                            {ct.clientDesignation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
