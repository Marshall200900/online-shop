import React from 'react';
import './app.scss';
import { orderAction } from '../../actions';
import { connect } from 'react-redux';

const App = ({dispatch}) => {
    return (
        <div>
            <button onClick={() => dispatch(orderAction())}>Tap here to order</button>
            <div>Hellllllowwww!</div>   
        </div>
    )
}



export default connect()(App);