import React from "react";
import Image from "next/image";

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
                  src={"/graduated.jpg"}
                  width={200}
                  height={200}
                  alt="profile"
                />
              </div>
            </div>
            <div>
              <div className="relative pl-8 sm:pl-32 py-6 group">
                <div className="font-caveat font-medium text-2xl text-green-400 mb-1 sm:mb-0">
                  Educations
                </div>
                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                    2018 - 2021
                  </time>
                  <div className="text-xl font-bold text-slate-900">
                    UDON THANI RAJABHAT UNIVERSITY, THAILAND
                  </div>
                </div>
                <div className="text-slate-500">
                  Bachelor of computer and communication enginerring
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
