
import { Box } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ToggleDarkMode from '../Components/ToggleDarkMode';



const RootLayout = () => {
  return (
    <div className='root-layout'>
      <Box className='root' minHeight={'100vh'}>
        <ToggleDarkMode/>
        <Header/>
        <main>
          <Box >
          <Outlet/>
          </Box>
        </main>
        <footer className='footer'>
        <Footer/>
        </footer>
      </Box>
     
    </div>
 
  )
}

export default RootLayout