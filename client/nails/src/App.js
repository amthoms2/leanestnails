
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// eslint-disable-next-line
import Home from './pages'
import Signin from './pages/signin'
import Book from './pages/book'
import Shop from './pages/shop'
import Signup from './pages/signup'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Signup} exact />
        <Route path='/signin' component={Signin} exact />
        <Route path='/shop' component={Shop} exact />
        <Route path='/book' component={Book} exact />
      </Switch>
    </Router>
  );
}

export default App;
