import {  Box, Button, Container } from '@chakra-ui/react'
import React from 'react'
import Work from '../Components/Work'
import HeroSection from '../Components/HeroSection'
import Blog from './Writing'
import {Link} from 'react-router-dom'

const Home = () => {

  return (
    <>

    <Box>
      <HeroSection/>
      <Work />
      <Container  alignItems={'center'} m={'auto'}>
        <Link to="/contact"><Button >Contact me for more details</Button></Link>
      </Container>
      <Box margin={8} px={32}>
        <Blog />
        
      </Box>
    </Box>
    </>
  )
}

export default Home