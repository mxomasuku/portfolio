import './App.css';

//React router
import 
{ createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider } from 'react-router-dom';

  //PAGES AND COMPONENTS

import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import SeekHelp from './Pages/Help/SeekHelp'
import FAQ from './Pages/Help/FAQ'
import About from './Pages/about';
import NotFound from './Pages/NotFound';
import Writing, {postLoader}from './Pages/Writing/Writing';
import Post, {postDetailsLoader} from './Pages/Writing/post';
import PostsError from './Pages/Writing/PostsError';


//Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import WritingLayout from './layouts/WritingLayout';









const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path = '/' element={<Root/>}>
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='writing' element={<WritingLayout/>}  errorElement={<PostsError/>} >
    {/* <Route path=':id' element={<Post/>}/> */}
    <Route 
    index 
    element={<Writing/>}
    loader={postLoader}
    />
    <Route
    path=":id"
    element={<Post/>}
    loader={postDetailsLoader}
   />
    </Route>
    <Route path='/about' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Projects' element={<Projects/>}/>
    {/* <Route path='/post/:id' render={(props) => {<Post {...props} />}}/> */}
   
    <Route path='help' element={<HelpLayout/>}>
    <Route path='faq' element={<FAQ/>}/>
    <Route path='seekhelp' element={<SeekHelp/>}/>
  
    
    </Route>
    <Route path={'*'} element={<NotFound/>}/>
    </Route>
  )
)

function App() {
  return (

      <RouterProvider router={router}/>


  );
}

export default App;
