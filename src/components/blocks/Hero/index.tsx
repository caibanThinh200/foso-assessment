"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";


const Hero = () => {
  return (
    <div className="lg:p-20 lg:px-10">
      <div className="flex justify-center lg:justify-between items-center w-full">
        <motion.div
          className="hidden lg:block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3 }}
        >
          <Image
            className="size-[200px]"
            src={"/svg/calendar.svg"}
            height={300}
            width={300}
            alt="calendar"
          />
        </motion.div>
        <div className="flex flex-col gap-10 items-center">
          <div className="flex gap-5 items-center">
            <Link href={"/"} className="text-eerie-black">
              Trang chủ
            </Link>
            &gt;
            <Link href="/" className="text-eerie-black">
              Tài nguyên
            </Link>
            &gt;
            <Link href="/" className="text-eerie-black font-bold">
              Blog
            </Link>
          </div>
          <div>
            <h1 className="text-vampire-black  mx-auto text-center font-light">
              Blog <span className="font-bold text-green">FOSO</span> - <br />{" "}
              Cập Nhật Tin Tức{" "}
              <span className="font-bold relative">
                <motion.span
                  className="absolute bg-[#A3EED6] rounded-full w-full h-5 bottom-0 z-0"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1.3, duration: 1, ease: "easeInOut" }}
                ></motion.span>
                <span className="relative z-10"> Mới Nhất</span>
              </span>
            </h1>
            <p className="text-charcoal text-center">
              Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
            </p>
          </div>
        </div>
        <motion.div
          className="hidden lg:block"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3 }}
        >
          <Image
            className="size-[200px]"
            src={"/svg/pencil.svg"}
            height={300}
            width={300}
            alt="pencil"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
