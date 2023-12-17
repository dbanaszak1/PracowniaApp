import React, { useState } from 'react';
import axios from 'axios';

interface Props {
  fetchCars: () => void;
}

const AddForm: React.FC<Props> = ({ fetchCars }) => {
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

      fetchCars();
    } catch (error) {
      console.error('Error adding car:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-4 p-4 border rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Add Car</h1>
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
      <button type="submit" className='p-2 font-semibold text-blue-500 border-blue-400 border-2 rounded-2xl m-2 hover:bg-blue-400 hover:text-white hover:scale-110 duration-300 '>
        Add Car
      </button>
    </form>
  );
};

export default AddForm;
