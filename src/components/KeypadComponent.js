import React, {Component} from 'react';

class KeypadComponent extends Component {

    render() {
        return (
            <div class="container">
                <div className="button">
                    <div className="row">
                        <button className="col-3" name="1" id="one" onClick={e => this.props.onClick(e.target.name)}>1</button>
                        <button className="col-3" name="2" id="two" onClick={e => this.props.onClick(e.target.name)}>2</button>
                        <button className="col-3" name="3" id="three" onClick={e => this.props.onClick(e.target.name)}>3</button>
                        <button className="col-3" name="+" id="add" onClick={e => this.props.onClick(e.target.name)}>+</button>
                    </div>
                    <div className="row">
                        <button className="col-3" name="4" id="four" onClick={e => this.props.onClick(e.target.name)}>4</button>
                        <button className="col-3" name="5" id="five" onClick={e => this.props.onClick(e.target.name)}>5</button>
                        <button className="col-3" name="6" id="six" onClick={e => this.props.onClick(e.target.name)}>6</button>
                        <button className="col-3" name="-" id="subtract" onClick={e => this.props.onClick(e.target.name)}>-</button>
                    </div>
                    <div className="row">
                        <button className="col-3" name="7" id="seven" onClick={e => this.props.onClick(e.target.name)}>7</button>
                        <button className="col-3" name="8" id="eight" onClick={e => this.props.onClick(e.target.name)}>8</button>
                        <button className="col-3" name="9" id="nine" onClick={e => this.props.onClick(e.target.name)}>9</button>
                        <button className="col-3" name="*" id="multiply" onClick={e => this.props.onClick(e.target.name)}>x</button>
                    </div>
                    <div className="row">
                        <button className="col-6" name="0" id="zero" onClick={e => this.props.onClick(e.target.name)}>0</button>
                        <button className="col-3" name="C" id="clear" onClick={e => this.props.onClick(e.target.name)}>C</button>
                        <button className="col-3" name="/" id="divide" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                    </div>
                    <div className="row">
                        <button className="col-9" name="=" id="equals" onClick={e => this.props.onClick(e.target.name)}>=</button>
                        <button className="col-3" name="." id="decimal" onClick={e => this.props.onClick(e.target.name)}>.</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default KeypadComponent;
