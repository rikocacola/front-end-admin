import React from 'react';
import './App.css';
import NavigationBar from './components/navbar/navbar.component';
import {Switch, Route} from 'react-router-dom'
import UstadzPage from './pages/ustadz/ustadz-page/ustadz-page.component';
import AddUstadz from './pages/ustadz/add-ustadz/add-ustadz.components';

function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Switch>
          <Route exact path="/ustadz" component={UstadzPage}/>
          <Route exact path='/ustadz/tambah' component={AddUstadz}/>
        </Switch>
    </div>
  );
}

export default App;
