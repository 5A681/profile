import Image from "next/image";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="bg-white w-[100%] h-[100%]">
      <div className="flex items-center justify-center w-[100%] h-[100%]">
        <div className="w-3/5  flex justify-center">
          <div className="flex-col">
            <div className="w-[100%] flex justify-center ">
              <div className="border-2 border-green-400 rounded-full p-10">
                <Image
                  src={"/profile.jpg"}
                  width={200}
                  height={200}
                  alt="profile"
                />
              </div>
            </div>
            <div>
              <div className="text-center font-bold mb-1">
                <p>Hello I am Phongphat Srithong</p>
                <p className="text-xl text-gray-500">
                  Full Stack And Backend Developer
                </p>
              </div>
              <span>
                Experienced in back-end develper with golang and spring boot 2
                years, Strong in data structure and algorithms, Experiences in
                Full Stack Developer in some project with Next.js and ASP.Net,
                Exprienced with agile methodology
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
