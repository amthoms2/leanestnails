
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import Signin from './pages/signin'
import Book from './pages/book'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signin} exact />
        <Route path='/book' component={Book} exact />
      </Switch>
    </Router>
  );
}

export default App;
