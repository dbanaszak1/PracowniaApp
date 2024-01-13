import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Car {
  Car_id: number;
  Name: string;
  BrandName: string;
  Model: string;
  Production_year: number;
  Color: string;
  Seats: number;
}

const CarsTable: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 5; 

  useEffect(() => {
    fetchCars();
  }, [page]);

  const fetchCars = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/cars2?page=${page}&pageSize=${pageSize}`);
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  return (
   <div className="flex items-center justify-center py-6">
   <div className="max-w-2xl p-4 border rounded shadow-lg">
     <h1 className="text-2xl font-bold mb-4">Car List</h1>
     <table className="w-full border-collapse">
       <thead>
         <tr>
           <th className="py-2 px-5 border">Id</th>
           <th className="py-2 px-5 border">Brand</th>
           <th className="py-2 px-5 border">Model</th>
           <th className="py-2 px-5 border">Year</th>
           <th className="py-2 px-5 border">Color</th>
           <th className="py-2 px-5 border">Seats</th>
         </tr>
       </thead>
       <tbody>
         {cars.map((car) => (
           <tr key={car.Car_id} className="border-b">
             <td className="py-2 px-5 border">{car.Car_id}</td>                
             <td className="py-2 px-5 border">{car.BrandName}</td>
             <td className="py-2 px-5 border">{car.Name}</td>
             <td className="py-2 px-5 border">{car.Production_year}</td>
             <td className="py-2 px-5 border">{car.Color}</td>
             <td className="py-2 px-5 border">{car.Seats}</td>
           </tr>
         ))}
       </tbody>
     </table>
      <div>
        <button className='p-2 font-semibold text-blue-500 border-blue-400 border-2 rounded-2xl m-2 hover:bg-blue-400 hover:text-white hover:scale-110 duration-300' onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>Previous</button>
        <button className='p-2 font-semibold text-blue-500 border-blue-400 border-2 rounded-2xl m-2 hover:bg-blue-400 hover:text-white hover:scale-110 duration-300' onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
    </div>
  );
};

export default CarsTable;
