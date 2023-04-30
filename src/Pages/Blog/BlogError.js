import { Heading } from "@chakra-ui/react"
import { useRouteError } from "react-router"



const BlogError = () => {
const error = useRouteError()
  return (
    <div>
      <Heading>{error.message}</Heading>
    </div>
  )
}

export default BlogError