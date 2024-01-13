import { useEffect, useState } from 'react';
import axios from 'axios';
import CarList from '../components/CarList';
import AddForm from '../components/AddForm';
import DeleteCar from '../components/DeleteCar';
import EditForm from '../components/EditForm';
import CarsTable from '../components/CarsTable';

interface Car {
  Car_id: number;
  BrandName: string;
  Name: string;
  Production_year: number;
  Color: string;
  Seats: number;
}

const AdminPanel = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = () => {
    axios.get('http://localhost:3000/api/cars')
      .then((response) => setCars(response.data))
      .catch((error) => console.error('Error fetching cars:', error));
  };

  return (
    <div className='flex-row justify-center'>
      <h1 className='text-5xl text-blue-500 text-center font-semibold py-6'>Admin Panel</h1>
      <CarList cars={cars} />
      <div className='flex justify-center'>
        <button onClick={fetchCars} className='p-2 font-semibold text-blue-500 border-blue-400 border-2 rounded-2xl m-2 hover:bg-blue-400 hover:text-white hover:scale-110 duration-300 '>Reload data</button>        
      </div>
      <AddForm fetchCars={fetchCars} />
      <DeleteCar/>
      <EditForm fetchCars={fetchCars}/>
      <CarsTable/>
    </div>
  );
};

export default AdminPanel;
