import React, {Component} from 'react';

class ThemeComponent extends Component {

    changeThemeA() {
        document.querySelector('body').style.background = "#FC4445";
        document.querySelector('h1').style.color = "#3FEEE6";
    }
    changeThemeB() {
        document.querySelector('body').style.background = "#ADFF2F";
        document.querySelector('h1').style.color = "#ff2fac";
    }
    changeThemeC() {
        document.querySelector('body').style.background = "purple";
        document.querySelector('h1').style.color = "gold";
    }

    render() {
        return(
            <div className="themes">
                <button id="theme1" onClick={this.changeThemeA}>Theme 1</button>
                <button id="theme2" onClick={this.changeThemeB}>Theme 2</button>
                <button id="theme3" onClick={this.changeThemeC}>Theme 3</button>
            </div>
        )
    }
}

export default ThemeComponent;
