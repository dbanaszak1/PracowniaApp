import React from 'react'
import NavBar from '../components/NavBar'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Account = () => {
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
   <>
   <NavBar user={user}/>
    <div className='w-full flex max-w-[1200px]'>
      <h1 className='w-full text-3xl text-center'>{user} account details.</h1>
      <div className='w-1/2 border'>
         User data
      </div>
      <div className='w-1/2 border'>
         History
      </div>
      <div className='w-full'>
         Acc options
      </div>
    </div>
   </>
  )
}

export default Account