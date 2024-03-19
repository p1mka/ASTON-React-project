import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = ({ className }) => {
    return (
        <header className={className}>
            <Link to="/">
                <h1>logo</h1>
            </Link>
            <div className="searchBar">
                <h3>&#128269;</h3>
                <input type="search"></input>
            </div>
            <div className="userBar">
                <p>Вход</p>
                <Link to="/authorize">
                    <p>&#9094;</p>
                </Link>
            </div>
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

    & .searchBar {
        display: flex;
    }

    & .userBar {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;
