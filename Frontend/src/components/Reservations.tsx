import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

interface Props {
    user: number;
    car_id: number;
}

interface Dates {  
    date: Date;
}

interface selectedDates{
    date: Date;
}


const Reservations = ({ user, car_id }: Props) => {

    //States
    const [dates, setDates] = useState<Dates[]>([]);
    const [selectedDates, setSelectedDates] = useState<selectedDates[]>([]);
    const localizer = momentLocalizer(moment);

    //Fetch resevations
    const getReservationsData = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/reservations/${car_id}`, { withCredentials: true });
            setDates(response.data);
        } catch (error) {
            console.error('Error fetching cars:', error);
        }
    }


    //Handle date selection
    const handleDateSelection = (selectedDate: Date) => {
        //Blocking the ability to select booked dates
        if(dates.some(dateObj => moment(dateObj.date).isSame(selectedDate, 'day'))){
            return;
        }
        //Blocking the ability to select booked dates if date is past
        if(moment(selectedDate).isBefore(moment(), 'day')){
            return;
        }
        setSelectedDates(prevSelectedDates => {
            const dateExists = prevSelectedDates.some(dateObj => moment(dateObj.date).isSame(selectedDate, 'day'));
    
            if (!dateExists) {              
                return [...prevSelectedDates, { date: selectedDate }];
            } else {
                return prevSelectedDates.filter(dateObj => !moment(dateObj.date).isSame(selectedDate, 'day'));
            }
        });
    };


    //Map booked dates to events
    const events = dates.map(date => ({
        title: 'Booked',
        start: new Date(date.date),
        end: moment(date.date).add(1, 'day').toDate(),
    }));

    //Set the color of the selected dates
    const dayPropGetter = (date: Date) => {
        const isSelected = selectedDates.some(dateObj => moment(dateObj.date).isSame(date, 'day'));
        if(moment(date).isBefore(moment(), 'day')){
            return {
                className: 'bg-gray-200 cursor-not-allowed'
            };
        }
        if (isSelected) {
            return {
                className: 'bg-orange-300 cursor-pointer'
            };
        }
        else{
            return {
                className: 'cursor-pointer'
            };
        }
    };

    //Data send to backend
    const createCarReservation = async (user_id: number, car_id: number, date: Date) => {
        try {
            console.log(user_id, car_id, date);
            //Add 2hours to date to get the correct time
            const dateUTC = moment(date).add(2, 'hours').toISOString();
            const response = await axios.post('http://localhost:3000/api/reservations', {
                user_id,
                car_id,
                dateUTC
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error creating reservation:', error);
        }
    };

    const handleReservationButtonClick = () => {
        selectedDates.forEach(({ date }) => {
            console.log(date);
            createCarReservation(user, car_id, date);
        });
    };


    useEffect(() => {
        getReservationsData();
    }, [])

    return (
        <div className='w-[380px] h-[380px] shadow-xl'>
            <Calendar
                defaultView='month'
                views={['month']}
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ width: '100%', height: '100%' }}
                selectable={true}
                onSelectSlot={(slotInfo) => handleDateSelection(slotInfo.start) }
                dayPropGetter={dayPropGetter}            

            /> 
            {selectedDates.length > 0 && (
            <div className='flex flex-wrap text-xs gap-2 py-1'>
                <span className='text-orange-500'>Selected dates:</span>
                {selectedDates.map(dateObj => <p key={dateObj.date.toString()}>{moment(dateObj.date).format('DD-MM-YYYY')}</p>)}
            </div>)}
            <div 
                onClick={handleReservationButtonClick}
                className='w-24 mt-2 text-orange-500 text-center m-auto px-4 py-2 rounded-xl border-[1px] border-orange-600 hover:bg-orange-500 hover:text-white duration-500 hover:scale-110 cursor-pointer font-semibold'>
                RentMe
            </div>
        </div>
       
    )
}

export default Reservations;
