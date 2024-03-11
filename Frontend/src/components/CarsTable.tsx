import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditForm from './EditForm';
import AddForm from './AddForm';

interface Car {
  Car_id: number;
  Name: string;
  BrandName: string;
  Model: string;
  Production_year: number;
  Color: string;
  Seats: number;
}

interface CarData {
  Car_id: number;
  Brand_id: number;
  Engine_id: number;
  Model_id: number;
  Name: string;
  BrandName: string;
  Production_year: number;
  Color: string;
  Seats: number;
  url: string;
}

const CarsTable: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [page, setPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [addOpen, setAddOpen] = useState(false);
  const [carToDelete, setCarToDelete] = useState(0);
  const pageSize = 6; 
  const [carData, setCarData] = useState<CarData[]>([]);

  useEffect(() => {
    fetchCars();
  }, [page]);


  const openEditForm = async (car: number) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/details/${car}`);
      setCarData(response.data);  
      console.log(response.data);  
      setEditOpen(!editOpen)
    } catch (error) {
      console.error('Error fetching car:', error);
    }
  }

  const fetchCars = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/cars2?page=${page}&pageSize=${pageSize}`, { withCredentials: true });
      setCars(response.data);
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };


  const deleteCar = (carId: number) => {

    axios
      .delete(`http://localhost:3000/admin/cars/${carId}`)
      .then(() => {
        console.log('Car deleted successfully');
      })
      .catch((error) => {
        console.log(`Error deleting car: ${error.response.data.error}`);
      });
  };

  return (
   <div className="flex items-center justify-center py-6 relative">
    {
      (editOpen===true && carData.length!=0) 
      ? (<EditForm isOpen={editOpen} setIsOpen={setEditOpen} carToEdit={carData[0].Car_id } Brand_id={carData[0].Brand_id} Engine_id={carData[0].Engine_id} Model_id={carData[0].Model_id} Name={carData[0].Name} BrandName={carData[0].BrandName} Production_year={carData[0].Production_year} Color={carData[0].Color} Seats={carData[0].Seats} url={carData[0].url}
        /> )    
      : <div></div> 
    }
    {
      (addOpen===true) 
      ? (<AddForm isOpen={addOpen} setIsOpen={setAddOpen}/> )    
      : <div></div> 
    }  
    <div className={isOpen===false ? 'hidden' : 'absolute top-1/2 left-1/2 -ml-48 -mt-32 bg-white border-[1px] w-96 h-40 rounded-xl overflow-hidden'}>
      <h2 className='text-2xl text-center font-semibold px-16 text-red-500 pt-4'>Are you sure you want to delete this car?</h2>
      <div className='flex place-content-center'>
        <button onClick={()=>setIsOpen(!isOpen)} className='p-2 font-semibold text-blue-500 border-blue-400 border-2 rounded-2xl m-2 hover:bg-blue-400 hover:text-white hover:scale-110 duration-300'>Cancel</button>
        <button onClick={()=>{deleteCar(carToDelete), setIsOpen(!isOpen)}} className='p-2 font-semibold text-red-500 border-red-400 border-2 rounded-2xl m-2 hover:bg-red-400 hover:text-white hover:scale-110 duration-300'>Delete</button>        
      </div>
    </div>
   <div className="max-w-[940px] p-4 border rounded shadow-lg">
    <div className="relative">
      <div className="text-2xl font-bold mb-4">Car List</div>   
      <button
        onClick={() => setAddOpen(!addOpen)} 
        className='absolute right-0 top-0 text-lg font-bold border border-green-600 bg-green-600 rounded-lg px-2 text-white inline-flex hover:scale-110 hover:bg-green-700 duration-200'>
        Add
        <svg className="h-7 w-7 pl-1" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="white" />
          <path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="white"/>
        </svg>  
      </button>   
    </div>
     <table className="w-full border-collapse">
       <thead>
         <tr>
           <th className="py-2 px-5 border">Id</th>
           <th className="py-2 px-5 border">Brand</th>
           <th className="py-2 px-5 border">Model</th>
           <th className="py-2 px-5 border">Year</th>
           <th className="py-2 px-5 border">Color</th>
           <th className="py-2 px-5 border">Seats</th>
           <th className="py-2 px-5 border">Actions</th>
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
             <td className="py-2 px-5 border inline-flex">
              <button onClick={()=>openEditForm(car.Car_id)} className="border-[1px] inline-flex px-2 font-bold rounded-md bg-blue-400 text-white hover:bg-blue-600 hover:scale-110 duration-200">Edit
                <svg className='h-5 w-5 mx-1 my-1' fill='CurrentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/></svg>
              </button>
              <button onClick={()=>{setIsOpen(!isOpen),setCarToDelete(car.Car_id)}} className="border-[1px] inline-flex px-2 font-bold rounded-md bg-red-400 text-white ml-2 hover:bg-red-600 hover:scale-110 duration-200 ">Remove
                <svg className='h-5 w-5 mx-1 my-1' fill='CurrentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
              </button>   
             </td>
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
