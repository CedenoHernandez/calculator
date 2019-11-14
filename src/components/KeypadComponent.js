import React, {Component} from 'react';

class KeypadComponent extends Component {
    
    render() {
        return (
            <div className="button">

                <button name="0" id="zero">0</button>
                <button name="1" id="one">1</button>
                <button name="2" id="two">2</button>
                <button name="3" id="three">3</button>
                <button name="4" id="four">4</button>
                <button name="5" id="five">5</button>
                <button name="6" id="six">6</button>
                <button name="7" id="seven">7</button>
                <button name="8" id="eight">8</button>
                <button name="9" id="nine">9</button>

                <button name="+" id="add">+</button>
                <button name="-" id="subtact">-</button>
                <button name="*" id="multiply">x</button>
                <button name="/" id="divide">÷</button>

                <button name="." id="decimal">.</button>
                <button name="C" id="clear">C</button>
                <button name="=" id="equals">=</button>

            </div>
        )
    }
}

export default KeypadComponent;
