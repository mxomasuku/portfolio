import React from 'react'
import { Button, HStack } from '@chakra-ui/react'
import { Link, Outlet } from 'react-router-dom'

const HelpLayout = () => {
  return (
    <div>
        <HStack>
        <Link to={'faq'}><Button bgColor={'yellow.400'}>FAQ</Button></Link>
        <Link to={'seekhelp'}><Button>Contact Me</Button></Link> 
        </HStack>
      <Outlet/>
    </div>
  )
}

export default HelpLayout