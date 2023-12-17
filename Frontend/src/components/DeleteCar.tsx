import { useState } from 'react';
import axios from 'axios';

const DeleteCar = () => {
  const [carId, setCarId] = useState('');

  const handleChange = (e: any) => {
    setCarId(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:3000/admin/cars/${carId}`)
      .then(() => {
        console.log('Car deleted successfully');
      })
      .catch((error) => {
        console.log(`Error deleting car: ${error.response.data.error}`);
      });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Delete Car</h1>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Car ID:
          <input
            type="number"
            name="carId"
            value={carId}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          />
        </label>
        <button
          type="submit"
          className="p-2 font-semibold text-red-600 border-red-500 border-2 rounded-2xl m-2 hover:bg-red-500 hover:text-white hover:scale-110 duration-300 "
        >
          Delete Car
        </button>
      </form>
    </div>
  );
};

export default DeleteCar;