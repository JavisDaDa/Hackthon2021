import React, {Component} from "react";
import {Button} from "antd";

class InputForm extends Component {

    render() {
        const {getCustomerId, getLwaToken, callAssociateApi, callGetAutomationApi} = this.props;
        return (
            <div style={{marginBottom: 10}}>
                <Button onClick={() => callAssociateApi(getCustomerId())}>Subscribe!</Button>
                <Button onClick={() => callGetAutomationApi(getLwaToken())}>Show my Routines!</Button>
            </div>
        )
    }
}

export default InputForm;
