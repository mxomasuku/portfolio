import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'
import Projects from '../Pages/Projects'
import Home from '../Pages/Home'
import ArticlePage from '../Pages/ArticlePage'
import { Flex, Box, Spacer, HStack, List, ListItem } from '@chakra-ui/react'


const Header = () => {
  return (
    <>
    <Flex as={"nav"} color={"whiteAlpha.800"} bg={"blackAlpha.900"} mb={'3'}>
      <Box>

        <List>
        <Flex >
          <HStack gap={4} pl={4}>
          <ListItem>Github</ListItem>
            <ListItem>Twitter</ListItem>
            <ListItem>LinkedIn</ListItem>
            <ListItem>Medium</ListItem>
            <ListItem>Reddit</ListItem>
          </HStack>
          </Flex>
        </List>

      </Box>
      <Spacer/>
     <Box>

      <List>
      <Flex justify={'space-between'} gap={4} display={{base: 'none', lg: 'block'}}>
          <HStack spacing={"30px"} pr={20}>
          <ListItem><Link to="/"> Home</Link></ListItem>     
            <ListItem><Link to ="/blog">Blog</Link></ListItem>
            <ListItem><Link to="/Contact">Contact Me</Link></ListItem>
            <ListItem><Link to="/Projects">Projects</Link></ListItem>
            
          </HStack>
        </Flex>
      </List>
      </Box>
    </Flex>


<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Projects' element={<Projects/>}/>
    <Route path='/article' element={<ArticlePage/>}/>
</Routes>
    </>
  )
}

export default Header