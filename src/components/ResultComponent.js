import React, {Component} from 'react';

class ResultComponent extends Component {

    render() {
        let {result} = this.props;
        return (
            <div class="container">
                <div className="row">
                    <div className="col-12" id="display">
                        <p>{result}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultComponent;
