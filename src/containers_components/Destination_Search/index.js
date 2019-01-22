import React from 'react';
import { connect } from 'react-redux'

import FluxProduct from './trip.react.js';
import FluxCart from './tripcart.react.js';
import Container from './container.react.js';
import NavBar from './nav.react.js'
import data from '../../data'

class FluxCartApp extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log('aaa')
    }

    componentWillUnmount() {
        console.log('000')
    }

    render() {
        let { Destination } = this.props
        console.log('Destination ' + JSON.stringify(Destination))
        return (Destination && Destination.destinations && Destination.destinations.length) ? this.renderSearchResult() : this.renderInitial()
    }

    renderInitial() {
        return (
            <div className="flux-cart-app">
                <NavBar items={null} {...this.props} />
                <h1>Initial page</h1>
            </div>
        )
    }

    renderSearchResult() {
        let _this = this
        return (
            <div className="flux-cart-app">
                <NavBar items={null} {...this.props} />
                <Container google={window.google} markers={this.props.Destination.map} initialCenter={this.props.Destination.map[0]} />
                <FluxCart {...this.props} products={this.props.Destination.favorites} count={this.props.Destination.favorites.length} visible={this.props.Destination.cartVisible} />
                {(this.props.Destination.destinations).map(function (value, index) {
                    return (
                        <FluxProduct {..._this.props} product={value} />
                    )
                })}

            </div>
            // <h1>Search Result</h1>
        );
    }


};

const mapState = state => ({
    Auth: state.Auth,
    Destination: state.Destination
})

export default connect(mapState)(FluxCartApp);
