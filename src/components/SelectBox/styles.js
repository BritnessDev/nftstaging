import styled from "styled-components"

export const SelectContainer = styled.div`
    position: relative;
    width: 100%;
`

export const SelectItemContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    background: #FFFFFF;
    &:hover {
        background: #ddd;
    }
    color: #242424;
    display: flex;
    align-items: center;
    padding: 16px;
    transition-duration: 500ms;
    span {
        @font-face {
            src: url('/font/IBM_Plex_Mono/IBMPlexMono-Medium.ttf');
            font-family: 'IBM Plex Mono';
        };
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #737373;
    }
    border-radius: ${(props) => props.isLast ? `0px 0px 8px 8px` : `0px`};
    cursor: pointer;
`

export const SelectBoxContainer = styled.div`
    width: 100%;
    justify-content: space-between;
    background: #FFFFFF;
    color: ${(props) => props.color};
    display: flex;
    align-items: center;
    padding: 16px;
    min-height: 56px;
    span {
        @font-face {
            src: url('/font/IBM_Plex_Mono/IBMPlexMono-Medium.ttf');
            font-family: 'IBM Plex Mono';
        };
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        color: #737373;
    }
    img {
        width: 12px;
        height: 6px;
        transform: ${(props) => props.isFocused ? "rotate(180deg)" : ""};
    };
    border-radius: ${(props) => props.isFocused ? `8px 8px 0px 0px` : `8px`};
    cursor: pointer;
`

export const OverflowContainer = styled.div`
    max-height: 300px;
    overflow: scroll;
    overflow-x: hidden;
`