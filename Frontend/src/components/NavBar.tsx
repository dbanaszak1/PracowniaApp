import { useState } from "react"
import axios from "axios"

interface Props {
  user: string | null;
}

const NavBar = ({user}: Props ) => {

  const logout = () => {
    axios.get('http://localhost:3000/auth/logout', {withCredentials: true})
    .then(res => {
      console.log(res)
      window.location.href = '/'
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  return (
    <nav className='absolute w-5/6 right-0 top-10 h-20 rounded-l-full bg-white z-50 inline-flex items-center border-[1px] border-orange-600'>
      <div className='px-2 inline-flex md:w-1/2 md:px-10 items-center'>
        <a href='/'><div className='h-6 w-[164px] bg-cover' style={{backgroundImage: `url(https://github.com/dbanaszak1/PracowniaApp/blob/main/Frontend/src/images/rentme-high-resolution-logo-transparent.png?raw=true)`}}></div></a>       
      </div>
      <div className='text-2xl md:w-1/2 text-end px-2 md:px-10'>

    { 
      user === '' ?
      (      
      <div className='inline-flex'>
          <a href='/register'>
            <button className='text-sm lg:text-lg font-semibold text-gray-600 px-4 hover:text-orange-600 duration-500'>
            SIGN UP
            </button>
          </a> 
          <a href='/login'>
            <button className='text-sm lg:text-lg font-semibold text-gray-600 border-orange-600 border-[1px] px-3 rounded-full hover:bg-orange-600 hover:text-white hover:scale-110 duration-500'>
            LOG IN
            </button>
          </a>            
        </div> 
        ) :
        ( 
        <div className='text-sm lg:text-lg font-semibold text-gray-600'>
            <span>Hello {user}!</span>
          <button 
            className='ml-4 text-sm lg:text-lg font-semibold text-gray-600 border-orange-600 border-[1px] px-3 rounded-full hover:bg-orange-600 hover:text-white hover:scale-110 duration-500' 
            onClick={()=>logout()}>
            LOGOUT
          </button> 
        </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
