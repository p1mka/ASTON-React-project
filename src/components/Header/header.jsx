import { Link } from "react-router-dom";
import { UserBar } from "./components";
import { Icon } from "../Icon/icon";
import styled from "styled-components";
import { Input } from "../Input/input";

const HeaderContainer = ({ className }) => {
    return (
        <header className={className}>
            <Link to="/">
                <h1>logo</h1>
            </Link>
            <div className="search-bar">
                <Input width={"500px"} />
                <Icon
                    fill={true}
                    id={"fa-magnifying-glass"}
                    size={"24px"}
                ></Icon>
            </div>
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

    & .search-bar {
        display: flex;
        align-items: center;
        gap: 1rem;
    }
`;
