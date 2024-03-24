export default function Content() {
  return (
    <div className="bg-my_bg h-[100vh] bg-cover relative">
      <div className="absolute  w-1/2  text-blue-950 mt-[150px] ml-[150px] ">
        <p className="font-bold text-3xl py-2">Hi There,</p>
        <div className="font-bold text-3xl py-2">
          <span>I'm Phongphat </span>
          <span className="text-green-400">Srithong</span>
        </div>
        <div className="font-bold py-2">
          <span className="">I Am </span>
          <span className="text-orange-600 ">Web Developer</span>
        </div>
        <button className="text-white font-bold bg-blue-950 py-2 px-4 rounded-2xl hover:text-green-400">
          About Me
        </button>
      </div>
    </div>
  );
}
