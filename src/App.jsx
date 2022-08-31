import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Login from "./pages/Login";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Success from "./pages/success";
import { useSelector } from "react-redux";


import {BrowserRouter as   
 Router,
 Switch,
 Route,
 Redirect,
 Link
 
} from "react-router-dom";

const App = () => {
  const user=useSelector((state)=>state.user.currentUser);
 // const user=true;
  return (
    
    <Router>
    <Switch>
    <Route exact path="/">
    {user ? <Redirect to ="/home"/> : <Login/>}
    </Route>
    <Route path="/home">
    <Home/>
    </Route>
    <Route path="/products/:category">
    <ProductList/>
    </Route>
  
    <Route path="/product/:id">
    <Product/>
    </Route>

    <Route path="/cart">
    <Cart/>
    </Route>
    <Route path="/success">
    <Success/>
    </Route>

    

    <Route path="/register/">
    {user ? <Redirect to ="/"/> : <Register/>}
    </Route>
    
    </Switch>
    </Router>

  )
};

export default App;