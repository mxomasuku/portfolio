import Markdown from 'react-markdown'
import aboutText from '../pages.json'
import { Container, Heading } from '@chakra-ui/react'

const About = () => {

  console.log(aboutText)

  return (
    <div>
      <Container>
        <Heading as={'h1'} p={8}>This is the About Page</Heading>
      <Markdown children={aboutText[0].pageContent}/>
      </Container>
    
    </div>
  )
}

export default About