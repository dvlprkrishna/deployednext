"use client";
import EntIntro from "@/components/EntIntro";
import Subscription from "@/components/Subscription";

import Image from "next/image";

import Icon from "@mdi/react";
import Link from "next/link";
import { mdiArrowRight } from "@mdi/js";
import SectionNav from "@/components/SectionNav";
import InfotechWeeklyAlt from "@/sections/infotechWeeklyAlt/InfotechWeeklyAlt";

import inforCloudSuite from "../../../../../../public/inforCloudSuite.png";
import Dynamic365 from "../../../../../../public/Dynamic365.png";
import Oracle from "../../../../../../public/Oracle.png";
import checkout from "../../../../../../public/checkout.png";
import MLExpertise from "../../../../../../public/MLExpertise.png";
/**
 * Imported logos
 */
import MSAzure from "../../../../../../public/ai-ml/ms-azure.png";
import GoogleAI from "../../../../../../public/ai-ml/google-ai-logo.png";
import TensorFlow from "../../../../../../public/ai-ml/tensorflow-logo.png";

import styles from "./page.module.css";
import WhySection from "@/components/WhySection";
import { AnimatePresence, motion } from "framer-motion";
import Benefits from "@/components/Benefits";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 * index,
    },
  }),
};

const AIOfferings = [
  {
    _id: 1,
    title: "Computer Vision ",
    desc: "We specialize in custom video and image analysis tool development for computer vision and machine vision systems. Our expert team leverages advanced technologies like OpenCV to optimize existing computer vision algorithms or develop entirely new algorithms based on mathematical models ",
    cta: "Explore Service",
    ctaUrl: "/",
    links: [
      {
        title: "Real-time Object Detection",
        url: "/",
      },
      {
        title: "Data Labelling",
        url: "/",
      },
      {
        title: "Security Solution",
        url: "/",
      },
      {
        title: "Equipment Monitoring",
        url: "/",
      },
    ],
  },
  {
    _id: 2,
    title: "Speech &  Language ",
    desc: "Our reliable approach to Speech and Language AI empowers your business with the tools needed to elevate customer experiences, streamline operations and stand tall in competition ",
    cta: "Explore Service",
    ctaUrl: "/",
    links: [
      {
        title: "Transcription Services",
        url: "/",
      },
      {
        title: "Speech recognition",
        url: "/",
      },
      {
        title: "Language translation",
        url: "/",
      },
    ],
  },
  {
    _id: 3,
    title: "Document  Understanding",
    desc: "We help you to achieve error-free AI-driven data capture from diverse document types, including invoices, receipts, driver's licenses, passports, and more. Our approach helps your business with unstructured data, whether it's in the form of text documents, images, voice or videos",
    cta: "Explore Service",
    ctaUrl: "/",
    links: [
      {
        title: "Optical Character Recognition (OCR)",
        url: "/",
      },
      {
        title: "Text extraction",
        url: "/",
      },
      {
        title: "Optical Character Recognition - PDF",
        url: "/",
      },
      {
        title: "Account Payable, Bank Reconciliation, Invoice matching, Data Scraping ",
        url: "/",
      },
    ],
  },

  {
    _id: 4,
    title: "Conversational AI",
    desc: "Ensuring a more human-centric engagement with data, we provide solutions that facilitate smarter, customer-centric decision-making.",
    cta: "Explore Service",
    ctaUrl: "/",
    links: [
      {
        title: "Document processing",
        url: "/",
      },
      {
        title: "Sentiment analysis",
        url: "/",
      },
      {
        title: "Chatbots and Virtual Assistants",
        url: "/",
      },
    ],
  },
];
const ChoiceSlider = [
  {
    _id: 1,
    title: "Healthcare",
    imgUrl: "1",
    url: "/",
  },
  {
    _id: 2,
    title: "Automotive",
    imgUrl: "2",
    url: "/",
  },
  {
    _id: 3,
    title: "Logistic",
    imgUrl: "3",
    url: "/",
  },
  {
    _id: 4,
    title: "Retail",
    imgUrl: "4",
    url: "/",
  },
  {
    _id: 5,
    title: "Manufacturing",
    imgUrl: "5",
    url: "/",
  },
];
const BenefitsData = [
  {
    _id: 1,
    icon: "gear",
    title: "Process and analyse vast volumes of data and round-the-clock assistance to customers",
  },
  {
    _id: 2,
    icon: "diamond",
    title: "Anticipate future outcomes based on historical data, making informed decisions",
  },
  {
    _id: 3,
    icon: "eyeGear",
    title: "Effortless communication and efficient information retrieval through Natural Language Processing",
  },
  {
    _id: 4,
    icon: "gear",
    title: "Optimize supply chain management, predict maintenance need, and elevate quality control, resulting in higher productivity",
  },
  {
    _id: 5,
    icon: "diamond",
    title: "Revolutionising Healthcare with medical image analysis",
  }
];

