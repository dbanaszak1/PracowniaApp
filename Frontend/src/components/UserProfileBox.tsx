import React from 'react'
import { useState } from 'react'

interface Props {
    user: string | null;
    logout: () => void;
  }
const UserProfileBox = ({user,logout}: Props) => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>       
        <div className="flex items-center">
          <div onClick={()=>setIsOpen(!isOpen)} className="w-64 text-lg text-center flex cursor-pointer">
            {
              isOpen===true ? 
              <svg className="w-5 h-5 mx-2 pt-1"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
              : <svg className="w-5 h-5 mx-2 pt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
            }
            Hello {user}!
          </div>
          <img
            className="w-12 h-12 rounded-full mx-4 border"
            src=""/>
        </div>
        <ul className={isOpen===true ? "absolute text-center bg-white w-64 py-2 text-[16px] px-10 rounded-b-md border-x border-b border-orange-500 duration-300" : 'hidden'}>
            <li className="text-gray-600 py-1 border-t">Email</li>
            <li className="text-gray-600 py-1 border-t">Your account</li>
            <li className="text-gray-600 py-1 border-t ">Contact</li>
            <li className="text-gray-600 py-1 border-t">          
                <button 
                className='my-2 text-sm lg:text-lg font-semibold text-gray-600 border-orange-600 border-[1px] px-3 rounded-full hover:bg-orange-600 hover:text-white hover:scale-110 duration-500' 
                onClick={()=>logout()}>
                LOGOUT
                </button> 
            </li>
        </ul>
    </div>
  )
}

export default UserProfileBox
