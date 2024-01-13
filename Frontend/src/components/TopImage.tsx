
const TopImage = () => {
  const ScrollToContent=()=>{
    window.scrollTo({
      top:700,
      behavior: "smooth"
    })
  }
const bgUrl="https://wallpapers.com/images/hd/lamborghini-metallic-orange-car-4k-w0raqz9ef1ub9l34.jpg"
  return (
    <div style={{backgroundImage: `url(${bgUrl})`}} className="w-full h-[700px] bg-center md:bg-top bg-fixed items-center justify-center flex">
        <div className="justify-center flex flex-wrap">
            <div className="w-full text-white md:text-black text-center text-4xl font-serif">With <span className="text-orange-600">RentMe</span> you will find your best ride!</div>
            <button onClick={() => ScrollToContent()} className="border-white text-white md:text-black md:border-black border-2 p-3 m-4 font-semibold hover:border-white hover:text-white hover:bg-orange-600 hover:scale-105 duration-1000">GET STARTED!</button>
        </div>
 
    </div>
  )
}

export default TopImage
