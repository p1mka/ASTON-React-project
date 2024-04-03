import PropTypes from "prop-types";
import styled from "styled-components";

const IconContainer = ({ className, children, id, fill = false, ...props }) => {
    const iconFill = fill ? "fa-solid" : "fa-regular";
    return (
        <div className={className} {...props}>
            <i className={`${iconFill} ${id}`}>{children}</i>
        </div>
    );
};

export const Icon = styled(IconContainer)`
    font-size: ${({ size = "20px" }) => size};
    margin: ${({ margin = "0" }) => margin};
    color: ${({ color }) => color};

    & :hover {
        cursor: pointer;
        transform: scale(110%);
        transition: transform ease 0.2s;
    }
`;

Icon.propTypes = {
    children: PropTypes.node,
    id: PropTypes.string.isRequired,
    fill: PropTypes.bool,
};
