import React from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
import News from './components/News/News';

function App() {
  return (
    <div >
     <h1>Bootstraps</h1>
     <Button variant="primary">Primary</Button>
     
   <News></News>
    </div>
  );
}

export default App;
