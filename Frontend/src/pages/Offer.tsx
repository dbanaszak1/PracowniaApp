import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Reservations from '../components/Reservations';

interface OfferData {
  Car_id: number;
  Price: number;
}
interface Car {
  Car_id: number;
  Name: string;
  BrandName: string;
  Production_year: number;
  Color: string;
  Seats: number;
  url: string;
}

const Offer = () => {
  const [offer, setOffer] = useState<OfferData>();
  const [car, setCar] = useState<Car[]>([]);
  const { Car_id } = useParams<{ Car_id: string}>();
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

  useEffect(() => { 
    const fetchOffer = async () => {
      if (Car_id === undefined) {
        console.error('Car_id is undefined');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:3000/api/offer`);
        const offers: OfferData[] = response.data;

        const selectedOffer = offers.find((o) => o.Car_id === parseInt(Car_id, 10));

        if (selectedOffer) {
          setOffer(selectedOffer);
        } else {
          console.log(`Offer not found for Car_id: ${Car_id}`);
        }
      } catch (error) {
        console.error('Error fetching offer:', error);
      }
    };
    const fetchCar = async () => {
      if (Car_id === undefined) {
        console.error('Car_id is undefined');
        return;
      }
      try {
        const response = await axios.get(`http://localhost:3000/api/details/${Car_id}`);
        setCar(response.data);
      } catch (error) {
        console.error('Error fetching car:', error);
      }
    }
    fetchCar();
    fetchOffer();
  }, [Car_id]);
  

  if (!offer) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <NavBar user={user}/>
    <Reservations user={1} car_id={offer.Car_id}/>  
      <div className="bg-gray-100 p-4 pt-40">
        <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-orange-500">Offer Details</h2>
          <p className="">Car ID: {offer.Car_id}</p>
          <p className='text-xl'>Now with a discount <span className="text-2xl font-semibold text-orange-500">20%</span></p>
          <p className="mb-4"><span className="text-3xl font-semibold text-orange-500 ">{offer.Price}$/day </span><span>price before: </span><s className='text-3xl'>{1.25 * offer.Price}$</s></p>

          {/* Displaying Car Details */}
          <div className="mb-4">
            <p className="text-xl font-semibold mb-2">{car[0].BrandName}</p>
            <p>Model: {car[0].Name}</p>
            <p>Production Year: {car[0].Production_year}</p>
            <p>Color: {car[0].Color}</p>
            <p>Seats: {car[0].Seats}</p>
          </div>

          {/* Displaying Car Image */}
          <div className="mb-4">
            <img src={car[0].url} alt={`${car[0].BrandName} ${car[0].Name}`} className="w-full h-auto rounded-md" />
          </div>
          <div className="flex items-center">
            <button className='border-orange-600 border-[1px] p-2 m-auto text-orange-600 font-semibold hover:bg-orange-600 hover:text-white duration-500 rounded-lg'>RENT ME</button>
          </div>
        </div>
      </div>    
    </>

  );
};

export default Offer;
