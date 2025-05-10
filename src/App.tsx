import styled from "styled-components";
import Header from "./components/Header";
import StartGame from "./components/StartGame";

const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 155px;
`;

function App() {
  return (
    <div>
      <Header />
      <MainContainer>
        <StartGame />
      </MainContainer>
    </div>
  );
}

export default App;
