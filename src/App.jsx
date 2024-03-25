import "./App.css";
import { CustomRouter } from "./routes/CustomRouter";
import { Header } from "./components";
import styled from "styled-components";
import { auth } from "./db/db";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setUser } from "./redux/slices/user-slice";

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
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(
                    setUser({
                        email: user.email,
                        token: user.accessToken,
                        id: user.uid,
                    })
                );
            }
        });
    }, []);

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
