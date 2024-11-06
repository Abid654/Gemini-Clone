import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FaCode, FaCompass, FaLightbulb, FaMicrophone } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { IoGlobeOutline } from "react-icons/io5";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

const MainContent = () => {
  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
      <div className="flex items-center justify-between text-xl p-5 text-slate-700">
        <p>Gemini</p>
        <FaUserCircle className="text-4xl" />
      </div>
      <div className="max-w-[900px] mx-auto">
        <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
          <p>
            <span className="bg-gradient-to-r from-[#368ddd] to-[#ff5546] bg-clip-text text-transparent">
              Hello, Mian Abid.
            </span>
          </p>
          <p className="text-slate-400">How can I help you today?</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Suggest top 10 webs for learning
            </p>
            <IoGlobeOutline className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Give me tips for how to grow my YouTube Channel
            </p>
            <FaLightbulb className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Top 10 sites for Learning programming
            </p>
            <FaCode className="text-4xl p-1 absolute bottom-2 right-2" />
          </div>
          <div className="h-[200px] p-4 bg-gray-200 rounded-lg relative cursor-pointer hover:bg-gray-300">
            <p className="text-slate-700 text-lg">
              Why SEO is required for Websites?
            </p>
            <BsGraphUpArrow className="text-4xl p-1 absolute bottom-2 right-2"/>
          </div>
        </div>
        <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto mt-5">
          <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
            <input type="text" placeholder="Enter a prompt here..." className="flex-1 bg-transparent border-none outline-none  p-2 text-lg"/>
            <div className="flex gap-4 items-center"> 
            <MdOutlineAddPhotoAlternate className="text-2xl cursor-pointer"/> 
            <FaMicrophone className="text-2xl cursor-pointer"/>
            <IoMdSend className="text-2xl cursor-pointer"/>
            </div>
          </div>
          <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-500">
            Gemini may display inaccurate info, including ppeople, so double-check its response.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MainContent
