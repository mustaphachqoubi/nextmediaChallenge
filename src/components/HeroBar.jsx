import { MdEdit } from "react-icons/md";
import { BiLinkAlt } from "react-icons/bi";
import {
  BsCheckLg,
  BsFillBriefcaseFill,
  BsCalendar2DateFill,
} from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { ImLocation } from "react-icons/im";
import { AiFillDollarCircle } from "react-icons/ai";

export const HeroBar = () => {
  return (
    <div className="p-10 flex flex-col gap-3">
      <div className="flex gap-5 text-gray-400 text-xs font-semibold">
        <div className="cursor-pointer">Jobs</div>
        <div>{">"}</div>
        <div className="cursor-pointer">Engineering</div>
      </div>

      <div className="flex-col md:flex-row flex justify-between items-center">
        <h1 className="font-bold text-lg md:text-xl">Back End Developer</h1>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="flex gap-2 justify-center items-center px-4 py-2 rounded-md border-2 text-xs hover:bg-slate-200">
            <div className="text-gray-400 text-md">
              <MdEdit />
            </div>{" "}
            Edit
          </button>
          <button className="flex gap-2 justify-center items-center px-4 py-2 rounded-md border-2 text-xs hover:bg-slate-200">
            <div className="text-gray-400 text-md">
              <BiLinkAlt />
            </div>{" "}
            View
          </button>
          <div className="flex rounded-md overflow-hidden">
            <button className="relative bg-[#6f47ea] hover:bg-[#5333b0] flex gap-2 px-3 justify-center items-center py-2  text-white text-xs ">
              <div className="text-white text-md px-2">
                <BsCheckLg />
              </div>{" "}
              Published
            </button>
            <div className="bg-[#6f47ea] hover:bg-[#5333b0] text-lg flex justify-center items-center text-white border-l border-black/30 px-2">
              <FiChevronDown />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center text-gray-400">
        <div className="text-xs flex justify-center items-center gap-2">
          <BsFillBriefcaseFill />
          Full-time
        </div>
        <div className="text-xs flex justify-center items-center gap-2">
          <ImLocation />
          Remote
        </div>
        <div className="text-xs flex justify-center items-center gap-2">
          <AiFillDollarCircle />
          $120k - $140k
        </div>
        <div className="text-xs flex justify-center items-center gap-2">
          <BsCalendar2DateFill />
          Closing on January 9, 2020
        </div>
      </div>
    </div>
  );
};
