import { SimpleGrid, Heading } from "@chakra-ui/layout"
import {Link, useLoaderData} from 'react-router-dom'

const Blog = () => {
    const projects = useLoaderData()
  return (
    <div>
            <SimpleGrid as={'section'} minChildWidth={'500px'} rowGap={'10'} mt={'8'}>

{projects.map(project => {return(<Link to={project.id.toString()} key={project.id}><Heading >{project.name}</Heading></Link>)})}
      </SimpleGrid>
    </div>
  )
}

export default Blog

export const postsLoader = async () => {
    const res = await fetch(  'http://localhost:4000/ProjectsDb/')
    //console.log(res)
  
    if(!res.ok){
      throw Error('Could not find the post you are looking for')
    }
    return res.json()
    
   }
   
   postsLoader()