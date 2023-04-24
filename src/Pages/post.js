import React from 'react'
import {Container, Heading, Text} from '@chakra-ui/react'
import postList from '../posts.json'
import { Outlet, redirect, useParams } from 'react-router-dom'
import NotFound from './NotFound'
import PostLayout from '../layouts/PostLayout'


const Post = () => {

  const {id} = useParams

  // console.log(props)
  // console.log(postList)

  return(

      <div>
     <h2>{id}</h2>
   </div>

 
  )
  

  // const validId = parseInt(props.match.params.id)
  // if(!validId){
  //   return redirect("/404");
  // }
  // console.log(validId)

  //     return (

  //       <Heading as={'h1'}>Welcome to the post</Heading>
    
  //     )
    
  


}

export default Post