import { forwardRef } from "react";
import styled from "styled-components";

const InputContainer = forwardRef(
    (
        { className, type, children, title, onChange, onKeyUp, ...props },
        ref
    ) => (
        <input
            className={className}
            type={type ? type : "text"}
            title={title}
            onChange={onChange}
            onKeyUp={onKeyUp}
            {...props}
            ref={ref}
        >
            {children}
        </input>
    )
);

export const Input = styled(InputContainer)`
    all: unset;
    width: ${({ width }) => width};
    height: 1.5rem;
    padding: 1rem 0.5rem;
    border-radius: 0.25rem;
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.2);
    font-size: 18px;
    outline: none;
    transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    color: ${({ header }) => (header === "#eb4cae" ? "#fff" : "#000")};
    background-color: ${({ header }) =>
        header === "#a05282" ? "#f4c6c6" : "#fff"};

    & input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    & input[type="number"],
    input[type="number"]:hover,
    input[type="number"]:focus {
        appearance: none;
        -moz-appearance: textfield;
    }
`;
