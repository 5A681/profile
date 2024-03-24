import Image from "next/image";

export default function Nav() {
  return (
    <div className="grid grid-cols-2 bg-black h-14 text-white">
      <div className="w-1/2 mx-auto flex items-center">
        <p className="font-Nunito font-bold hover:text-green-400">
          Phongphat Srithong
        </p>
      </div>
      <div className="flex items-center">
        <div className="flex justify-center  gap-4">
          <a href="#" className="hover:text-green-400">
            Home
          </a>
          <a href="#" className="hover:text-green-400">
            About
          </a>
          <a href="#" className="hover:text-green-400">
            Skills
          </a>
          <a href="#" className="hover:text-green-400">
            Education
          </a>
          <a href="#" className="hover:text-green-400">
            Work
          </a>
          <a href="#" className="hover:text-green-400">
            Experince
          </a>
          <a href="#" className="hover:text-green-400">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
