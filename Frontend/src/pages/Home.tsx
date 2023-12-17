import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopImage from '../components/TopImage';
import NavBar from '../components/NavBar';
import CarCard from '../components/CarCard';

interface Car {
  Car_id: number;
  Name: string;
  BrandName: string;
  Model: string;
  Production_year: number;
  Color: string;
  url: string;
  Seats: number;
}

const Home: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/cars')
      .then((response) => setCars(response.data))
      .catch((error) => console.error('Error fetching cars:', error));
  }, []);

  return (
    <div className="">
      <NavBar/>
      <TopImage/>
      <div className="w-2/3 m-auto">
        <CarCard cars={cars}/>
      </div>
    </div>
  );
};

export default Home;