import { petsData } from '../utils/pets';

const Pet = () => {
  // I will work on the fetching as soon as it is available
  return (

    <table>
      <tbody>
        {petsData.map((image, pet.id) => (
          <tr key={index}>
            <td>
              <img src={pet.image} alt={pet.description} 
                height='50px'
                width='50px'
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

};

export default Pet;