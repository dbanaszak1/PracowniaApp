import React from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { useEffect, useState } from 'react'

interface User {
  username: string;
  email: string;
  name: string;
  surname: string;
}

interface Reservations {
  resevations:{
    id: number;
    car_id: number;
    created_at: string;
    date: string;
  }
}

const Account = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState<User | null>(null);
  const [reservations, setReservations] = useState<Reservations[]>([])
  const [userId, setUserId] = useState<number | null>(null)

  useEffect(() => {
    fetchUser();
    getUserId();
  }, []);

  useEffect(() => {
    if (userId !== null) {
      getUserDetails();
      getUserReservations();
    }
  }, [userId]);

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

  const getUserId = async () => {
    try {
      const response = await axios.get('http://localhost:3000/auth/userId', {
        withCredentials: true,
      });
      setUserId(response.data);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  };

  const getUserDetails = () => {
    axios.get('http://localhost:3000/auth/userDetails', {
      withCredentials: true,
    }).then((response) => {
      setUserData(response.data);
    }).catch((error) => {
      console.error('Error fetching user:', error);
    });
  }

  const getUserReservations = async () => {
    await axios.get(`http://localhost:3000/api/reservations/user/${userId}`,{
      withCredentials: true,
    }).then((response) => {
      setReservations(response.data);
      console.log(response.data);
      console.log(reservations)
    }).catch((error) => {
      console.error(error);
    });
  }

  return (
   <>
   <NavBar user={user}/>
    <div className='w-full m-auto flex flex-wrap justify-center max-w-[1200px]'>
      <div className='w-full h-10 text-3xl text-center mt-[200px] pb-20'>
        {user} account details.
      </div>
      
      <div className='w-1/2'>
        <h2></h2>
        <table className='items-center justify-center text-center w-full text-xl'>
          <tbody>
          <tr>
            <td className='w-1/2 text-right px-4'>Username:</td>
            <td className='w-1/2 text-left px-4'>{userData?.username}</td>
          </tr>
          <tr>
            <td className='w-1/2 text-right px-4'>Name:</td>
            <td className='w-1/2 text-left px-4'>{userData?.name}</td>
          </tr>
          <tr>
            <td className='w-1/2 text-right px-4'>Surname:</td>
            <td className='w-1/2 text-left px-4'>{userData?.surname}</td>
          </tr>
          <tr>
            <td className='w-1/2 text-right px-4'>Email:</td>
            <td className='w-1/2 text-left px-4'>{userData?.email}</td>
          </tr>
          </tbody>
        </table>
        <div className='m-auto flex flex-wrap justify-center mt-6'>
          <button className='px-2 w-52 border-[1px] mx-4 my-2 rounded-xl hover:border-orange-600 duration-500'>Change password</button>
          <button className='px-2 w-52 border-[1px] mx-4 my-2 rounded-xl hover:border-orange-600 duration-500'>Change personal data</button>
          <button className='px-2 w-52 border-[1px] mx-4 my-2 rounded-xl hover:border-orange-600 duration-500'>Delete account</button>          
        </div>
      </div>

      <div className='w-1/2'>
        <table className='w-full text-center '>
          <thead className='border w-full'>
            <tr>
              <th>ID</th>
              <th>Car ID</th>
              <th>Created At</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, index) => (
              <tr key={index}>
                <td>{reservation.id}</td>
                <td>{reservation.car_id}</td>
                <td>{reservation.created_at}</td>
                <td>{reservation.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=''>
         
      </div>
    </div>
   </>
  )
}

export default Account;
