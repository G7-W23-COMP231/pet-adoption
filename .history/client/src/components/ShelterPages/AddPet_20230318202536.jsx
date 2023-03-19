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
            <option value=''>0 to 3 months</option>
            <option value='EFGH'>4 months to 6 months</option>
            <option value='IJKL'>7 months to 1 year old</option>
            <option value='MNOP'>1 year old to 2 years old</option>
            <option value=''>3 years old to 4 years old</option>
            <option value='EFGH'>4 years old and above</option>
          </select>
        </div>
        <div>
          <input
            type='email'
            name='email'
            placeholder='email'
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type='password'
            name='password'
            placeholder='password'
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <input
            type='password'
            name='confirmPassword'
            placeholder='confirm password'
            onChange={handleChange}
            required
          />
        </div>

        <button className='btn__signup' onClick={handleSubmit}>
          Save
        </button>
      </form>
    </div>
  );
};

export default AddPet;
