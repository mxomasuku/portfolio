import React from 'react'
import { FormControl, Button, Box, Input, Heading, FormLabel, Spacer, useToast } from '@chakra-ui/react'

const Newsletter = () => {

const toast = useToast()

const showToast = () => {
    toast({
        status: 'success',
        title: 'You have subscribed',
        duration: '4000',
        description: 'please check your mail and confirm',


    })

}
  return (
    <div>
        <Box h={'40vh'} bg={'blackAlpha.200'} m={'auto'} shadow={10} p={'4'}  textAlign={'center'}>
            <Heading as={'h3'} py={'6'}>Sign up to Newsletter</Heading>
            <form>
            <Box mb={'4'}>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input type={'email'} borderColor={'purple.400'}/>
            </FormControl>
            </Box>
            <Button color={'white'} bg={'blackAlpha.800'} type={'submit'} onClick={showToast()}>Sign up for newsletter</Button>
            </form>
        </Box>

    </div>
  )
}

export default Newsletter