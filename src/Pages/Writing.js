import React from 'react'
import {SimpleGrid, Box, Container, Heading, Text} from '@chakra-ui/react'

import Newsletter from '../Components/Newsletter'
import ReactArticles from '../Components/ReactArticles'
import BubbleArticles from '../Components/BubbleArticles'
import StuffArticles from '../Components/StuffArticles'


const Writing = () => {
  return (
    <>

    <Box px={32}>
      <Container p={8} textAlign={'center'}>
        <Heading py={'8'}>Blog?</Heading>
        <Text>or compilation of ideas & an attempt to display competency</Text>
      </Container>
  
    <Newsletter/>

<SimpleGrid as={'section'} minChildWidth={'500px'} rowGap={'10'} mt={'8'}>
  <ReactArticles/>
  <BubbleArticles/>
  <StuffArticles/>
</SimpleGrid>

    </Box>

    </>
  )
}

export default Writing