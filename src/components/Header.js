import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Header = () => {
    
    return (
        <div>
            <HeaderContainer>
                <HeaderGroup>
                    <Link to='/'><img src='/images/logo-figma.png' alt='' /></Link>
                    <Link to='/'><p>Home</p></Link>
                    <Link to='/'><p>Contact</p></Link>
                    <Link to='/'><p>Information</p></Link>
                    
                </HeaderGroup>
            </HeaderContainer>
        </div>
    )
}

export default Header

const HeaderContainer = styled.div`


   position: fixed;
   width: 100%;
   padding: 40px 0px;
   z-index: 100;
   @media screen and (max-width: 960px) {
        display: none;
    }
   @media (max-width: 640px) {
        padding: 15px 0;   
    }

   img {
       height: 30px;
   }
`

const HeaderGroup = styled.div`
   max-width: 800px;
   margin: 0 auto;
   display: grid;
   grid-template-columns: repeat(5, auto);
   align-items: center;
   justify-items: center;

   @media (max-width: 640px) {
        grid-template-columns: repeat(4, auto);  
    }

   
    p {
        color: white;
        font-size: 15px;
        line-height: 1.5;
    }

    
`

