import { Candidates } from './dummy.js'
import User from '../../assets/user.jpeg'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { AiOutlineRight, AiOutlineClose } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'

export const Interview = () => {
  return (
    <>
      {
        Candidates.map((person) => (
          <div key={person.id} className="py-8 border-b-2 text-xs flex justify-between items-center">
            <div className="flex gap-2 w-60">
              <img src={User} alt="person" className="w-8 h-8 rounded-full object-cover"/>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#6f47ea] font-semibold">{person.name}</h3>
                <h4 className="flex gap-2 items-center text-gray-400"><BsFillBriefcaseFill /> {person.email}</h4>
              </div>
            </div>

            <div className="hidden sm:flex flex-col items-center gap-2 ">
              <h3 className="font-semibold text-black">Applied on {person.applyedDate}</h3>
              {
                person.isPhoneScreeningCompleted === true ? (
                  <div className="flex items-center gap-2">
                    <div className="bg-green-500 p-2 rounded-full text-white">
                      <MdOutlineDone />
                    </div>
                    <h3>Completed phone screening</h3>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <div className="bg-red-500 p-2 rounded-full text-white">
                      <AiOutlineClose />
                    </div>
                    <h3>phone screen not complete</h3>
                  </div>
                ) 
              }
            </div>

            <div className="text-gray-600 hover:bg-gray-200 p-2 rounded-full">
              <AiOutlineRight />
            </div>
          </div>
        ))
      }
    </>
  )
} 
