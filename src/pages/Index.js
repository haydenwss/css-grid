import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Header from '../components/Header'
import MobileHeader from '../components/MobileHeader'
import Card from '../components/Card'

const Index = () => {
    return (
        <div>
            <Header />
            <MobileHeader />
            <Hero />
            <CardGroup>
                <Card 
                    title='React for Designers'
                    image='/images/wallpaper.jpg' 
                />
                <Card 
                    title='React for Designers'
                    image='/images/wallpaper2.jpg' 
                />
                <Card 
                    title='React for Designers'
                    image='/images/wallpaper3.jpg' 
                />
                <Card 
                    title='React for Designers'
                    image='/images/wallpaper4.jpg' 
                />
                <Card 
                    title='React for Designers'
                    image='/images/wallpaper2.jpg' 
                />
                <Card 
                    title='React for Designers'
                    image='/images/wallpaper4.jpg' 
                />
            </CardGroup>
        </div>
    )
}

export default Index

const CardGroup = styled.div`
    margin: 0px;
    padding: 150px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 80px;
    justify-items: center;
    background-color: rgb(220, 205, 202);
@media (max-width: 1060px) {
  .CardGroup {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 720px) {
  .CardGroup {
    grid-template-columns: repeat(1, 1fr);
  }
}
`
