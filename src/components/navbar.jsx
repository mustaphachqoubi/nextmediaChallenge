import { useState } from 'react'
import { Logo, User } from '../assets/'
import { GoGrabber } from 'react-icons/go'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineNotificationsNone } from 'react-icons/md'

export const Navbar = () => {
  const [activeList, setActiveList] = useState(1)
  const [leftBarDisplay, setLeftBarDisplay] = useState('hidden')

  const List = [
    {id: 1, name: "Dashboard"},
    {id: 2, name: "Jobs"},
    {id: 3, name: "Applicants"},
    {id: 4, name: "Company"},
  ]

  const handleActiveList = (id) => {
    setActiveList(id)
  }

  return (
    <div className="flex justify-between items-center py-5 px-10">
      <div className="flex gap-5">
        <img src={Logo} alt="logo" className="w-8 h-8"/>

        <ul className="hidden md:flex gap-4 text-xs items-center">
          {
            List.map((list) => (
              <li 
                className={`${activeList === list.id ? "bg-[#eff0f2]" : ""} p-2 rounded-md cursor-pointer`}
                onClick={() => handleActiveList(list.id)}
                key={list.id}>{list.name}</li>
            ))
          }
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-4 text-xs">
        <div className="relative ">
          
        <input type="search" placeholder="Search" className="border-2 rounded-md py-2 px-5 placeholder:px-4"/>

        <div className="absolute left-5 top-3 text-gray-400">
          <BiSearch />
        </div>

        </div>
        <div className="flex items-center gap-2">
          <div className="text-2xl text-gray-400">
          <MdOutlineNotificationsNone />
          </div>

          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img src={User} alt="" />
          </div>
        </div>
      </div>

      <div
 onClick={() => {
          leftBarDisplay === 'block' ? setLeftBarDisplay('hidden') : setLeftBarDisplay('block')
        }}

        className="z-50 w-8 border-2 rounded-md border-gray-400 text-gray-400 h-8 md:hidden flex justify-center items-center text-2xl">
        <GoGrabber />   
      </div>


      <div 
      className={`${leftBarDisplay} fixed top-0 bottom-0 left-[30%] right-0 md:hidden backdrop-blur-lg shadow-lg bg-white/30 z-40`}>

       <ul className="mt-20 flex flex-col gap-4 text-xs items-center mx-4">
          {
            List.map((list) => (
              <li 
                className={`${activeList === list.id ? "bg-[#eff0f2]" : ""} p-2 rounded-md cursor-pointer w-full flex justify-center items-center `}
                onClick={() => handleActiveList(list.id)}
                key={list.id}>{list.name}</li>
            ))
          }
        </ul>

         <div className="flex flex-col items-center gap-4 text-xs mx-4 mt-20">
        <div className="relative  w-full">
          
        <input type="search" placeholder="Search" className="border-2 rounded-md py-2 w-full placeholder:px-10"/>

        <div className="absolute left-5 top-3 text-gray-400">
          <BiSearch />
        </div>

        </div>
        <div className="flex items-center gap-2">
          <div className="text-2xl text-gray-400 absolute top-6 left-5 hover:bg-slate-200 rounded-full p-2">
          <MdOutlineNotificationsNone />
          </div>

          <div className="w-8 h-8 rounded-full overflow-hidden absolute bottom-6 left-5">
            <img src={User} alt="" />
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden absolute bottom-6 right-6">
            <img src={Logo} alt="" />
          </div>

        </div>
      </div>
      </div>
    </div>
  )
}
