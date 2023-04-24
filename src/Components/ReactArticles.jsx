import { Container, Box, Heading, List, ListItem, Button } from "@chakra-ui/react"
import postList from '../posts.json'
import { Link } from "react-router-dom"
import ReactMarkdown from 'react-markdown'

const ReactArticles = () => {
    console.log(postList)
    const excerptList = postList.map(post =>{
      return post.content.split(" ").slice(0, 25).join(" ")
    }
    )
    console.log(excerptList)
  return (
    <Box h={'400px'} bg={'ghostwhite'}>
    <Container>
      <Heading as={'h3'}> React & Related Frameworks</Heading>
      {postList.length && postList.map((post, i) =>{
        return (
        
             <Link key={post.id}>
                <Box border={2} borderColor={"blackAlpha.300"}>
                    <Heading as={'h4'} size={'sm'}>{post.title}</Heading>
                    <small>Published on {post.date} by {post.author}</small>
                    <small>{excerptList[i]}</small>
                    <small><Button>Read More</Button></small>
                    <hr/>

             </Box>
        
                    
            </Link>   
          
        )
      })}
      <List>
        <ListItem>Chakra UI as an Alternative for Bootstrap and Tailwind CSS</ListItem>
        <ListItem>Discussing the new 'React-router-dom'</ListItem>
        <ListItem>useContext: is it as scary as all that?</ListItem>
        <ListItem>Formik & Chakra UI</ListItem>
      </List>
    </Container>
    </Box>
  )
}

export default ReactArticles