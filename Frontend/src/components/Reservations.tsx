import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import moment from 'moment';

interface Props {
    user: number;
    car_id: number;
}

interface Dates {  
    date: Date;
}

const Reservations = ({user, car_id}: Props) => {
    const [dates, setDates] = useState<Dates[]>([]);

    const getReservationsData = async () => {
        axios.get(`http://localhost:3000/api/reservations/${car_id}`, {withCredentials: true})
        .then((response) => {console.log(response.data); setDates(response.data)})
        .catch((error) => console.error('Error fetching cars:', error));
    }
    
    useEffect(() => {
        getReservationsData();
    }, [])

return (
    <div>
        {
            dates.map((date, index) => {
                return (
                    <div key={index}>
                        {moment(date.date).format('YYYY-MM-DD')}
                    </div>
                )
            })
        }
    </div>
)
}

export default Reservations
