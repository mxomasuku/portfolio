import React from 'react'
import { NavLink} from 'react-router-dom'
import { Flex, Box, Spacer, HStack, List, ListItem, Heading } from '@chakra-ui/react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
 
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const Header = () => {
  return (

    <nav>
        
      <Flex as={"nav"} color={"whiteAlpha.800"} bg={"blackAlpha.900"} px={16} py={4} alignItems={'center'}>
      <HStack display={{base: 'block',md: 'block', lg: 'none'}} justifyContent={'center'}>
        <FontAwesomeIcon icon={faHome} size='2xl'/>
        <Heading as={'h2'}>Contact Me</Heading>
      </HStack>
          <HStack spacing={8} display={{base:'none', lg: 'block'}}>
              {socials.map(({ url, icon }, index) => (
                <a key={index} href={url}>
                  <FontAwesomeIcon icon={icon} size="lg" />
                </a>
              ))}
            </HStack>
      <Spacer/>
     <Box>

 

      <List textAlign={'center'} display={{base:'none', lg: 'block'}}>
      <Flex justify={'space-between'} gap={4}  >
          <HStack spacing={"30px"} pr={20} >
          <ListItem><NavLink to="/"> Home</NavLink></ListItem>
            <ListItem><NavLink to ="/writing">Writing</NavLink></ListItem>
            <ListItem><NavLink to="/Contact">Contact Me</NavLink></ListItem>
            <ListItem><NavLink to="/Projects">Projects</NavLink></ListItem>
            <ListItem><NavLink to="/help">Help</NavLink></ListItem>
            <ListItem><NavLink to="/about">About</NavLink></ListItem>

          </HStack>
        </Flex>
      </List>
      </Box>
    </Flex>

    </nav>
  )
}

export default Header