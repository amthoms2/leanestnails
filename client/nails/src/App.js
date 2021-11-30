import { useSelector } from "react-redux";
import './App.css'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
// eslint-disable-next-line
import Home from './pages'
import SignIn from './pages/signin'
import Book from './pages/book'
import Shop from './pages/shop'
import SignUp from './components/Account/Signup'
import Cart from './pages/cart'
import ProductList from './pages/productList'
import Product from './pages/product'
import Success from './pages/success'
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";


function App() {
  // eslint-disable-next-line
  const user = useSelector(state => state.user)
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/gallery' component={Gallery} />
        <Route path='/book' component={Book} />
        <Route path='/shop' component={Shop} />
        <Route path='/products/:category' component={ProductList} />
        <Route path='/product/:id' component={Product}/>
        <Route path='/cart' component={Cart}  />
        <Route path='/cart/success' component={Success} />
        <Route path='/signin' component={SignIn}/>
        <Route path='/contact' component={Contact}/>
        {/* <Route path="/signin">{user ? <Redirect to="/shop" /> : <SignIn />}</Route> */}
        <Route path='/signup' component={SignUp}/>
        {/* <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;

//for signin route, if already signed in, just return home?
//<Route path="/signin">{1 ? <Redirect to="/" /> : <SignIn />}</Route>
