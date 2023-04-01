import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>

<Header/>


    <Footer/>
    </ChakraProvider>

  );
}

export default App;
