import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const AddForm: React.FC<Props> = ({ isOpen, setIsOpen}) => {
  const [newCar, setNewCar] = useState({
    Brand_id: 0,
    Engine_id: 0,
    Model_id: 0,
    Production_year: 0,
    Color: '',
    url:'',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewCar((prevCar) => ({ ...prevCar, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/cars', newCar);
      setNewCar({
        Brand_id: 0,
        Engine_id: 0,
        Model_id: 0,
        Production_year: 0,
        Color: '',
        url:'',
      });
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={isOpen===false ? 'hidden': "max-w-md mx-auto mt-4 p-4 border rounded-xl shadow-lg absolute bg-white border-green-500 z-20"}>
      <h1 className="text-2xl font-bold mb-4">Add Car</h1>
      <svg className='h-8 w-8 absolute right-5 top-5 hover:scale-125 duration-200 cursor-pointer' onClick={()=>setIsOpen(!isOpen)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
      <div className="flex mb-2">
        <label className="block w-1/2 mr-2">
          Brand ID:
          <input
            type="number"
            name="Brand_id"
            value={newCar.Brand_id}
            onChange={handleChange}
            className="border w-full p-2"
          />
        </label>
        <label className="block w-1/2">
          Engine ID:
          <input
            type="number"
            name="Engine_id"
            value={newCar.Engine_id}
            onChange={handleChange}
            className="border w-full p-2"
          />
        </label>
      </div>
      <label className="block mb-2">
        Model ID:
        <input
          type="number"
          name="Model_id"
          value={newCar.Model_id}
          onChange={handleChange}
          className="border w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Production Year:
        <input
          type="number"
          name="Production_year"
          value={newCar.Production_year}
          onChange={handleChange}
          className="border w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Color:
        <input
          type="text"
          name="Color"
          value={newCar.Color}
          onChange={handleChange}
          className="border w-full p-2"
        />
      </label>
      <label className="block mb-2">
        Url:
        <input
          type="text"
          name="url"
          value={newCar.url}
          onChange={handleChange}
          className="border w-full p-2"
        />
      </label>
      <button type="submit" className='p-2 font-semibold text-green-500 border-green-400 border-2 rounded-2xl m-2 hover:bg-green-400 hover:text-white hover:scale-110 duration-300 '>
        Add Car
      </button>
    </form>
  );
};

export default AddForm;
