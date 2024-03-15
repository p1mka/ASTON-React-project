import "./App.css";
import { CustomRouter } from "./routes/CustomRouter";
import { Header } from "./components";
import styled from "styled-components";

const AppColumn = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const MainContainer = styled.div`
    margin: 0 5rem;
`;

function App() {
    return (
        <AppColumn>
            <Header />
            <MainContainer>
                <CustomRouter />
            </MainContainer>
        </AppColumn>
    );
}

export default App;
