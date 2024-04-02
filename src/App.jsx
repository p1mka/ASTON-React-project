import "./App.css";
import { CustomRouter } from "./routes/CustomRouter";
import { Header, Loader } from "./components";
import { useInitialize } from "./hooks";
import styled from "styled-components";

const AppColumn = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const MainContainer = styled.div`
    margin: 1.5rem 5rem;
`;

function App() {
    const initializeSuccess = useInitialize();

    if (!initializeSuccess) {
        return <Loader />;
    }
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
