import { Heading, Container } from "@chakra-ui/layout"
import { useLoaderData, Link } from "react-router-dom"




const Writing = () => {
    const posts = useLoaderData()


  return (
    <div>
        <h2>Writing component is rendering here</h2>
      {posts.map(post =>{
        return(<Link to={post.id.toString()}>
          <Container>
          <Heading as={'h3'} size={'lg'} fontStyle={'bold'} color={'orange.600'}>{post.title}</Heading>
            <p> Written by <span>{post.author}</span> published on {post.date}</p>
          </Container>
         
            </Link>)
      })}
    </div>
  )
}

export default Writing

//loader

export const postLoader = async () =>{
  const res =  await fetch('  http://localhost:4000/posts')

  console.log(res)
  return res.json()
}
postLoader()
