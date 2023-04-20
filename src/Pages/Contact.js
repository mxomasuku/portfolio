import {TabList, TabPanels, Tabs, Tab, Text, TabPanel, FormControl, FormLabel, Input, FormHelperText, 
  Container, Heading, Textarea, Button, RadioGroup, Radio, CheckboxGroup, Checkbox } from '@chakra-ui/react'
import React from 'react'
import {Form} from 'react-router-dom'


const Contact = () => {
  return (
    <div>
      <Tabs >
        <TabList>
          <Tab>
            <Text>
              Contact as Client
            </Text>
          </Tab>

          <Tab color={'white'} bg={'blue.500'}>
            <Text>
              Contact for Collaboration
            </Text>
          </Tab>

        </TabList>

        <TabPanels>
          <TabPanel >
            <Container >
            <form >
            <Heading as={'h2'} size={'xl'} pb={'10px'}>Enter your contact details</Heading>

            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                  <Input type={'name'}/>
                  <FormHelperText>Enter your name here</FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type={'email'}/>
              <FormHelperText>Enter your email here</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Job Desciption</FormLabel>
              <Textarea/>
            </FormControl>

           <Button type={'submit'}>Submit</Button>
         
              </form>
            </Container>
         
          </TabPanel>
          <TabPanel>
       
          <Container color={'white'} bg={'blue.800'}>
            <form>
            <Heading as={'h2'} size={'xl'} pb={'10px'}>Hey Dev, I am looking forward to working with you, please fill out this contact form and I will get back to you</Heading>

            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                  <Input type={'name'}/>
                  <FormHelperText>Enter your name here</FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type={'email'}/>
              <FormHelperText>Enter your email here</FormHelperText>
            </FormControl>
            <FormControl>
              <FormLabel>Job Desciption</FormLabel>
              <Textarea/>
            </FormControl>

            <FormControl>
              <FormLabel>Priority Level</FormLabel>

              <RadioGroup>
                <Radio>Urgent</Radio>
                <Radio>Medium</Radio>
                <Radio>Relaxed</Radio>
              </RadioGroup>
            </FormControl>

            <FormControl>
              <CheckboxGroup>
                <Checkbox/>
                <FormLabel>React</FormLabel>

                <Checkbox/>
                <FormLabel>Bubble</FormLabel>

                <Checkbox/>
                <FormLabel>Next</FormLabel>

                <Checkbox/>
                <FormLabel>UI, UX & SEO</FormLabel>

                <Checkbox/>
                <FormLabel>Other</FormLabel>
              </CheckboxGroup>
            </FormControl>

           <Button type={'submit'}>Submit</Button>
         
              </form>
            </Container>
         
          </TabPanel>

        </TabPanels>

      </Tabs>

    </div>
  )
}

export default Contact