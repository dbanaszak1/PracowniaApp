import { useState } from "react";

const CoolSlider = () => {

    const [currentSlide, setCurrentSlide] = useState(2);
    const nextSlide = () => {
        if (currentSlide === 4) {
            setCurrentSlide(0)
            return
        }
        else{
            setCurrentSlide(currentSlide + 1)
        }

    }
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(4)
            return
        }
        else{
            setCurrentSlide(currentSlide - 1)            
        }
 
    }
  return (
    <div className="justify-center flex py-10">
        <svg onClick={prevSlide} className="h-10 translate-y-44 hover:scale-125 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
      <div className={currentSlide === 0 ? "border-[1px] border-black w-96 h-96 mx-2 rounded-2xl duration-500 shadow-2xl" : "border-[1px] border-black w-32 h-96 mx-2 rounded-2xl duration-500 shadow-2xl"}>
        <div className="h-full w-full overflow-hidden bg-cover rounded-2xl" style={{backgroundImage: `url(https://images.lifestyleasia.com/wp-content/uploads/2019/01/11211233/050_divo.jpg)`}}></div>
      </div>
      <div className={currentSlide === 1 ? "border-[1px] border-black w-96 h-96 mx-2 rounded-2xl duration-500 shadow-2xl" : "border-[1px] border-black w-32 h-96 mx-2 rounded-2xl duration-500 shadow-2xl"}>
        <div className="h-full w-full overflow-hidden bg-cover rounded-2xl" style={{backgroundImage: `url(https://sothebys-md.brightspotcdn.com/dims4/default/ff95427/2147483647/strip/true/crop/1920x1440+0+0/resize/800x600!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fb6%2F2e%2F647e9710425a88ddee4fd90136b9%2F4ac4e1edb8b4ced81a251843380ff37a20a67f90.jpg)`}}></div>
      </div>
      <div className={currentSlide === 2 ? "border-[1px] border-black w-96 h-96 mx-2 rounded-2xl duration-500 shadow-2xl" : "border-[1px] border-black w-32 h-96 mx-2 rounded-2xl duration-500 shadow-2xl"}>
        <div className="h-full w-full overflow-hidden bg-cover rounded-2xl" style={{backgroundImage: `url(https://i.etsystatic.com/40088412/r/il/b952d1/4497224982/il_570xN.4497224982_fy59.jpg)`}}></div>
      </div>
      <div className={currentSlide === 3 ? "border-[1px] border-black w-96 h-96 mx-2 rounded-2xl duration-500 shadow-2xl" : "border-[1px] border-black w-32 h-96 mx-2 rounded-2xl duration-500 shadow-2xl"}>
        <div className="h-full w-full overflow-hidden bg-cover rounded-2xl" style={{backgroundImage: `url(https://pics.craiyon.com/2023-07-01/85de1ebf55c144a490a9ee02ec587a51.webp)`}}></div>
      </div>
      <div className={currentSlide === 4 ? "border-[1px] border-black w-96 h-96 mx-2 rounded-2xl duration-500 shadow-2xl" : "border-[1px] border-black w-32 h-96 mx-2 rounded-2xl duration-500 shadow-2xl"}>
        <div className="h-full w-full overflow-hidden bg-cover rounded-2xl" style={{backgroundImage: `url(https://wallpapers-clan.com/wp-content/uploads/2023/12/lamborghini-aventador-black-white-desktop-wallpaper-preview.jpg)`}}>
        </div>
      </div>
      <svg onClick={nextSlide} className="h-10 translate-y-44 hover:scale-125 duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
  )
}

export default CoolSlider
