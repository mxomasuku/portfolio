import React from "react";
import { Avatar, Heading, VStack} from "@chakra-ui/react";

const greeting = "Hello, I am Mxolisi!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const HeroSection = () => (
//   <FullScreenSection
//     justifyContent="center"
//     alignItems="center"
//     isDarkBackground
//     backgroundColor="#2A4365"
//   >
    <VStack h={'80vh'} justifyContent={'center'}>
    <Avatar size={'2xl'} name={'name'} src='https://i.pravatar.cc/150?img=7'/>
   <Heading as={'h5'} size={'md'}>
    {greeting}
   </Heading>
    <Heading as={'h1'} size={'3xl'} noOfLines={2}>
   {bio1}
  </Heading>
  <Heading as={'h1'} size={'3xl'} noOfLines={2}>
   {bio2}
  </Heading>
    </VStack>
  
//   </FullScreenSection>
   
);

export default HeroSection;