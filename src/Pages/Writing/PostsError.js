import { Container, Heading, Text } from "@chakra-ui/react"

import { useRouteError, Link } from "react-router-dom"


const PostsError = () => {
    const error = useRouteError()
  return (
    <Container>
        <Heading>Oops! {error.message}</Heading>

        <Text>You can browse for more posts <Link to='/writing'> <Text color={"orange.400"} display={'inline-block'}>here</Text> </Link>
        or <Link to='/'><Text color={"orange.400"} display={'inline-block'}> go back to homepage</Text></Link></Text>
    </Container>
  )
}

export default PostsError
