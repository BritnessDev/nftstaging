import styled, { css } from "styled-components"

export const NftCarouselContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const NftCarouselDiv = styled.div`
    width: 266px;
    margin-top: ${props => (40 * props.data + "px") };
    margin-left: ${props => props.data != 0 ? '-150px' : '0px' };
    z-index: ${props => (10 - props.data) };
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none;
`

export const CarouselImage = styled.img`
    width: 266px;
    height: 349px;
    z-index: ${props => (10 - props.dataIndex) };
    line-height: 320px;
    overflow: hidden;
    position: relative;
`