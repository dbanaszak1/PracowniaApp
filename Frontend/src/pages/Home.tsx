import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopImage from '../components/TopImage';
import NavBar from '../components/NavBar';

interface Car {
  Car_id: number;
  BrandName: string;
  Model: string;
  Production_year: number;
  Color: string;
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
    <div>
      <NavBar/>
      <TopImage/>
      <ul>
        {cars.map((car) => (
          <li key={car.Car_id}>
            <strong>{car.BrandName} {car.Model}</strong> ({car.Production_year}), Color: {car.Color}, Seats: {car.Seats}
          </li>
        ))}
      </ul>

    </div>
  );
};

export default Home;