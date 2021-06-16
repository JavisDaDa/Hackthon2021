import React, {Component} from "react";
import {Button} from "antd";

class InputForm extends Component {

    render() {
        const {callAssociateApi, callGetAutomationApi} = this.props;
        return (
            <div style={{marginBottom: 10}}>
                <Button onClick={() => callAssociateApi()}>Subscribe!</Button>
                <Button onClick={() => callGetAutomationApi()}>Show my Routines!</Button>
            </div>
        )
    }
}

export default InputForm;
