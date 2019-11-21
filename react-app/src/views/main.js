import React, { Component } from 'react';
import RouterView from '../router/RouterView'
import Footer from '../components/footer'
export class main extends Component {
    render() {
        return <>
                <RouterView routes={this.props.routes}></RouterView>
                <Footer></Footer>
            </>
    }
}

export default main;
