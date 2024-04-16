import React, { Component } from "react";

class Main extends Component {
    constructor() {
        super();
        this.state = { tech: "Fronend", developer: "Luis perez" };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ developer: "Adriana Ramirez" });
    }

    render() {
        return (
            <>
                <p>Hola, soy {this.state.developer}</p>
                <button onClick={this.handleClick}>Cambiar Nombre</button>
                <ChildComponent developer={this.state.developer} />
            </>
        );
    }
}

class ChildComponent extends Component {
    render() {
        return (
            <div>
                <p>El desarrollador es: {this.props.developer}</p>
            </div>
        );
    }
}

export default Main;
