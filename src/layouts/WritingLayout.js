import React from 'react'
import {SimpleGrid, Box, Container, Heading, Text} from '@chakra-ui/react'

import Newsletter from '../Components/Newsletter'
import ReactArticles from '../Components/ReactArticles'
import BubbleArticles from '../Components/BubbleArticles'
import StuffArticles from '../Components/StuffArticles'
import { Outlet } from 'react-router'
import Writing from '../Pages/Writing/Writing'


const WritingLayout = () => {
  return (
    <>

    <Box px={32}>
      <Box textAlign={'center'}>
        <Heading py={'8'}>Blog?</Heading>
     
      </Box>
  
    {/* <Newsletter/> */}

<SimpleGrid as={'section'} minChildWidth={'500px'} rowGap={'10'} mt={'8'}>
  {/* <ReactArticles/>
  <BubbleArticles/>
  <StuffArticles/> */}
  {/* <Writing/> */}
</SimpleGrid>

    </Box>

    <Outlet/>

    </>
  )
}

export default WritingLayout