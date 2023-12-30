import React from "react";
import peoples from "../../public/components/peoples.png";
import Image from "next/image";
import Link from "next/link";
import Icon from "@mdi/react";
import { mdiArrowRight } from "@mdi/js";
import { mdiArrowTopRight } from "@mdi/js";
import { mdiPlayCircle } from "@mdi/js";
const JoinExpTeam = () => {
  return (
    <div
      className={` w-full bg-[#31094a] bg-gradient-to-r from-[#31094a] via-[#1d0845]  to-[#0e002a]  text-[#DBDBDB]  `}
    >
      <div className="text-left max-w-screen-xl md:max-w-screen-xl  mx-auto   pb-0 py-[2rem] sm:py-0 px-[2rem] grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* left */}
        <div className=" flex flex-col justify-center text-[#F5F5F5] relative">
          <div className="">
            <h3 className="text-[42px]  leading-[54px] mb-5 font-bold w-[90%]">
              Join our exceptional cloud team working for the foremost
              enterprises across the globe
            </h3>
            <div className="z-50 flex gap-4 flex-col sm:flex-row justify-start items-center align-middle">
              <Link
                href={"/"}
                className="min-w-max flex bg-[#F5F5F5] py-2 px-10 border-2 border-[#F5F5F5] font-medium text-base text-[#101828] rounded-sm transition-all mb-3 hover:opacity-95 hover:scale-105"
              >
                Take the Cloud Career Leap
                <Icon
                  path={mdiArrowTopRight}
                  style={{ marginLeft: "0.5em" }}
                  size={1}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* right */}
        <div>
          <div>
            <div className=" ">
              <Image src={peoples} alt="peoples" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinExpTeam;
