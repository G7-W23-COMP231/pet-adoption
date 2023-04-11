import { Input, IconButton, InputGroup } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import React from 'react';

const SearchBar = ({ onSearchChange }) => {
  return (
    <InputGroup>
      <Input
        position='relative'
        type='text'
        placeholder='search'
        onChange={onSearchChange}
        borderRadius={20}
      />
      <IconButton
        position='absolute'
        right='0'
        borderRadius='full'
        aria-label='Search pets'
        width='30%'
        zIndex={1}
        colorScheme='teal'
        bg='teal.400'
        icon={<SearchIcon />}
      />
    </InputGroup>
  );
};

export default SearchBar;
