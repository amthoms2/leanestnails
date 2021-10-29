import Topbar from "./components/TobBar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/home";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  margin-top: 30px;
`


function App() {
  return (
    <>
      <Topbar />
      <MainContainer>
        <Sidebar />
        <Home />
      </MainContainer>
    </>
  );
}

export default App;
