import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { useColorMode, Button } from '@chakra-ui/react'
import React from 'react'

const ToggleDarkMode = () => {
    const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Button 
    onClick={() => toggleColorMode()}
    position={'absolute'}
    top={0}
    right={0}
    p={'1rem'}

    
    >{colorMode === 'light'?  <SunIcon/> : <MoonIcon/> }</Button>
  )
}

export default ToggleDarkMode