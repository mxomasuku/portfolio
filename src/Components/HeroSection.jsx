import React from "react";
import { Avatar, Heading, VStack} from "@chakra-ui/react";

const greeting = "Hello, I am Mxolisi!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const bio3 = "Welcome to my dojo"


const HeroSection = () => (

    <VStack h={{base: '50vh', md: '60vh', lg: '80vh'}} justifyContent={'center'} backgroundImage={{base: 'none', md: '../Images/scattered-forcefields.svg'}}>
    <Avatar size={{ base:'md', md:'xl',lg:'2xl'}} name={'name'} src='../Images/avatar.jpg' border={'4px'} borderColor={'orange.700'}/>
   <Heading as={'h5'} size={'md'} color={'ghostwhite'}>
    {greeting}
   </Heading>
    <Heading as={'h1'} size={{ base:'xl', md:'2xl',lg:'3xl'}} noOfLines={2} color={'ghostwhite'}>
   {bio1}
  </Heading>
  <Heading as={'h1'} size={{ base:'xl', md:'2xl',lg:'3xl'}} noOfLines={2} color={'ghostwhite'}>
   {bio2}
  </Heading>
  <Heading as={'h3'} size={{ base:'sm', md:'sm',lg:'sm'}} color={'ghostwhite'}>{bio3}</Heading>
    </VStack>
  
//   </FullScreenSection>
   
);

export default HeroSection;