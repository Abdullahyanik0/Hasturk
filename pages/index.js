import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Landing, ProductCard } from '../components';


//local imports

import { MainTemplate, Meta } from '../templates';

const Home = () => {
  return (
    <MainTemplate meta={<Meta title="Ana Sayfa" description="main page" />}>
      <Flex p={20} w="full" alignItems="center" justifyContent="center" direction="column">
        <Landing />
        
      </Flex>
      
      
    </MainTemplate>
  );
};

export default Home;
