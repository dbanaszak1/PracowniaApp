
const NavBar = () => {
  return (
    <nav className='absolute w-5/6 right-0 top-10 h-20 rounded-l-full bg-white z-50 inline-flex items-center border-[1px] border-orange-600'>
      <div className='px-2 inline-flex md:w-1/2 md:px-10 items-center'>
        <div className='h-6 w-[164px] bg-cover' style={{backgroundImage: `url(https://github.com/dbanaszak1/PracowniaApp/blob/main/Frontend/src/images/rentme-high-resolution-logo-transparent.png?raw=true)`}}></div>       
      </div>
      <div className='text-2xl md:w-1/2 text-end px-2 md:px-10'>
        <div className='inline-flex'>
          <button>Log in</button>      
        </div>
      </div>
    </nav>
  )
}
export default NavBar
