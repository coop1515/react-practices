import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: this.props.step,
            val: this.props.begin
        }
    }

    render() {
        return (
            <div>
                <button onClick={(e) => {
                    this.setState({
                        val: this.state.val + this.state.step
                    });
                    // this.state.val += this.state.step;
                    // this.render() 이렇게하면 값 셋팅이 안됨
                    // 항상 setState를 이용해라.
                }}>
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}