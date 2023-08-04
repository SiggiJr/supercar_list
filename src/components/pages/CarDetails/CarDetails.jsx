import { useParams } from "react-router-dom";
import CarItemList from '../../../data/data.json'

const CarDetails = () => {

  const carId = useParams().id;

  console.log(CarItemList);

  const car = CarItemList.find(car => car.id === Number(carId))

  console.log(car);

  return ( 
    <article>
      <p>{car.carMake}</p>
      <p>{car.carModel}</p>
      <p>{car.carYear}</p>
    </article>
  );
}

export default CarDetails;