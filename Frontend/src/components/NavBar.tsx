
const NavBar = () => {
  return (
    <nav className='absolute w-5/6 right-0 top-10 h-20 rounded-l-full bg-white z-50 inline-flex items-center border-[1px] border-black'>
      <div className='inline-flex md:w-1/2 md:px-10 items-center'>
        <div className='h-16 w-24 bg-cover mx-10' style={{backgroundImage: `url(https://github.com/dbanaszak1/portfolio/blob/main/images/devb-high-resolution-logo-black-transparent.png?raw=true)`}}></div>       
      </div>
      <div className='text-2xl md:w-1/2 text-end px-2 md:px-10'>
        <div className='inline-flex'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
            <span className='text-sm md:text-2xl'>Links</span>            
        </div>
      </div>
    </nav>
  )
}
export default NavBar
