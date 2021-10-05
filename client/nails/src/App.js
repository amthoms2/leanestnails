
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// eslint-disable-next-line
import Home from './pages'
import SignIn from './pages/signin'
import Book from './pages/book'
import Shop from './pages/shop'
import SignUp from './components/Account/Signup'
import Cart from './pages/cart'
// import ProductList from './pages/productList'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignIn} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/shop' component={Shop} exact />
        <Route path='/book' component={Book} exact />
        <Route path='/cart' component={Cart} exact />
      </Switch>
    </Router>
  );
}

export default App;
