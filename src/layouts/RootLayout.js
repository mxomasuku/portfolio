import React from 'react'
import { Flex, Box, Spacer, HStack, List, ListItem } from '@chakra-ui/react'
import { NavLink, Outlet } from 'react-router-dom'

import Header from '../Components/Header';
import Footer from '../Components/Footer';



const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Box className='root' minHeight={'100vh'}>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <footer className='footer'>
        <Footer/>
        </footer>
      </Box>
     
    </div>
 
  )
}

export default RootLayout