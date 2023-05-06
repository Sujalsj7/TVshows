import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import ShowListScreen from './screens/ShowListScreen';
import ShowSummaryScreen from './screens/ShowSummaryScreen';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element= {<ShowListScreen/>}/>
          <Route exact  path="/summary/:id" element= {<ShowSummaryScreen/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

