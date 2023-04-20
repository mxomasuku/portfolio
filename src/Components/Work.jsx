import React from 'react'
import { SimpleGrid, Text, Card, CardHeader, CardBody, CardFooter, Flex, Box, Heading, Button, Spacer, Image, Container, Divider } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { ViewIcon, EditIcon } from '@chakra-ui/icons'


const Work = () => {

  const [cardData, setCardData] = useState('')
  const [items, setItems] = useState([])

  useEffect( () => {
    fetch(`http://localhost:3000/ProjectsDb/${cardData}`)
    .then(response => response.json())
    .then(json => setItems(json))
  }, [cardData])


  return ( 
    <>
      {items.length >= 1 ?  <SimpleGrid as={"section"} spacing={6} minChildWidth={'250px'} p={'10px'} margin={12}>

      
{items.map(item => { return(
  <Card key={item.id} borderTop={'8px'} borderColor={'purple.400'} bg={'white'}>
<CardHeader>
  <Flex>
    <Box w={'50px'} h={'5px'}>
<Text>AV</Text>
    </Box>

<Box>
  <Heading as={'h3'} size={'sm'}>
  {item.name}
  </Heading>
</Box>

  </Flex>

</CardHeader>
<CardBody>
<Text color={'gray.500'}>
    {item.description}
  </Text>

  <Image src={item.img} h={'200px'} w={'100%'}/>
</CardBody>
<Divider borderColor={'gray.300'}/>
<CardFooter>
<Button variant={'ghost'} leftIcon={<ViewIcon/>}>
  Watch
</Button>
<Spacer/>
<Button  variant= {'ghost'} leftIcon={<EditIcon/>}>
  Comment
</Button>

</CardFooter>
  </Card>
)})}

        {/* <Box border={'1px solid'} height={200}></Box>
        <Box border={'1px solid'} height={200}>1</Box>
        <Box border={'1px solid'} height={200}>3</Box> */}

      </SimpleGrid>  : <Container><Text>Projects coming soon</Text></Container>}

    </>

  )
}

export default Work