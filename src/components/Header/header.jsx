import { Link } from "react-router-dom";
import { SearchBar, UserBar } from "./components";
import styled from "styled-components";

const HeaderContainer = ({ className }) => {
    return (
        <header className={className}>
            <Link to="/">
                <h1>logo</h1>
            </Link>
            <SearchBar />
            <UserBar />
        </header>
    );
};

export const Header = styled(HeaderContainer)`
    display: flex;
    color: #000;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    padding: 1rem 10%;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);
`;
