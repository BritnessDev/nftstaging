import styled, { css } from "styled-components"
import DT from "../../../static/design-token.json"

export const LandingSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const LandingTopSection = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    @font-face {
        src: url('/font/IBM_Plex_Mono/IBMPlexMono-Medium.ttf');
        font-family: 'IBM Plex Mono';
    };
    width: 100%;
    position: relative;
    @media only screen and (max-width: ${DT.breakpoints.sm}) {
        display: flex;
        flex-direction: column;
        align-items: center;
    };
    background-image: url(/images/authentication/player.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    height: 1024px;
    @media only screen and (max-width: ${DT.breakpoints.xl}) {
        height: 768px;
    }

    @media only screen and (max-width: ${DT.breakpoints.md}) {
        height: 600px;
    }

    @media only screen and (max-width: ${DT.breakpoints.sm}) {
        height: 480px;
    }
`

export const LandingTopDesc = styled.div`
    h1 {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 72px;
        text-transform: uppercase;
        color: #242424;
        width: 641px;
    }

    p {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        color: #242424;
        width: 748px;
    }

    margin-left: 13%;
    position: relative;

    @media only screen and (max-width: ${DT.breakpoints.xl}) {
        h1 {
            width: 480px;
            font-size: 48px;
        }
        p {
            width: 500px;
            font-size: 20px;
        }
    }

    @media only screen and (max-width: ${DT.breakpoints.md}) {
        h1 {
            width: 340px;
            font-size: 36px;
        }
        p {
            width: 370px;
            font-size: 18px;
        }
    }

    @media only screen and (max-width: ${DT.breakpoints.sm}) {
        margin-top: 0;
        margin-left: 0;
        padding: 20px;
        h1 {
            width: 100%;
            text-align: center;
        }
        p {
            width: 100%;
            text-align: center;
        }
    }
`

export const LandingButtonSection = styled.div`
    padding: 120px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background: linear-gradient(125deg, rgba(255,255,255,1) 0%, rgba(213,239,202,1) 37%, rgba(199,231,224,1) 62%, rgba(202,228,191,1) 81%, rgba(255,255,255,1) 100%);
    h1 {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 72px;
        /* or 112% */

        text-align: center;
        text-transform: uppercase;
        max-width: 904px;
    }

    p {
        font-family: 'IBM Plex Mono';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
        /* or 140% */

        text-align: center;

        /* #242424 */

        color: #242424;
        max-width: 904px;
    }
    @media only screen and (max-width: ${DT.breakpoints.xl}) {
        padding: 90px 20px;
        h1 {
            font-size: 48px;
        }
        p {

        }
    }

    @media only screen and (max-width: ${DT.breakpoints.xl}) {
        background-color: white;
    }

    @media only screen and (max-width: ${DT.breakpoints.md}) {
        padding: 80px 20px;
        h1 {
            font-size: 32px;
        }
        p {
            
        }
    }

    @media only screen and (max-width: ${DT.breakpoints.sm}) {
        padding: 60px 20px;
        h1 {
            font-size: 28px;
        }
        p {
            
        }
    }

`