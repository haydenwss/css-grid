import React from 'react'
import styled from 'styled-components'

const Hero = () => {
    return (
        <div>
            <HeroContainer>
                <HeroGroup>
                    <h1>Learn to design and code React apps.</h1>
                        <div className="Logos">
                            <img alt='logos' src='/images/logo-sketch.png' width="50" />
                            <img alt='logos' src='/images/logo-figma.png' width="50" />
                            <img alt='logos' src='/images/logo-studio.png' width="50" />
                            <img alt='logos' src='/images/logo-framer.png' width="50" />
                            <img alt='logos' src='/images/logo-react.png' width="50" />
                            <img alt='logos' src='/images/logo-swift.png' width="50" />
                        </div>
                    <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z" fill="#ddcdca" >
                        <animate repeatCount='indefinite'
                        fill='freeze' attributeName='d' dur='10s'
                        values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;

    M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;

    M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;

    M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;" />
                        </path>
                    </svg>
                </HeroGroup>
            </HeroContainer>
        </div>
    )
}

export default Hero

const HeroContainer = styled.div`
    background-image: url('/images/wallpaper2.jpg');
    height: 100vh;
    background-size: cover;
    background-position: center;
    position: relative;
`

const HeroGroup = styled.div`
    margin: 0 auto;
    max-width: 500px;
    padding: 150px 50px;
    text-align: center;

    h1 {
        color: white;
        font-size: 60px;
        line-height: 1.2;

            @media (max-width: 640px) {
            font-size: 45px;  
        }   
    }
    

    p {
        color: grey;
        font-size: 15px;
        line-height: 1.5;

    }
    svg {
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 0;
    }

    .Logos {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
        margin: 50px 0;
        justify-items: center;
    }
`

