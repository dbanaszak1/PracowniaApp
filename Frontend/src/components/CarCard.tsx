import React, { useEffect, useState } from 'react';
import axios from 'axios';
interface Car {
    Car_id: number;
    Name: string;
    BrandName: string;
    Model: string;
    Production_year: number;
    Color: string;
    url: string;
    Power: string;
    Fuel: string;
    Seats: number;
  }
  
  const CarCard = () => {
    const [cars, setCars] = useState<Car[]>([]);
  
    useEffect(() => {
      axios.get('http://localhost:3000/api/cars')
        .then((response) => setCars(response.data))
        .catch((error) => console.error('Error fetching cars:', error));
    }, []);
  return (
    <div>
    {cars.map((car,index)=>(
        <div key={index} className="w-full lg:w-4/5 h-[400px] lg:h-[300px] m-auto flex-row lg:flex my-10 rounded-xl overflow-hidden border-[1px] border-orange-600">
            <div style={{backgroundImage: `url(${car.url})`}} className="lg:w-2/3 lg:h-full h-1/3 bg-cover"></div>
            <div className="lg:w-1/3 text-center flex flex-wrap justify-center py-4 px-2 border-t-[1px] lg:border-l-[1px] border-orange-600">
                <div>
                    <div className="text-2xl text-orange-600">{car.BrandName} {car.Name}</div>
                    <div><span className="text-sm text-gray-500">Production year: </span>{car.Production_year}</div>
                    <div><span className="text-sm text-gray-500">Color: </span>{car.Color}</div>
                    <div><span className="text-sm text-gray-500">Seats: </span>{car.Seats}</div>
                    <div className="text-xl text-gray-500">Engine:</div>
                    <div ><span className="text-sm text-gray-500">Type: </span>{car.Fuel}</div>
                    <div ><span className="text-sm text-gray-500">Power: </span>{car.Power} HP</div>
                    <div ><span className="text-sm text-gray-500">Transmission: </span>Manual</div>
                    <a href={`/offer/${car.Car_id}`}><button className='border-orange-600 border-[1px] p-2 m-2 text-orange-600 font-semibold hover:bg-orange-600 hover:text-white duration-500 rounded-lg'>See the offer</button></a>
                </div>
            </div>
        </div>
    ))}
    </div>
  );
};

export default CarCard;