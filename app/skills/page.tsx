"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  const pathname = usePathname();
  return (
    <div className="bg-white w-[100%] h-[100%]">
      <div className="">
        <div className="flex relative justify-center">
          <p className="text-center p-2 font-bold absolute text-green-400 blur-sm text-2xl">
            PROGRAMMNG LANGUAGES
          </p>
          <p className="text-center p-2 font-bold text-2xl text-white z-50">
            PROGRAMMNG LANGUAGES
          </p>
        </div>
        <section className="grid grid-cols-3 w-3/4 mx-auto   py-2 gap-y-4 gap-x-4 ">
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center]">
              <Image
                src={"/Go-Logo_Aqua.png"}
                width={40}
                height={40}
                alt="golang"
              />
            </div>
          </div>
          <div className="flex items-center justify-center border border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/java.png"} width={40} height={40} alt="java" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/php.png"} width={40} height={40} alt="php" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/c.png"} width={40} height={40} alt="c" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/cpp.png"} width={40} height={40} alt="cpp" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/cs.png"} width={40} height={40} alt="cs" />
            </div>
          </div>
          <div className="flex items-center justify-center col-start-2 border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/ts.png"} width={60} height={60} alt="ts" />
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <div className="flex relative justify-center">
          <p className="text-center p-2 font-bold absolute text-green-400 blur-sm text-2xl">
            FRAMEWORKS & LIBRARIES
          </p>
          <p className="text-center p-2 font-bold text-2xl text-white z-50">
            FRAMEWORKS & LIBRARIES
          </p>
        </div>
        <section className="grid grid-cols-3 w-3/4 mx-auto   py-2 gap-y-4 gap-x-4 ">
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center]">
              <Image src={"/fiber.png"} width={60} height={40} alt="golang" />
            </div>
          </div>
          <div className="flex items-center justify-center border border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/go-echo.png"} width={60} height={40} alt="java" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/laravel.png"} width={40} height={40} alt="php" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/vue.png"} width={60} height={40} alt="c" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/next.png"} width={60} height={40} alt="cpp" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/react.png"} width={60} height={40} alt="cs" />
            </div>
          </div>
          <div className="flex items-center justify-center  border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/spring.png"} width={60} height={60} alt="ts" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/asp.png"} width={60} height={60} alt="ts" />
            </div>
          </div>
        </section>
      </div>
      <div className="">
        <div className="flex relative justify-center">
          <p className="text-center p-2 font-bold absolute text-green-400 blur-sm text-2xl">
            OTHER SKILLS
          </p>
          <p className="text-center p-2 font-bold text-2xl text-white z-50">
            OTHER SKILLS
          </p>
        </div>
        <section className="grid grid-cols-3 w-3/4 mx-auto   py-2 gap-y-4 gap-x-4 ">
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center]">
              <Image src={"/mysql.png"} width={60} height={40} alt="golang" />
            </div>
          </div>
          <div className="flex items-center justify-center border border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/postgres.png"} width={60} height={40} alt="java" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/git.png"} width={40} height={40} alt="php" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/gitlab.png"} width={60} height={40} alt="c" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/github.png"} width={60} height={40} alt="cpp" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/docker.png"} width={60} height={40} alt="cs" />
            </div>
          </div>
          <div className="flex items-center justify-center  border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/kafka.png"} width={60} height={60} alt="ts" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/jenkins.png"} width={60} height={60} alt="ts" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/kuber.png"} width={60} height={60} alt="ts" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/linux.png"} width={60} height={60} alt="ts" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/nginx.png"} width={60} height={60} alt="ts" />
            </div>
          </div>
          <div className="flex items-center justify-center border  border-green-400 shadow-md hover:shadow-green-400 rounded-3xl">
            <div className="h-[50px] flex justify-center">
              <Image src={"/aws.png"} width={60} height={60} alt="ts" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
