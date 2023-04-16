import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Image,
  SimpleGrid,
  Input,
  Select,
  RadioGroup,
  Radio,
  FormLabel,
  HStack,
  Text,
  Textarea,
} from '@chakra-ui/react';

import axios from 'axios';

import { useForm } from 'react-hook-form';
import noImage from '../../assets/no-image-placeholder.webp';
const EditPet = ({ pet }) => {
  console.log(pet);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async data => {
    try {
      const token = localStorage.getItem('token');
      //https://petadoptionteam.azurewebsites.net/
      await axios.put(`http://localhost:5000/pets/editpet/${pet._id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      alert('Updated Successfully');
      navigate('/showpets');
    } catch (error) {
      console.error(error);
      alert('Something went wrong', error);
    }
  };

  const onCancel = e => {
    navigate('/showpets');
  };

  if (!pet) return;

  return (
    <Box width='80%' h='full' mx='auto' my={10}>
      <Image
        src={pet.petPhoto || noImage}
        alt='Pet photo'
        height={180}
        width={180}
        mb={5}
        borderRadius='md'
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box position='relative'>
            <FormLabel>Name</FormLabel>
            <Input
              defaultValue={pet.petName}
              {...register('petName', { required: true, minLength: 2 })}
            />
            {errors.petName?.type === 'required' && (
              <Text position='absolute' border={-10} color='red'>
                Name is Required
              </Text>
            )}
          </Box>

          <Box position='relative'>
            <FormLabel>Breed</FormLabel>
            <Input
              defaultValue={pet.petBreed}
              {...register('petBreed', { required: true })}
            />
            {errors.petBreed?.type === 'required' && (
              <Text position='absolute' border={-10} color='red'>
                Breed is Required
              </Text>
            )}
          </Box>

          <Box>
            <FormLabel>Gender</FormLabel>
            <Input
              defaultValue={pet.petGender}
              {...register('petGender', { required: true })}
            />
            {errors.petGender?.type === 'required' && (
              <Text position='absolute' border={-10} color='red'>
                Gender is Required
              </Text>
            )}
          </Box>

          <Box>
            <FormLabel>Category</FormLabel>
            <Select defaultValue={pet.petCategory} {...register('petCategory')}>
              <option value='Canine (dogs)'>Canine (dogs)</option>
              <option value='Feline (cats)'>Feline (cats)</option>
              <option value='Other'>Other</option>
            </Select>
          </Box>

          <Box>
            <FormLabel>Age</FormLabel>

            <Select defaultValue={pet.age} {...register('age')}>
              <option value='0 to 3 months'>0 to 3 months</option>
              <option value='4 months to 6 months'>4 months to 6 months</option>
              <option value='7 months to 1 year old'>
                7 months to 1 year old
              </option>
              <option value='1 year old to 2 years old'>
                1 year old to 2 years old
              </option>
              <option value='3 years old to 4 years old'>
                3 years old to 4 years old
              </option>
              <option value='4 years old and above'>
                4 years old and above
              </option>
            </Select>
          </Box>
          {/* inddor */}
          <Box>
            <FormLabel>Indoor or Outdoor</FormLabel>
            <Select
              defaultValue={pet.indoorOutdoor}
              {...register('indoorOutdoor')}
            >
              <option value='Indoor or outdoor'>Indoor or Out door</option>
              <option value='Outdoor pet'>Outdoor pet</option>
            </Select>
          </Box>

          {/* need to stay outside */}
          <Box>
            <FormLabel>Needs to stay outdoors for how many hours?</FormLabel>
            <Select
              defaultValue={pet.petOutsideHours}
              {...register('petOutsideHours')}
            >
              <option value='0 to 30 minutes'>0 to 30 minutes</option>
              <option value='30 minutes to 1 hour'>30 minutes to 1 hour</option>
              <option value='1 hour to 2 hours'>1 hour to 2 hours</option>
              <option value='2 hours or more'>2 hours or more</option>
            </Select>
          </Box>

          <Box>
            <FormLabel>
              If owner is not at home, where will the pet be?
            </FormLabel>

            <Select defaultValue={pet.petStay} {...register('petStay')}>
              <option value='the garage'>The Garage</option>
              <option value='in the yard'>In the yard</option>
              <option value='loose in the house'>Loose in the house</option>
              <option value='confined to one room in the house'>
                Confined to one room in the house
              </option>
            </Select>
          </Box>

          <Box>
            <FormLabel>Is this an enthusiastic pet?</FormLabel>
            <Select
              defaultValue={pet.enthusiasticPet}
              {...register('enthusiasticPet')}
            >
              <option value='Not at all'>Not at all</option>
              <option value='Very enthusiastic'>Very enthusiastic</option>
              <option value='Somewhat'>Somewhat</option>
            </Select>
          </Box>

          <Box>
            <FormLabel>Is this a playful pet?</FormLabel>
            <Select defaultValue={pet.playfulPet} {...register('playfulPet')}>
              <option value=''>Playful?</option>
              <option value='Not at all'>Not at all</option>
              <option value='Very enthusiastic'>Very enthusiastic</option>
              <option value='Somewhat'>Somewhat</option>
            </Select>
          </Box>

          <Box>
            <FormLabel>Is this a playful pet?</FormLabel>
            <Select defaultValue={pet.laidbackPet} {...register('laidbackPet')}>
              <option value='Not at all'>Not at all</option>
              <option value='Very enthusiastic'>Very enthusiastic</option>
              <option value='Somewhat'>Somewhat</option>
            </Select>
          </Box>

          <Box>
            <FormLabel>How easy is it to train this pet?</FormLabel>
            <Select
              defaultValue={pet.trainablePet}
              {...register('trainablePet')}
            >
              <option value='Very easy to train'>Very easy to train</option>
              <option value='Some challenge is encountered'>
                Some challenge is encountered
              </option>
              <option value='Very challenging to train'>
                Very challenging to train
              </option>
            </Select>
          </Box>
          <Box>
            <FormLabel>Good for first time pet owner?</FormLabel>
            <RadioGroup
              colorScheme='teal'
              defaultValue={pet.gwithFirstPetOwner}
            >
              <HStack justifyContent='space-between'>
                <Radio
                  {...register('gwithFirstPetOwner')}
                  name='gwithFirstPetOwner'
                  value='Yes'
                >
                  Yes
                </Radio>
                <Radio
                  {...register('gwithFirstPetOwner')}
                  name='gwithFirstPetOwner'
                  value='No'
                >
                  No
                </Radio>
                <Radio
                  {...register('gwithFirstPetOwner')}
                  name='gwithFirstPetOwner'
                  value='Somewhat'
                >
                  Somewhat
                </Radio>
              </HStack>
            </RadioGroup>
          </Box>

          <Box>
            <FormLabel>Can get along with other pets?</FormLabel>
            <RadioGroup
              colorScheme='teal'
              defaultValue={pet.canGetAlongWithOtherPets}
            >
              <HStack justifyContent='space-between'>
                <Radio
                  {...register('canGetAlongWithOtherPets')}
                  name='canGetAlongWithOtherPets'
                  value='Yes'
                >
                  Yes
                </Radio>
                <Radio
                  {...register('canGetAlongWithOtherPets')}
                  name='canGetAlongWithOtherPets'
                  value='No'
                >
                  No
                </Radio>
                <Radio
                  {...register('canGetAlongWithOtherPets')}
                  name='canGetAlongWithOtherPets'
                  value='Somewhat'
                >
                  Somewhat
                </Radio>
              </HStack>
            </RadioGroup>
          </Box>

          <Box>
            <FormLabel>Is this pet a service animal?</FormLabel>
            <RadioGroup colorScheme='teal' defaultValue={pet.serviceAnimal}>
              <HStack justifyContent='space-between'>
                <Radio
                  {...register('serviceAnimal')}
                  name='serviceAnimal'
                  value='Yes'
                >
                  Yes
                </Radio>
                <Radio
                  {...register('serviceAnimal')}
                  name='serviceAnimal'
                  value='No'
                >
                  No
                </Radio>
                <Radio
                  {...register('serviceAnimal')}
                  name='serviceAnimal'
                  value='Somewhat'
                >
                  Somewhat
                </Radio>
              </HStack>
            </RadioGroup>
          </Box>

          <Box>
            <FormLabel>
              Does this pet have special needs (behavioral/mental)?
            </FormLabel>
            <RadioGroup colorScheme='teal' defaultValue={pet.specialNeeds}>
              <HStack justifyContent='space-between'>
                <Radio
                  {...register('specialNeeds')}
                  name='specialNeeds'
                  value='Yes'
                >
                  Yes
                </Radio>
                <Radio
                  {...register('specialNeeds')}
                  name='specialNeeds'
                  value='No'
                >
                  No
                </Radio>
                <Radio
                  {...register('specialNeeds')}
                  name='specialNeeds'
                  value='Somewhat'
                >
                  Somewhat
                </Radio>
              </HStack>
            </RadioGroup>
          </Box>
          <Box>
            <FormLabel>Medical History</FormLabel>
            <Textarea
              defaultValue={pet.medHistory}
              {...register('medHistory')}
              placeholder='Write here...'
            />
          </Box>

          <Box>
            <FormLabel>Any Behavioural issue?</FormLabel>
            <Textarea
              defaultValue={pet.behaveIssue}
              {...register('behaveIssue')}
              placeholder='Write here...'
            />
          </Box>

          <Box>
            <FormLabel>Vaccination records (if any)?</FormLabel>
            <Textarea
              defaultValue={pet.vaccRecord}
              {...register('vaccRecord')}
              placeholder='Write here...'
            />
          </Box>
        </SimpleGrid>

        <Box mt={10}>
          <Button marginRight={3} colorScheme='teal' type='submit'>
            Submit
          </Button>
          <Button onClick={onCancel}>Cancel</Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditPet;
