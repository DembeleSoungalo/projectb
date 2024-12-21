import React from 'react';
import MainProvider from './State/MainContext';
import InfoSection from './Components/Project/InfoSection';
import SearchSection from './Components/Project/SearchSection';
import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css';

import {Navbar,Container} from 'react-bootstrap';



function App() {
  
  return (
    <div className="App">

      <Navbar expand="lg" bg='dark' variant='dark' >
        <Container>
          <Navbar.Brand >Github User </Navbar.Brand>
        </Container>
      </Navbar>
    
   <MainProvider>
   <SearchSection/>

    <InfoSection></InfoSection>
   </MainProvider>
    </div>
    
  );
}

export default App;
