import React, {
    Component,
} from 'react';

import { connect } from 'react-redux';

import {
    activateGeod,
    closeGeod,
} from './redux';

// App.js
export class App extends Component {

    render() {
        return (
            <div>

                <h1>{this.props.geod.title || 'Hello World!'}</h1>

                {this.props.geod.title ?
                    <button onClick={this.props.closeGeod}>
                        RollBack
                    </button> :
                    <button onClick={() => this.props.activateGeod({ title: 'Welcome to Home Page' })}>
                        Click Me - just onClick demo
                    </button>
                }

            </div>
        );
    }

}



// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
    geod: state.geod,
});

const mapDispatchToProps = {
    activateGeod,
    closeGeod,
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



export default AppContainer;