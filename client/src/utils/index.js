// Default value of form field in AddPet component
export const addPetDefaultField = {
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
    label: 'This pet needs to stay outdoors for how many hours?',
    name: 'petOutsideHours',
    options: [
      '0 to 30 minutes',
      '30 minutes to 1 hour',
      ' 1 hour to 2 hours',
      '2 hours or more',
    ],
  },
  {
    label: 'When the owner is not at home, where will the pet be?',
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
    name: 'medhistory',
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
