import React from 'react'
import styled from 'styled-components'
import Hero from '../components/Hero'
import Header from '../components/Header'
import MobileHeader from '../components/MobileHeader'
import Card from '../components/Card'
import Cell from '../components/Cell'
import staticdata from '../staticdata.json'

const Index = () => {
    return (
        <div>
            <Header />
            <MobileHeader />
            <Hero />
            <CardGroup>
                <Card
                    text='12 sections' 
                    title='React for Designers'
                    image='/images/wallpaper.jpg' 
                />
                <Card
                    text='12 sections' 
                    title='React for Designers'
                    image='/images/wallpaper2.jpg' 
                />
                <Card
                    text='12 sections' 
                    title='React for Designers'
                    image='/images/wallpaper3.jpg' 
                />
                <Card
                    text='12 sections' 
                    title='React for Designers'
                    image='/images/wallpaper4.jpg' 
                />
                <Card
                    text='12 sections' 
                    title='React for Designers'
                    image='/images/wallpaper2.jpg' 
                />
                <Card
                    text='12 sections' 
                    title='React for Designers'
                    image='/images/wallpaper4.jpg' 
                />
            </CardGroup>
            <SectionCaption>12 sections - 6 hours</SectionCaption>
                <SectionCellGroup>
                {staticdata.cells.map(cell => (
                    <Cell title={cell.title} image={cell.image} />
                ))}
            </SectionCellGroup>
        </div>
    )
}

export default Index

const CardGroup = styled.div`
    margin: 50px 40px 100px;
    padding: 150px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 40px;
    justify-items: center;


        @media (max-width: 1060px) {
            grid-template-columns: repeat(2, 1fr);
            padding: 20px;
        }
        @media (max-width: 720px) {
            grid-template-columns: repeat(1, 1fr);
        }
`

const SectionCaption = styled.p`
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #94A4BA;
  text-align: center;
`

const SectionCellGroup = styled.div`
  max-width: 800px;
  margin: 0 auto 100px;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
`