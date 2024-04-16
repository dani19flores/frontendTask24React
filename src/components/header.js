import React, { Component } from "react";

class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){

        const {lib} = this.props;

        return (
            <header>
                <h1>Lista de tarjetas {lib}</h1>
            </header>
        )
        
    }
}

export default Header;