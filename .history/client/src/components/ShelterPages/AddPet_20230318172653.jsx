import React, { useState } from 'react';
import './1ShelterPages.css';

const defaultFormField = {
  petName: '',
  petCategory: '',
  ShelterID: '',
  Age: '',
  gwithFirstPetOwner: '',
  canGetAlongWithOtherPets: '',
  canGetWithHumanAge: '',
  indoorOutdoor: '',
  petOusideHours: '',
  petWithOwnerAllTime: '',
  petStay: '',
  serviceAnimal: '',
  enthusiasticPet: '',
  playfulPet: '',
  laidbackPet: '',
  trainablePet: '',
  specialNeeds: '',
  petPhoto: '',
  medHistory: '',
  behaveIssue: '',
  vaccRecord: ''
};

const AddPet = () => {
  const [formField, setFormField] = useState(defaultFormField);
  //const { password, confirmPassword } = formField;

  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();

   /* if (password !== confirmPassword) {
      alert('Password do not match');
      return;
    }

    fetch('http://localhost:5000/animalshelter/info', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formField),
    })
      .then(res => res.json())
      .then(data => alert('Registered Succesfully'))
      .catch(err => alert('Something went wrong', err));*/
  };

  return (
    <div className='shelter__container'>
      <form className='shelter__container-form'>
        <div className='shelter__container-form_title'>
          <h2>Welcome</h2>
          <span>Please enter your pet details</span>
        </div>

        <div>
            <label>Pet Photo Link</label><br></br>
            <input
            type='text'
            name='petPhoto'
            placeholder='paste pet photo link here'
            onChange={handleChange}
            required
          />
        </div><br></br>

        <div>
            <label>Pet Name</label>
            <input
            type='text'
            name='petName'
            placeholder='Pet Name'
            onChange={handleChange}
            required
          />
        </div><br></br>

        <div>
            <label>Pet Category</label>
            <select name='petCategory' onChange={handleChange}>
            <option value='1'>canines (dogs)</option>
            <option value='2'>felines (cats)</option>
            <option value='3'>avian (birds)</option>
          </select>
        </div><br></br>

        <div>
            <label>Pet Age</label>
            <select name='age' onChange={handleChange}>
            <option value='1'>0 to 3 months</option>
            <option value='2'>4 months to 6 months</option>
            <option value='3'>7 months to 1 year old</option>
            <option value='4'>1 year old to 2 years old</option>
            <option value='5'>3 years old to 4 years old</option>
            <option value='6'>4 years old and above</option>
          </select>
        </div><br></br>

        <div>
            <label>Good for first time pet owner</label>
            <label>
                <input type="radio" name="gwithFirstPetOwner" value="1" checked/>
                Yes
            </label>
            <label>
                <input type="radio" name="gwithFirstPetOwner" value="2"/>
                No
            </label>
            <label>
                <input type="radio" name="gwithFirstPetOwner" value="3"/>
                Somewhat
            </label>
        </div><br></br>

        <div>
            <label>Can get along with other pets</label>
            <label>
                <input type="radio" name="canGetAlongWithOtherPets" value="1" checked/>
                Yes
            </label>
            <label>
                <input type="radio" name="canGetAlongWithOtherPets" value="2"/>
                No
            </label>
            <label>
                <input type="radio" name="canGetAlongWithOtherPets" value="3"/>
                Somewhat
            </label>
        </div><br></br>

        <div>
            <label>Can get along with humans whose ages are (click all that apply):</label><br></br>
            <input type="checkbox" name="canGetWithHumanAge" value="1"/>Children under 8 years old<br></br>
            <input type="checkbox" name="canGetWithHumanAge" value="2"/>Children over 8 years old<br></br>
            <input type="checkbox" name="canGetWithHumanAge" value="3"/>Elderly
        </div><br></br>

        <div>
            <label>Indoor or Outdoor Pet?</label>
            <select name='indoorOutdoor' onChange={handleChange}>
            <option value='1'>Indoor pet</option>
            <option value='2'>Outdoor pet</option>
          </select>
        </div><br></br>

        <div>
            <label>This pet needs to stay outdoors for how many hours?</label>
            <select name='petOusideHours' onChange={handleChange}>
            <option value='1'>0 to 30 minutes</option>
            <option value='2'>30 minutes to 1 hour</option>
            <option value='3'>1 hour to 2 hours</option>
            <option value='4'>2 hours or more</option>
          </select>
        </div><br></br>

        <div>
            <label>Does this pet want to be by his owner's side all the time?</label>
            <select name='petWithOwnerAllTime' onChange={handleChange}>
            <option value='1'>All of the time</option>
            <option value='2'>Some of the time</option>
            <option value='3'>Little of the time</option>
          </select>
        </div><br></br>

        <div>
            <label>When the owner is not at home, where will the pet be?</label>
            <select name='petStay' onChange={handleChange}>
            <option value='1'>the garage</option>
            <option value='2'>in the yard</option>
            <option value='3'>loose in the house</option>
            <option value='4'>confined to one room in the house</option>
          </select>
        </div><br></br>

        <div>
            <label>Is this pet a service animal?</label>
            <label>
                <input type="radio" name="serviceAnimal" value="1" checked/>
                Yes
            </label>
            <label>
                <input type="radio" name="serviceAnimal" value="2"/>
                No
            </label>
            <label>
                <input type="radio" name="serviceAnimal" value="3"/>
                Somewhat
            </label>
        </div><br></br>

        <div>
            <label>Is this an enthusiastic pet?</label>
            <select name='enthusiasticPet' onChange={handleChange}>
                <option value='1'>Not at all</option>
                <option value='2'>Very enthusiastic</option>
                <option value='3'>Somewhat</option>
            </select>
        </div><br></br>

        <div>
            <label>Is this a playful pet?</label>
            <select name='playfulPet' onChange={handleChange}>
                <option value='1'>Not at all</option>
                <option value='2'>Very playful</option>
                <option value='3'>Somewhat</option>
            </select>
        </div><br></br>

        <div>
            <label>Is this a laidback pet?</label>
            <select name='laidbackPet' onChange={handleChange}>
                <option value='1'>Not at all</option>
                <option value='2'>Very laidback</option>
                <option value='3'>Somewhat</option>
            </select>
        </div><br></br>

        <div>
            <label>How easy is it to train this pet?</label>
            <select name='trainablePet' onChange={handleChange}>
                <option value='1'>Very easy to train</option>
                <option value='2'>Some challenge is encountered</option>
                <option value='3'>Very challenging to train</option>
            </select>
        </div><br></br>

        <div>
            <label>Does this pet have special needs (behavioral/mental)</label>
            <label>
                <input type="radio" name="specialNeeds" value="1" checked/>
                Yes
            </label>
            <label>
                <input type="radio" name="specialNeeds" value="2"/>
                No
            </label>
        </div><br></br>

        <div>
            <label>Medical History</label>
                <input
                type='text'
                name='medHistory'
                onChange={handleChange}
                rows={4}
                />
        </div><br></br>

        <div>
            <label>Any behavioural issues?</label>
                <input
                type='text'
                name='behaveIssue'
                onChange={handleChange}
                rows={4}
                />
        </div><br></br>

        <div>
            <label>Vaccination record (if any)</label>
                <input
                type='text'
                name='vaccRecord'
                onChange={handleChange}
                rows={4}
                />
        </div><br></br>

        <button className='btn__signup' onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddPet;
