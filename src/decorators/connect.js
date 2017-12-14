import React, {Component} from 'react';
import {render} from 'react-dom';
import store from "../store/Store";

export default (mapStateToProps, actionCreators) => (OurComponent) => class Connected extends Component {
    constructor(props) {
        super();

        this.actionCreatorsWithDispatch = Object.keys(actionCreators).reduce((acc, key) => ({
            ...acc,
            [key]: (...args) => store.dispatch(actionCreators[key](...args))
        }), {});

        this.state = mapStateToProps(store.getState(), props)
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(this.handleStoreChange)
    }

    componentWillUnmount() {
        this.unsubscribe()
    }

    render() {
        return <OurComponent {...this.props} {...this.state} {...this.actionCreatorsWithDispatch}/>
    }

    handleStoreChange = () => {
        this.setState(mapStateToProps(store.getState(), this.props))
    };
}