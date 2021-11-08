import React from 'react'
import styled from 'styled-components'

const Card = props  => {
    return (
        <div>
                <CardContainer>
                <img src={props.image} alt='' />
                <h3>{props.title}</h3>
                </CardContainer>
 
        </div>

    )
}

export default Card


const CardContainer = styled.div`
    width: 300px;
    height: 225px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    box-shadow: 0 20px 40px black;
    display: grid;
    grid-template-rows: 1fr 1fr;
    transition: 0.8s cubic-bezier(0.2, 0.2, 0.165, 1);

    

    img {
        position: absolute;
        top: 0;
        height: 100%;
        z-index: 1;
    }

    :hover { 
        transform: scale(1.1, 1.1);
    }

    h3 {
        color: white;
        font-size: 30px;
        margin: 20px 0 0 20px;
        width: 190px;
        z-index: 1;
    }
`

