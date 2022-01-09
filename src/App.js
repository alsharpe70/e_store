import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import signIn from './signIn.js'
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from './Footer.js';
import EntryPage from './signIn.js';
import OderPage from './Order.js';

function App() {
  return (

    <Router>
        <div className="app">
          
          <Header/>

          <Switch>
            
            <Route path="/checkout">
              <Checkout/>
            </Route>

            <Route path="/signUp">
              <EntryPage/>
            </Route>

            <Route path="/Order">
              <OderPage/>
            </Route>
  
            <Route path="/">
              <Home/>
            </Route>
          </Switch>

        <Footer/>      

        </div>
    </Router>
  );
}

export default App;
