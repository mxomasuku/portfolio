
import {Container, Heading, Text} from '@chakra-ui/react'
import { useParams, useLoaderData } from 'react-router-dom'


const Post = () => {

const {id} = useParams()
const post = useLoaderData()

  return(

      <Container>
     <Heading as={'h2'}>{post.title}</Heading>
     <Text>{post.author}</Text>

     <Text>{post.content}</Text>
   </Container>

 
  )


}

export default Post

//Loaders from 'react-router-dom

export const postDetailsLoader = async ({params}) =>{
  const {id} = params
const res = await fetch('http://localhost:4000/posts/' + id)
if(!res.ok){
  throw Error('Could not find the post you are looking for')
}

return res.json()

}