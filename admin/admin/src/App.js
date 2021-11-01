import Topbar from "./components/TobBar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home";
import UserList from "./pages/userList";
import styled from "styled-components";
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
  return (
    <>
      <Router>
          <Topbar />
          <MainContainer>
            <Sidebar />
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/users">
              <UserList />
            </Route>
            </Switch>
          </MainContainer>
      </Router>
    </>
  );
}

export default App;
