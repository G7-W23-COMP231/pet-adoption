import { petsData } from '../utils/pets';
import { Image } from '@chakra-ui/react';

export default function Petdetail() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
     
     
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <Image
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='http://res.cloudinary.com/dmkpagj7j/image/upload/v1675859394/tlrbeg59kleshgyasrbd.png'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h1>Name: Bella</h1>
                    <h3>Breed: Siamese</h3>
                    <h4>Description: Bella is a sweet and loving dog </h4>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Age:</p>
                        <p className="mb-0">1</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Gender:</p>
                        <p className="mb-0">Female</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Location:</p>
                        <p className="mb-0">Los Angeles, CA</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Adoption Fee:</p>
                        <p className="mb-0">$150</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">ID:</p>
                        <p className="mb-0">2</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                    
                    </div>
                  </div>
                </div>
            
    </div>
  );
}