const MLData = [{
  _id:1,
  imgURL: MLExpertise,
  title:"Deep Learning",
  subTitle:"Our deep learning creates solutions that automate complex tasks data-drive",
  ctaURL:""
},{
  _id:2,
  imgURL: MLExpertise,
  title:"Supervised Learning",
  subTitle:"We deliver customer sentiment analysis, image recognition and predictive maintenance services that help you make informed decisions and create happier customers.",
  ctaURL:""
},{
  _id:3,
  imgURL: MLExpertise,
  title:"Unsupervised Learning",
  subTitle:"With our unsupervised learning services reveal hidden patterns for business sustainability through data exploration without constraints, helping in customer segmentation, anomaly detection and more.",
  ctaURL:""
},{
  _id:4,
  imgURL: MLExpertise,
  title:"Reinforcement Learning",
  subTitle:"Our reinforcement learning expertise is like a guiding hand for applications such as autonomous systems and resource optimisation.",
  ctaURL:""
}]
const page = () => {
  return (
    <>
      <EntIntro
        title="Artificial Intelligence &
        Machine Learning"
        desc="Leading Your Success Way with Intelligent and Futuristic
        Business Solutions"
        cta="Let's Connect"
        width="60%"
        video="https://gitl-usa.s3.us-west-1.amazonaws.com/banner1.mp4"
      />
      <>
        <SectionNav
          arr={[
            {
              _id: 1,
              title: "Enterprise suite",
              link: "#about",
            },
            {
              _id: 2,
              title: "Act Cards",
              link: "#actCards",
            },
            {
              _id: 3,
              title: "Employee Experience",
              link: "#empExp",
            },
            {
              _id: 4,
              title: "Spotlight",
              link: "#spotlight",
            },
          ]}
        />
      </>

      {/* Overview  */}
      <>
        <div className={` w-full bg-[#FFF] pt-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div>
                <h4 className={` font-medium text-[#0745D3] uppercase ribbon`}>
                  AI & ML
                </h4>
              </div>
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold w-[90%]">
                  Overview
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  With our pragmatic approach and AI and ML capabilities, we
                  optimize business parameters ensuring rise in your business
                  efficiency. Join us in embracing the power of AI and ML, and
                  let&apos;s start journey together towards innovation and
                  success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Our Ai Offerings */}
      <>
        <div className={` w-full bg-[#FFF] py-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Our AI Offerings
                </h3>
              </div>
            </div>
            <div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                  We are committed to bringing the power of AI to your business
                  operations, providing tailored solutions that drive efficiency
                  and growth for your data driven future
                </p>
              </div>
            </div>
          </div>
          <div className="text-left max-w-screen-xl md:max-w-screen-2xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-4">
            {AIOfferings.map((item, index) => (
              <div className="bg-[#EDF1FF] p-5" key={item._id}>
                <div className="p-4 h-full flex flex-col justify-between">
                  <div>
                    <p className="text-[#101828] font-bold text-[30px] leading-[36px]">
                      {item.title}
                    </p>
                    <p className="text-[#101828] text-[12px] font-normal my-4 leading-[18px]">
                      {item.desc}
                    </p>
                  </div>
                  <div>
                    <ul className="my-8">
                      {item.links.map((list, index) => (
                        <li
                          key={index}
                          className=" border-b-2 border-[#DBDBDB] py-2 "
                        >
                          <Link
                            href={list.url}
                            className="text-[#101828] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                          >
                            {list.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={item.ctaUrl}
                      className="text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                    >
                      {item.cta}{" "}
                      <Icon
                        path={mdiArrowRight}
                        style={{ marginLeft: "0.5em" }}
                        size={1}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>

      {/* ML Expertise */}
      <>
        <div className={` w-full bg-[#F2F4F7] py-32`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] ">
            <div className="bg-[#F2F4F7] grid grid-cols-1 gap-5 sm:grid-cols-2 relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  ML Expertise
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] ">
                  We specialize in developing algorithms to make your operations
                  smarter, faster and more reliable.
                </p>
              </div>
            </div>
          </div>

          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 gap-10 sm:grid-cols-2">
            {MLData.map((item, index) => (
              <div className="" key={index}>
                <Image
                  src={item.imgURL}
                  className="w-[100%]"
                  alt="ML Expertise"
                />
                <div className="p-4 pb-0">
                  <p className="text-[#101828] font-medium text-base leading-[22px]">
                    {item.title}
                  </p>
                  <p className="text-[#475467] text-[14px] font-normal my-4 leading-[22px]">
                    {item.subTitle}
                  </p>
                  <Link
                    href={item.ctaURL}
                    className="text-[#0745D3] text-[14px] font-medium leading-[22px] w-fit  flex transition-all hover:opacity-75  "
                  >
                    Know More{" "}
                    <Icon
                      path={mdiArrowRight}
                      style={{ marginLeft: "0.5em" }}
                      size={1}
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>

      {/* AI & ML Partners */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                AI/ML Platforms 
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] ">
                Our proficiency with AI/ML platforms paves the way for progressive business results with the intersection of innovation and efficiency.  
                </p>
              </div>
              <div className="flex justify-center items-center gap-20 p-5 mb-5">
                <div>
                  <Image src={MSAzure} alt="Microsoft Azure"/>
                </div>
                <div>
                  <Image src={GoogleAI} alt="Google AI" />
                </div>
                <div>
                  <Image src={TensorFlow} alt="TensorFlow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Benefits Vertical Slider */}
      <Benefits
        ribbon="Benefits "
        ribbonTxtWhite="true"
        title="AI&ML "
        desc="Artificial Intelligence (AI) and Machine Learning (ML) are driving transformative changes offering a multitude of benefits that redefine the way we do business."
        arr={BenefitsData}
      ></Benefits>

      {/* Industry Spotlight Slider */}
      <>
        <div className={` w-full bg-[#FFF] pt-20`}>
          <div className="text-left max-w-screen-xl md:max-w-screen-xl mb-5 mx-auto p-5 pb-0 px-[2rem] grid grid-cols-1 ">
            {/* left */}
            <div className="bg-[#FFF] flex items-start flex-col justify-between  relative">
              <div className="">
                <h3 className="text-[42px]  leading-[54px] mb-3 font-bold ">
                  Industries Spotlight
                </h3>
              </div>
              <div>
                <p className="font-medium leading-[22px] md:w-[90%] p-5 ">
                We help in shaping technology prerequisites and deliver value to customers, catering to diverse industries across the spectrum. 
                </p>
              </div>
              <div className="flex justify-center items-center max-w-screen-xl w-full">
                <div>
                  <Swiper
                    slidesPerView={"auto"}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {ChoiceSlider.map((item) => (
                      <>
                        <SwiperSlide
                          key={item._id}
                          className="w-[283px] max-w-[283px] mr-4  relative group"
                        >
                          <div className="relative overflow-hidden">
                            <Image
                              src={`/industrySpotlight/${item.imgUrl}.png`}
                              height={350}
                              width={283}
                              alt="icon"
                              className=" transition-transform transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity  ">
                              <h3 className="text-[22px] text-white absolute bottom-4 left-4 w-fit leading-[30px] font-bold mb-5">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                        </SwiperSlide>
                      </>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* Why choose gitl and ai and ml */}
      <WhySection
        ribbon="Let's Collaborate and Make it Happen"
        title="Why Choose GITL for AI and ML?"
        desc="It is our Hexagon EAM expertise , experience and commitment to excellence that sets us apart in a competitive landscape."
        arr={[
          {
            _id: 1,
            desc: "<span style='color: #4C6FFF;'> Deep understanding of your specific business domain </span> is crucial for creating AI and ML solutions that truly meet your needs",
            icon: "",
          },
          {
            _id: 2,
            desc: "<span style='color: #4C6FFF;'> Agile approach  </span> that keeps projects on cutting edge .",
            icon: "",
          },
          {
            _id: 3,
            desc: "Fully signed Non-Disclosure Agreement (NDA) to <span style='color: #4C6FFF;'> protect your sensitive information.</span>",
            icon: "",
          },
          {
            _id: 4,
            desc: "<span style='color: #4C6FFF;'> Exceed customer expectations</span> and deliver AI and ML solutions in most effective way.",
            icon: "",
          },
        ]}
        renderInlineSpans={true}
      ></WhySection>

      {/* Subscription */}
      <Subscription
        title="Ready for Transformation with"
        blue="AI and ML?"
        title2=""
        desc="Let's embark on your journey together aligned with your business goals."
      />

      {/* Infotech Weekly Updates */}
      <InfotechWeeklyAlt />
    </>
  );
};

export default page;
