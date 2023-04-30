import React from 'react'
import {SimpleGrid, Box, Container, Heading, List, ListItem, Text} from '@chakra-ui/react'
import {Link, Route, Routes, useLoaderData, useParams} from 'react-router-dom'
import BlogLayout from '../../layouts/BlogLayout'




const Posts = () => {
  const {id} = useParams()
  const project = useLoaderData()


  return (


<>
<Box h={'400px'} >

  {/* <Heading as={'h3'}>{project.id}</Heading> */}

 
{id}
        </Box>
  
  </>


  )
}

export default Posts

export const projectLoader = async ({params}) => {
  const {id} = params
  const res = await fetch('http://localhost:4000/ProjectsDb/' + id)
  console.log(res)
  if(!res.ok){
    throw Error('Could not find the post you are looking for')
  }
  return res.json()
  }




