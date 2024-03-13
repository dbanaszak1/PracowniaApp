import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TopImage from '../components/TopImage';
import NavBar from '../components/NavBar';
import CarCard from '../components/CarCard';
import CoolSlider from '../components/CoolSlider';
import Map from '../components/Map';
import Banner from '../components/Banner';


const Home = () => {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('http://localhost:3000/auth/user', {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="">
      <NavBar user={user}/> 
      <TopImage/>
      <Map/>
      <Banner/>
      <div className="w-2/3 m-auto">
        <CarCard/>
      </div>
      <CoolSlider/>
    </div>
  );
};

export default Home;