import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import New from './components/New';
import Update from './components/Update'


function App() {

  
  return (
    <BrowserRouter>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/new">
          <New/>
        </Route>
        <Route exact path="/edit/:id">
          <Update/>
        </Route>
    </BrowserRouter>
  );
}
export default App