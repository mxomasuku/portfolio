import React from 'react'
import {SimpleGrid, Box, Container, Heading, List, ListItem} from '@chakra-ui/react'
import {Link, Route, Routes} from 'react-router-dom'


const Blog = () => {
  return (
    <>

      <SimpleGrid as={'section'} minChildWidth={'500px'} rowGap={'10'}>
        <Box h={'400px'} bg={'ghostwhite'}>
<Container>
  <Heading as={'h3'}> React & Related Frameworks</Heading>

  <List>

    <ListItem>Chakra UI as an Alternative for Bootstrap and Tailwind CSS</ListItem>
    <ListItem>Discussing the new 'React-router-dom'</ListItem>
    <ListItem>useContext: is it as scary as all that?</ListItem>
    <ListItem>Formik & Chakra UI</ListItem>
  </List>
</Container>
        </Box>


        <Box color={'white'} bg={'blackAlpha.900'}>
        <Container>
  <Heading as={'h3'}>Bubble.io and UX</Heading>
  <List>
    <ListItem>Why I had learned Bubble.io</ListItem>
    <ListItem>Figma and Chakra UI</ListItem>
    <ListItem>The one UX Blogging Platform you will definitely enjoy</ListItem>
  </List>
</Container>
        </Box>
        <Box color={'white'} bg={'blackAlpha.800'}> 
        <Container>
  <Heading as={'h3'}> Philosophy & Stories</Heading>
  <List>
    <ListItem> <Link to="/article">Tragedy from Tomorrow</Link></ListItem>
    <ListItem>Rethinking Jordan Peterson</ListItem>
    <ListItem>On Learning Programming Without A Purpose</ListItem>
    <ListItem>Difference between wanting to learn and aiming to complete a course.</ListItem>
    <ListItem>My Asian classics</ListItem>
  </List>
</Container>
        </Box>

      </SimpleGrid>


      {/* <Routes>
        <Route path='/article' element={<ArticlePage/>}/>
   
      </Routes> */}
    </>
  )
}

export default Blog