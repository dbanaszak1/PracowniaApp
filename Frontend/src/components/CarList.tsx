
interface Props {
    cars:{
        Car_id: number;
        BrandName: string;
        Name: string;
        Production_year: number;
        Color: string;
        Seats: number;        
    }[]
  }

const CarList = ({cars}: Props) => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-2xl p-4 border rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Car List</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="py-2 px-5 border">Id</th>
              <th className="py-2 px-5 border">Brand</th>
              <th className="py-2 px-5 border">Model</th>
              <th className="py-2 px-5 border">Year</th>
              <th className="py-2 px-5 border">Color</th>
              <th className="py-2 px-5 border">Seats</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.Car_id} className="border-b">
                <td className="py-2 px-5 border">{car.Car_id}</td>                
                <td className="py-2 px-5 border">{car.BrandName}</td>
                <td className="py-2 px-5 border">{car.Name}</td>
                <td className="py-2 px-5 border">{car.Production_year}</td>
                <td className="py-2 px-5 border">{car.Color}</td>
                <td className="py-2 px-5 border">{car.Seats}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CarList
