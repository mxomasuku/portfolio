import './App.css';

//React router
import 
{ createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider } from 'react-router-dom';

  //PAGES AND COMPONENTS
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Projects from './Pages/Projects'
import ArticlePage from './Pages/ArticlePage'
import SeekHelp from './Pages/Help/SeekHelp';
import FAQ from './Pages/Help/FAQ';

//Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';






const router = createBrowserRouter(
  createRoutesFromElements(
    // <Route path = '/' element={<Root/>}>
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='/blog' element={<Blog/>}/>
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/Projects' element={<Projects/>}/>
    <Route path='/articles' element={<ArticlePage/>}/>
    <Route path='help' element={<HelpLayout/>}>
      <Route path='faq' element={<FAQ/>}/>
      <Route path='seekhelp' element={<SeekHelp/>}/>
    
    </Route>
    </Route>
  )
)

function App() {
  return (

      <RouterProvider router={router}/>


  );
}

export default App;
