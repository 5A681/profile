"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  return (
    <div className="flex bg-black h-14  text-white justify-between">
      <div className="flex items-center w-[40%] justify-center">
        <p className="font-Nunito font-bold cursor-default hover:text-green-400 text-2xl">
          Phongphat Srithong
        </p>
      </div>
      <div className="flex items-center w-[60%] justify-center">
        <div className="flex justify-center  gap-4">
          <Link
            href="/"
            className={`link ${
              usePathname() === "/" ? "text-green-400" : "text-white"
            } hover:text-green-400`}
          >
            Home
          </Link>
          <Link
            href="/abouts"
            className={`link ${
              usePathname() === "/abouts" ? "text-green-400" : "text-white"
            } hover:text-green-400`}
          >
            Abouts
          </Link>
          <Link
            href="/skills"
            className={`link ${
              usePathname() === "/skills" ? "text-green-400" : "text-white"
            } hover:text-green-400`}
          >
            Skills
          </Link>
          <Link
            href="/educations"
            className={`link ${
              usePathname() === "/educations" ? "text-green-400" : "text-white"
            } hover:text-green-400`}
          >
            Educations
          </Link>

          <Link
            href="/experiences"
            className={`link ${
              usePathname() === "/experiences" ? "text-green-400" : "text-white"
            } hover:text-green-400`}
          >
            Experiences
          </Link>
          <Link
            href="/contacts"
            className={`link ${
              usePathname() === "/contacts" ? "text-green-400" : "text-white"
            } hover:text-green-400`}
          >
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
}
