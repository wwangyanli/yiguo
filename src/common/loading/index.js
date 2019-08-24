import React, { Component, Fragment } from 'react'
import "./index.css"
export default class Loading extends Component {
    render() {
        return (
            <Fragment>
                <figure>
                    <div className="dot white"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </figure>
            </Fragment>
        )
    }
}
