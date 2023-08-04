import carItemList from '../../../data/data.json'
import CarItem from '../CarItem/CarItem';

const CarList = () => {
  return ( 
    <div className='grid'>
    {carItemList.map(car => <CarItem key={car.id} car={car}/>)}

    </div>
  );
}

export default CarList;