import React from 'react';
import './App.css';
import NavigationBar from './components/navbar/navbar.component';
import {Switch, Route} from 'react-router-dom'
import UstadzPage from './pages/ustadz/ustadz-page/ustadz-page.component';

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Switch>
          <Route exact path="/ustadz" component={UstadzPage}/>
        </Switch>
    </div>
  );
}

export default App;
