import Topbar from "./components/TobBar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home";
import UserList from "./pages/userList";
import User from "./pages/user";
import NewUser from "./pages/newUser";
import ProductList from "./pages/productList";
import Product from "./pages/product";
import NewProduct from "./pages/newProduct";
import Login from "./pages/login";
import Transactions from "./pages/transactions";
import styled from "styled-components";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // eslint-disable-next-line
  Redirect,
} from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  margin-top: 30px;
`;

function App() {

  const admin = useSelector((state) => {
    // console.log(state.user)
    return state.user.currentUser.isAdmin
  });

  return (
    <>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          {admin && (
            <>
              <Topbar />
              <MainContainer>
                <Sidebar />

                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/users">
                  <UserList />
                </Route>

                <Route path="/user/:userId">
                  <User />
                </Route>

                <Route path="/newuser">
                  <NewUser />
                </Route>

                <Route path="/products">
                  <ProductList />
                </Route>

                <Route path="/product/:productsId">
                  <Product />
                </Route>

                <Route path="/newProduct">
                  <NewProduct />
                </Route>

                <Route path="/transactions">
                  <Transactions />
                </Route>
              </MainContainer>
            </>
          )}
        </Switch>
      </Router>
    </>
  );
}

export default App;
