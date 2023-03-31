// Default value of form field in AddPet component
export const addPetDefaultField = {
  file: '',
  petPhoto: '',
  petName: '',
  petCategory: '',
  ShelterID: '',
  Age: '',
  gwithFirstPetOwner: '',
  canGetAlongWithOtherPets: '',
  canGetWithHumanAge: '',
  indoorOutdoor: '',
  petOutsideHours: '',
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
  vaccRecord: '',
};

export const addOwnerDefaultField = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
  city: '',
  country: '',
  province: '',
  street:'',
  age: '',
  favorites: '',
};

// property that needs for all radio buttons in form AddPet component
export const radioOptions = [
  {
    label: 'Good for first time pet owner?',
    name: 'gwithFirstPetOwner',
  },
  {
    label: 'Can get along with other pets?',
    name: 'canGetAlongWithOtherPets',
  },
  {
    label: 'Is this pet a service animal?',
    name: 'serviceAnimal',
  },
  {
    label: 'Does this pet have special needs (behavioral/mental)?',
    name: 'specialNeeds',
  },
];

export const radioUserReg = [
  {
    label: 'Existing Pet Owner?',
    name: 'existingPetOwner',
  },
];
// property that needs for all dropdown input in AddPet component
export const selectOptions = [
  {
    label: 'Pet Category',
    name: 'petCategory',
    options: ['Canine (dogs)', 'Feline (cats)', 'Other'],
  },
  {
    label: 'Age',
    name: 'age',
    options: [
      '0 to 3 months',
      '4 months to 6 months',
      '7 months to 1 year old',
      '1 year old to 2 years old',
      '3 years old to 4 years old',
      '4 years old and above',
    ],
  },
  {
    label: 'Indoor or Outdoor pet?',
    name: 'indoorOutdoor',
    options: ['Indoor or outdoor', 'Outdoor pet'],
  },
  {
    label: 'Needs to stay outdoors for how many hours?',
    name: 'petOutsideHours',
    options: [
      '0 to 30 minutes',
      '30 minutes to 1 hour',
      ' 1 hour to 2 hours',
      '2 hours or more',
    ],
  },
  {
    label: 'If owner is not at home, where will the pet be?',
    name: 'petStay',
    options: [
      'the garage',
      'in the yard',
      'loose in the house',
      'confined to one room in the house',
    ],
  },
  {
    label: 'Is this an enthusiastic pet?',
    name: 'enthusiasticPet',
    options: ['Not at all', 'Very enthusiastic', 'Somewhat'],
  },
  {
    label: 'Is this a playful pet?',
    name: 'playfulPet',
    options: ['Not at all', 'Very enthusiastic', 'Somewhat'],
  },
  {
    label: 'Is this a laidback pet?',
    name: 'laidbackPet',
    options: ['Not at all', 'Very enthusiastic', 'Somewhat'],
  },
  {
    label: 'How easy is it to train this pet?',
    name: 'trainablePet',
    options: [
      'Very easy to train',
      'Some challenge is encountered',
      'Very challenging to train',
    ],
  },
];

// property that needs for all text are in AddPet Component
export const textAreaOptions = [
  {
    name: 'medHistory',
    label: 'Medical History',
  },
  {
    name: 'behaveIssue',
    label: 'Any behavioural Issue',
  },
  {
    name: 'vaccRecord',
    label: 'Vaccination records (if any)',
  },
];

//-- Pet Owner (PO) Survey Match Forms
// Default value of form field in AddPet component
export const petOwnerSurveyDefaultField = {
  ageBracket: '',
  existingPetOwner: '',
  okWithOtherPet: '',
  petGoodWith: '',
  indoorOutdoor: '',
  hoursOutside: '',
  petArea: '',
  servicePet: '',
  enthusiasticPet: '',
  playfulPet: '',
  laidBackPet: '',
  willingToTrainPet: '',
  specialNeeds: '',
};

export const radioOptionsPO = [
  {
    label: 'Are you an existing pet owner?',
    name: 'existingPetOwner',
  },
  {
    label: 'Does your new pet need to get along with other pets?',
    name: 'okWithOtherPet',
  },
  {
    label: 'Do you want an outdoor pet?', //answer to Yes/No question for radio options
    name: 'indoorOutdoor',
  },
  {
    label: 'Are you willing to get a service animal?',
    name: 'servicePet',
  },
  {
    label: 'Are you willing to adopt a pet with special needs (medical or behavioral)?',
    name: 'specialNeeds',
  },
];

export const selectOptionsPO = [
  {
    label: 'How old are you?',
    name: 'ageBracket',
    options: [
      '18-25 years old', 
      '26 to 33 years old', 
      '33 to 40 years old', 
      '40 to 50 years old', 
      '50 years old and above' 
    ],
  },
  {
    label: 'Your new pet needs to be good with:',
    name: 'petGoodWith',
    options: [
      'Children UNDER 8 years old',
      'Children OVER 8 years old',
      'Elderly',
    ],
  },
  {
    label: 'How many hours will your pet spend outside per day?',
    name: 'petOutsideHours',
    options: [
      '0 to 30 minutes',
      '30 minutes to 1 hour',
      ' 1 hour to 2 hours',
      '2 hours or more',
    ],
  },
  {
    label: 'When I am at home, I want my pet to be by my side?',
    name: '',
    options: [
      'All of the time',
      'Some of the time',
      'Little of the time',
      '2 hours or more',
    ],
  },



  {
    label: 'When I am not at home, my new pet will stay at:',
    name: 'petArea',
    options: [
      'the garage',
      'in the yard',
      'loose in the house',
      'confined to one room in the house',
    ],
  },
  {
    label: 'Do you want an enthusiastic pet?',
    name: 'enthusiasticPet',
    options: ['Not at all', 'Very enthusiastic', 'Somewhat'],
  },
  {
    label: 'Do you want a playful pet?',
    name: 'playfulPet',
    options: ['Not at all', 'Very enthusiastic', 'Somewhat'],
  },
  {
    label: 'Do you want a laidback pet?',
    name: 'laidbackPet',
    options: ['Not at all', 'Very enthusiastic', 'Somewhat'],
  },
  {
    label: 'Are you willing to train your pet?',
    name: 'trainablePet',
    options: [
      'No training',
      'Some training',
      'A lot of training',
    ],
  },
];