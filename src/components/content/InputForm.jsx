import React, {Component} from "react";
import {Button} from "antd";
import { toast } from 'react-toastify';
class InputForm extends Component {

    handleUnsubscribe = () => {
        this.props.setAutomationId("");
        this.props.setAutomation({});
        toast("Unsubscribe succeeded!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,});
    }

    handleSubscribe = () => {
        this.props.callAssociateApi();
        toast("Subscribe succeeded!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,});
    }

    handleDisplay = () => {
        this.props.callGetAutomationApi();
        if (this.props.getAutomationId() === "") {
            toast("Empty routine!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,});
        } else {
            toast("Display routines!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,});
        }
    }

    render() {
        const {callGetAutomationApi} = this.props;
        return (
            <div style={{marginBottom: 10}}>
                <Button style={{marginLeft: 10}} disabled={!(Object.keys(this.props.getAutomation()).length === 0)} onClick={() => this.handleSubscribe()}>Subscribe!</Button>
                <Button style={{marginLeft: 10}} disabled={this.props.getAutomationId() === ""} onClick={() => this.handleUnsubscribe()}>Unsubscribe!</Button>
                <Button style={{marginLeft: 10}} disabled={false} onClick={() => this.handleDisplay()}>Show my Routines!</Button>
            </div>
        )
    }
}

export default InputForm;
