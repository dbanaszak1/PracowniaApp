import React from 'react'

const Map = () => {
  return (
    <div className="my-20 mx-10">
        <div className="text-center text-3xl font-serif my-5">If you didn't know where to find us!</div>
        <div className='lg:w-1/2 h-[400px] overflow-hidden rounded-lg border border-orange-500 m-auto'>   
            <iframe className='w-full h-full'   scrolling="no"  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Pozna%C5%84%20%C5%9Bw.%20maricin+(RentMe)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps tracker sport</a></iframe>
        </div>
    </div>
  )
}

export default Map
