import { Link } from "react-router-dom";
import { SearchBar, UserBar } from "./components";
import { useThemeContext } from "../../providers/theme-context";
import styled from "styled-components";
import { Icon } from "../Icon/icon";

const HeaderContainer = ({ className }) => {
    const { headerColor, changeHeaderColor } = useThemeContext();

    const isFilled = headerColor === "#fff";

    return (
        <header className={className} style={{ background: headerColor }}>
            <Link to="/">
                <h1>MOVIES</h1>
            </Link>
            <SearchBar headerColor={headerColor} />
            <UserBar />
            <Icon
                size={"30px"}
                id={"fa-sun"}
                fill={!isFilled}
                onClick={changeHeaderColor}
            />
        </header>
    );
};

export const Header = styled(HeaderContainer)`
    display: flex;
    color: #000;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 10%;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.25);

    & h1 {
        font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }
`;
