import { Container, Box, Heading, List, ListItem } from "@chakra-ui/react"

const BubbleArticles = () => {
  return (
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
  )
}

export default BubbleArticles