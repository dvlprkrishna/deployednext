import React from "react";
import styles from "./CaseStudy.module.css";
import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { motion } from "framer-motion";

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

const CaseStudy = (props) => {
  const caseStudies = [
    {
      id: 1,
      title: "Adhesive Manufacturer cuts open ticket volume by 25% ...",
      thumbnail: "1",
      description:
        "Enabling organizations to optimize cost & enhance business processes with next-gen",
      tags: ["Automation"],
      date: "20 Jan 2023",
      cta: "Read article",
      link: "/",
    },
    {
      id: 2,
      title:
        "KSA based Coffee Brand Distributor enables inventory viability and....",
      thumbnail: "2",
      description:
        "Enabling organizations to optimize cost & enhance business processes with next-gen",
      tags: ["Cloudification"],
      date: "20 Jan 2023",
      cta: "Read article",
      link: "/",
    },
    {
      id: 3,
      title: "How Electrical Component Manufactures slashes 30% of  Component Manufactures slashes ",
      thumbnail: "3",
      description:
        "   ",
      tags: ["Transformation"],
      date: "20 Jan 2023",
      cta: "Read article",
      link: "/",
    },
  ];

  return (
    <div className={`max-w-screen-lg mx-auto px-[2rem] bg-[#fff]`}>
      <div className=" mt-[5em] mb-[2em]">
        <h4
          className={`${styles.subHead} font-medium text-[#0745D3] uppercase ribbon`}
        >
          Case Study
        </h4>
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
          <h3 className="text-4xl leading-[42px] font-bold">
            Delivering Results that Matters
          </h3>
          <p className="font-normal leading-[22px]">
            World&apos;s top-notch businesses choose us for our excellent
            technical acumen and proven standards as we deliver high-performing
            multidisciplinary solutions across the spectrum of industries.
          </p>
        </div>
      </div>
      <motion.div className="container grid grid-cols-1 md:grid-cols-3 gap-[30px]">
        {caseStudies.map((cases, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className={`${styles["iw-card"]} item`}
          >
            <div className={`${styles["iw-card-img-wrap"]} relative`}>
              <Image
                src={`/project-${cases.thumbnail}.png`}
                alt={`${cases.tags}`}
                width="315"
                height="200"
                className="w-full h-auto lg:w-315 lg:h-200"
              />
              <div className="absolute bottom-4 left-4 flex justify-start items-center space-x-2">
                <p className="text-sm bg-[#fff] text-[#101828] px-2 py-1 rounded font-medium ">
                  {`${cases.tags}`}
                </p>
              </div>
            </div>
            <div className={`${styles["iw-card-content"]}`}>
              {/* <p className={`text-[#98A2B3] font-bold`}>Cloudification</p> */}
              <p
                className={`uppercase  text-[#101828] font-medium text-[12px]`}
              >
                {`${cases.date}`}
              </p>
              <p
                className={`text-base font-semibold pt-[14px] pb-2 leading-[22px] text-[#101828]`}
              >
                {" "}
                {`${cases.title}`}{" "}
              </p>
              <p
                className={`${styles["iw-card-content-desc"]} text-clip  text-[#475467] text-sm`}
              >
                {`${cases.description}`}
              </p>

              <p className={styles["iw-card-content-link-wrap"]}>
                <Link
                  href={`${cases.link}`}
                  className={`${styles["iw-card-content-link"]} hover:underline mt-2 me-3 text-[#0745D3] text-sm font-medium`}
                >
                  {`${cases.cta}`}
                </Link>
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CaseStudy;
