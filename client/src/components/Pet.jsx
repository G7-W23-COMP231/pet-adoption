import { petsData } from '../utils/pets';

const Pet = () => {
  // I will work on the fetching as soon as it is available
  return (
    <div>
      {petsData.map(pet => (
        <div key={pet.id}>
          <img
            src={pet.image}
            alt={pet.description}
            height='50px'
            width='50px'
          />

          <p>{pet.name}</p>
          <p>{pet.age}</p>
        </div>
      ))}
    </div>
  );
};

export default Pet;