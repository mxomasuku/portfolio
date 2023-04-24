import React from "react";
import { Avatar, Heading, VStack} from "@chakra-ui/react";

const greeting = "Hello, I am Mxolisi!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const bio3 = "Welcome to my dojo"


const HeroSection = () => (

    <VStack h={'80vh'} justifyContent={'center'} backgroundImage={'../Images/scattered-forcefields.svg'}>
    <Avatar size={'2xl'} name={'name'} src='../Images/avatar.jpg'/>
   <Heading as={'h5'} size={'md'}>
    {greeting}
   </Heading>
    <Heading as={'h1'} size={'3xl'} noOfLines={2}>
   {bio1}
  </Heading>
  <Heading as={'h1'} size={'3xl'} noOfLines={2}>
   {bio2}
  </Heading>
  <Heading as={'h3'} size={'sm'}>{bio3}</Heading>
    </VStack>
  
//   </FullScreenSection>
   
);

export default HeroSection;