import Topbar from "./components/TobBar";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  margin-top: 10px;
`

const Pages = styled.div`
  flex: 4;
  background-color: green;
`

function App() {
  return (
    <>
      <Topbar />
      <MainContainer>
        <Sidebar />
        <Pages>pages</Pages>
      </MainContainer>
    </>
  );
}

export default App;
