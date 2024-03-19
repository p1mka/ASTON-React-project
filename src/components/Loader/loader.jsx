import styled from "styled-components";

export const Loader = styled.div`
    width: 100px;
    height: 24px;
    background:
        radial-gradient(farthest-side, #433e41 90%, #0000) left,
        radial-gradient(farthest-side, #433e41 90%, #0000) right;
    background-size: 24px 24px;
    background-repeat: no-repeat;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #433e41;
        inset: 0;
        margin: auto;
        animation:
            d5-1 1s,
            d5-2 0.5s;
        animation-timing-function: cubic-bezier(0.5, -900, 0.5, 900);
        animation-iteration-count: infinite;
    }

    @keyframes d5-1 {
        100% {
            transform: translate(0.24px);
        }
    }

    @keyframes d5-2 {
        100% {
            inset: -0.3px 0 0;
        }
    }
`;
