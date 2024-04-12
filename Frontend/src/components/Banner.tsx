import React from 'react'

const Banner = () => {
  return (
    <div className="my-20 mx-10">
        <div className="text-center text-3xl font-serif mb-12">Why rent with <span className="text-orange-600">RentMe</span>?</div>
        <div className='lg:w-1/2 md:h-[400px] flex m-auto items-center justify-center'>
            {/*3xCards*/}
            <div className="border border-orange-600 w-36 h-44 md:w-72 md:h-96 overflow-hidden rounded-lg skew-x-12 -skew-y-12">
                <div className="h-28 w-36 md:h-72 md:w-72 border-b-[1px] border-orange-600 overflow-hidden">
                    <img src="src/images/ferrari.png" alt="icon"/>
                </div>
                <div className='md:px-4 px-1 text-center'>
                    <h2 className="text-xs md:text-lg">Best price guarantee!</h2>
                    <h3 className='text-gray-500 text-[11px] md:text-sm'>Find your dream car for a better price</h3>
                </div>
            </div>
            <div className="border border-orange-600 w-36 h-48 md:w-72 md:h-96 overflow-hidden rounded-lg -translate-y-8 bg-white z-10">
                <div className="h-28 w-36 md:h-72 md:w-72 border-b-[1px] border-orange-600 overflow-hidden">
                    <img src="src/images/lambo.png" alt="icon"/>
                </div>
                <div className='md:px-4 px-1 text-center'>
                    <h2 className="text-xs md:text-lg">New and unique cars!</h2>
                    <h3 className='text-gray-500 text-[11px] md:text-sm'>Find something that will impress everyone!</h3>
                </div>
            </div> 
            <div className="border border-orange-600 w-36 h-44 md:w-72 md:h-96 overflow-hidden rounded-lg -skew-x-12 skew-y-12">
                <div className="h-28 w-36 md:h-72 md:w-72 border-b-[1px] border-orange-600 overflow-hidden">
                    <img src="src/images/giftcar.png" alt="icon"/>
                </div>
                <div className='md:px-4 px-1 text-center'>
                    <h2 className="text-xs md:text-lg">Many satisfied clients!</h2> 
                    <h3 className='text-gray-500 text-[11px] md:text-sm'>Buy our gift card and satisfy some too!</h3>
                </div>
            </div>   
        </div>
    </div>
  )
}

export default Banner
