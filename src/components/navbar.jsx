import { useState } from 'react'
import { Logo, User } from '../assets/'
import { GoGrabber } from 'react-icons/go'
import { BiSearch } from 'react-icons/bi'
import { MdOutlineNotificationsNone } from 'react-icons/md'

export const Navbar = () => {
  const [activeList, setActiveList] = useState(-1)

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
            List.map((list, id) => (
              <li 
                className={`${activeList === id ? "bg-[#eff0f2]" : ""} p-2 rounded-md cursor-pointer`}
                onClick={() => handleActiveList(id)}
                key={id}>{list.name}</li>
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

      <div className="w-8 border-2 rounded-md border-gray-400 text-gray-400 h-8 md:hidden flex justify-center items-center text-2xl">
        <GoGrabber />   
      </div>
    </div>
  )
}
