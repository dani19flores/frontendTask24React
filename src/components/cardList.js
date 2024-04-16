import React from 'react'
import Card from './card'
import './css/cardList.css'

const CardList = () => {
    return (
        <div className='cardList'>
            <Card name="Javascript desde Cero" date="20.11.2023" logo="JavaScript_logo.png" price="10.00"/>
            <Card name="Python Avanzado" date="20.11.2023" logo="assets/Python-logo.svg" price="10.00"/>
            <Card name="Next JS Básico" date="20.11.2023" logo="assets/nextjs-logo.svg" price="10.00"/>
            <Card name="React JS desde Cero" date="20.11.2023" logo="logo192.png" price="10.00"/>
        </div>
    )
}

export default CardList