import { Container, Box, Heading, List, ListItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const StuffArticles = () => {
  return (
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
  )
}

export default StuffArticles



