import React, { useState } from 'react';
import './1ShelterPages.css';

const defaultFormField = {
  petPhoto: '',
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
          <label>Pet Photo</label>
          <input
            type='text'
            name='petPhoto'
            placeholder='<paste link to pet photo here>'
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Pet Name</label>
          <input
            type='text'
            name='petName'
            placeholder='Pet Name'
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Age</label>
          <select name='age' onChange={handleChange}>
            <option value='1'>0 to 3 months</option>
            <option value='2'>4 months to 6 months</option>
            <option value='3'>7 months to 1 year old</option>
            <option value='4'>1 year old to 2 years old</option>
            <option value='5'>3 years old to 4 years old</option>
            <option value='6'>4 years old and above</option>
          </select>
        </div>

        <div>
        <label>Good for first time pet owner?</label><br></br>
        <label>
          <input type="radio" name="gwithFirstPetOwner" value="1"/>
          Yes
        </label><br></br>
        <label>
          <input type="radio" name="gwithFirstPetOwner" value="2"/>
          No
        </label><br></br>
        <label>
          <input type="radio" name="gwithFirstPetOwner" value="3"/>
          Somewhat
        </label><br></br>
        </div>

        <div>
        <label>Can get along with other pets?</label><br></br>
        <label>
          <input type="radio" name="canGetAlongWithOtherPets" value="1"/>
          Yes
        </label><br></br>
        <label>
          <input type="radio" name="canGetAlongWithOtherPets" value="2"/>
          No
        </label><br></br>
        <label>
          <input type="radio" name="canGetAlongWithOtherPets" value="3"/>
          Somewhat
        </label><br></br>
        </div>

        <div>
        <label>Can get along with humans whose ages are (click all that apply):</label><br></br>
          <input type="checkbox" name="canGetWithHumanAge" value="1"/> Children under 8 years old<br></br>
          <input type="checkbox" name="canGetWithHumanAge" value="2"/> Children over 8 years old<br></br>
          <input type="checkbox" name="canGetWithHumanAge" value="3"/> Elderly<br></br>
        </div>

        <div>
        <label>Indoor or Outdoor pet?</label>
          <select name='age' onChange={handleChange}>
            <option value='1'>0 to 3 months</option>
            <option value='2'>4 months to 6 months</option>
          </select>
        </div>

        <button className='btn__signup' onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddPet;
