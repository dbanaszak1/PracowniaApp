import CarsTable from '../components/CarsTable';


const AdminPanel = () => {
  return (
    <div className='flex-row justify-center'>
      <h1 className='text-5xl text-blue-500 text-center font-semibold py-6'>Admin Panel</h1>
      <CarsTable/>
    </div>
  );
};

export default AdminPanel;
