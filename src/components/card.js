import React, { Component } from "react";
import "./css/card.css";

class Card extends Component{
    constructor(props){
        super(props);
    }
    render(){

        const { name, date, logo, price } = this.props;

        return(
            <section className="card">
                <div className="card_logo">
                    <img src={logo} alt="logo" className="card-img-top"></img>
                </div>
                <div className="card_data">
                    <h2>Name: {name}</h2>
                    <p>date: {date}</p>
                    <p>price: {price}</p>
                </div>
            </section>
        )
    }
}

export default Card