import React, {Component} from 'react';

class KeypadComponent extends Component {

    render() {
        return (
            <div className="button">

                <button name="0" id="zero" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="1" id="one" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" id="two" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" id="three" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button name="4" id="four" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" id="five" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" id="six" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button name="7" id="seven" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" id="eight" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" id="nine" onClick={e => this.props.onClick(e.target.name)}>9</button>

                <button name="+" id="add" onClick={e => this.props.onClick(e.target.name)}>+</button>
                <button name="-" id="subtact" onClick={e => this.props.onClick(e.target.name)}>-</button>
                <button name="*" id="multiply" onClick={e => this.props.onClick(e.target.name)}>x</button>
                <button name="/" id="divide" onClick={e => this.props.onClick(e.target.name)}>÷</button>

                <button name="." id="decimal" onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button name="C" id="clear" onClick={e => this.props.onClick(e.target.name)}>C</button>
                <button name="=" id="equals" onClick={e => this.props.onClick(e.target.name)}>=</button>

            </div>
        )
    }
}

export default KeypadComponent;
