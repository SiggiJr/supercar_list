import { Link } from "react-router-dom";

const CarItem = ({car}) => {

  return ( 
    <div className="car_item">
      <h1>{car.carMake}</h1>
      <Link to={`/car/${car.id}`}>Read more</Link>
    </div>
  );
}

// "id": 1,
//         "carModel": "Compass",
//         "CarMake": "Jeep",
//         "CarYear": 2009

export default CarItem;