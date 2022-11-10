import { Button as ChakraButton } from '@chakra-ui/react';
import * as React from 'react';
import monkey from './image.jpg';

export const OurButton = () => {
  return (
    <ChakraButton className="rounded-full !bg-blue-500 text-white">
      Boop
      <img src={monkey} />
    </ChakraButton>
  );
};
