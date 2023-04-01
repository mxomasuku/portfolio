import {  Box } from '@chakra-ui/react'
import React from 'react'
import Work from '../Components/Work'
import HeroSection from '../Components/HeroSection'
import Blog from './Blog'

const Home = () => {
  const contStyles = {
    bg: "red.300",
    m: "10",
    py: "3",
    filter: "blur(2px)",
    ':hover': {
      bg: 'purple'
    }
  }
  return (
    <div>

    <Box>
      <HeroSection/>
      <Work />
      <Blog/>
    </Box>
    </div>
  )
}

export default Home