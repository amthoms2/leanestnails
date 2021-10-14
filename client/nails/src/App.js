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

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/book' component={Book} exact />
        <Route path='/shop' component={Shop} exact />
        <Route path='/products/:category' component={ProductList} exact />
        <Route path='/product/:id' component={Product} exact />
        <Route path='/cart' component={Cart} exact />
        <Route path='/signin' component={SignIn} exact />
        {/* <Route path="/signin">{1 ? <Redirect to="/" /> : <SignIn />}</Route> */}
        <Route path='/signup' component={SignUp} exact />
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
