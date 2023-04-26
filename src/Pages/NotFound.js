import { Container, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
        <Container textAlign={'center'} mt='12'>
            <Heading as={'h1'}>Nigga you are lost!!</Heading>
            <Text>You can browse for more posts <Link to='/writing'> <Text color={"orange.400"} display={'inline-block'}>here</Text> </Link>
        or <Link to='/'><Text color={"orange.400"} display={'inline-block'}> go back to homepage</Text></Link></Text>
        </Container>
    </div>
  )
}

export default NotFound