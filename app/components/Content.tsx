import Link from "next/link";

/* eslint-disable react/no-unescaped-entities */
export default function Content() {
  return (
    <div className="bg-my_bg bg-autoflex h-[100%] flex items-start justify-start ">
      <div className="w-3/4 h-3/4  text-white  mt-[5%] ml-[10%]">
        <p className="font-bold text-3xl py-2">
          <span className="text-orange-600">Hi</span> There,
        </p>
        <div className="font-bold text-3xl py-2">
          <span className="text-orange-600">I'm </span>
          <span>Phongphat Srithong</span>
        </div>
        <div className="font-bold py-2">
          <span className="text-green-400 text-lg">I Am </span>
          <span className="text-orange-600 text-lg">Full Stack Developer</span>
        </div>
        <button className="text-white font-bold bg-orange-600 py-2 px-4 rounded-2xl hover:text-green-400">
          <Link href={"/abouts"}>About Me</Link>
        </button>
      </div>
    </div>
  );
}
