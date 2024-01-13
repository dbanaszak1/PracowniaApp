import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface OfferData {
  Car_id: number;
  Price: number;
}

const Offer: React.FC = () => {
  const [offer, setOffer] = useState<OfferData | null>(null);
  const { Car_id } = useParams<{ Car_id: string | undefined }>();

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

    fetchOffer();
  }, [Car_id]);

  if (!offer) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Offer Details</h2>
      <p>Car ID: {offer.Car_id}</p>
      <p>Price: {offer.Price}</p>
    </div>
  );
};

export default Offer;
