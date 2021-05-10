
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {

  return (
    <Router> 
    <div className="grid-container">
     <header className="row">
       <div>
         <a className="brand" href="/">amazona</a>
       </div>
       <div>
         <a href="/cart">Cart</a>
         <a href="/signin">Sign In</a>
       </div>
     </header>
     <main>
      <Route path="/" component={HomeScreen} exact></Route>
      <Route path="/product/:id" component={ProductScreen}></Route>
      {/* <Route path="*"  component={NotFound}></Route>    */}
               
      
     </main>
     <footer className="row center">All right reserved</footer>
   </div>
   </Router>  //<BrowserRputer> but we import it as Router
  
  );
}

export default App;
