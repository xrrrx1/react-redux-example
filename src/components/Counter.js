import React, {Component, Fragment} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import {increment} from "../ActionCreators/actionCreator";
import connect from "../decorators/connect";

class Counter extends Component {
    static propTypes = {};

    render() {

        return (
            <Fragment>
                <h2>{this.props.count}</h2>
                <button onClick={this.handleIncrement}>INCREMENT</button>
            </Fragment>
        )
    }

    handleIncrement = e => {
        e.preventDefault();
        this.props.increment()
        // const action = increment();
        // store.dispatch(action)
    };
}

export default connect(
    (state) =>({count: state.count}),
    {increment}
)(Counter)