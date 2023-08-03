
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import join from './component/join/join';
import Chat from './component/Chat/Chat';




function App() {



  return (
    <div className="App">
    <Router>
      <Routes>
      
      <Route exact path='/' Component={join}/>
      <Route path='/chat'   Component={Chat}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;
