import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hasScrolled: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', 
        this.handleScroll)
    }

    handleScroll = (event) => {
        const scrollTop = window.pageYOffset
        if(scrollTop > 50) {
            this.setState({ hasScrolled: true })
        } else {
            this.setState({ hasScrolled: false })
        }
    }

    render() {
        return (
            <HeaderContainer>
                <div className={this.state.hasScrolled ? 'header header-scrolled' : 'header' }>
                    <HeaderGroup>
                        <Link to='/'><img src='/images/logo-figma.png' alt='' /></Link>
                        <Link to='/'><p>Home</p></Link>
                        <Link to='/'><p>Contact</p></Link>
                        <Link to='/'><p>Information</p></Link>
                    </HeaderGroup>
                </div>
        </HeaderContainer>
        )
    }
}


export default Header

const HeaderContainer = styled.div`

   img {
       height: 30px;
   }
   .header {
        position: fixed;
        width: 100%;
        padding: 40px 0px;
        z-index: 100;
        transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
        @media screen and (max-width: 960px) {
            display: none;
        }
   @media (max-width: 640px) {
        padding: 15px 0;   
    }
   }
   .header-scrolled {
        background-color: rgba(0, 0, 0, 0.8);
        padding: 15px 0;
        transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
        backdrop-filter: blur(20px);
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

