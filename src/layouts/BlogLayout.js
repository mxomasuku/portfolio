import { Link } from 'react-router-dom'
import {SimpleGrid, Box, Container, Heading, List, ListItem, Text, Button} from '@chakra-ui/react'
import Posts from '../Pages/Blog/Posts'
import { async } from 'q'

const BlogLayout = () => {
  return (
    <div>
        
    <Box px={32}>
      <Container p={8} textAlign={'center'}>
      <Heading py={'8'}>Blog?</Heading>
      <Text>or compilation of ideas & an attempt to display competency</Text>
      </Container>
     
<Link to='posts'><Button>To Posts</Button></Link>
    
    <SimpleGrid as={'section'} minChildWidth={'500px'} rowGap={'10'} mt={'8'}>


      </SimpleGrid>

    </Box>

     
    </div>
  )
}

export default BlogLayout

// export const postsLoader = async () => {

// }