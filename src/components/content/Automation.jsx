import React, {Component} from "react";
import axios from 'axios';
import AutomationTable from "./automationTable";

const config = require('../../config');

class Automation extends Component {

    state = {
        automation: {}
    };

    setAutomation = (data) => {
        this.setState({
            automation: data
        })
    }

    getAutomation = () => {
        return this.state.automation;
    }

    handleCallAssociateApi = async () => {
        let url = "/v3/automations/" + this.props.getAutomationId() + "/associatedUnits"
        let token = config.lwaToken;
        let units = {
            "units": [{
                "id": config.customerId
            }]
        }
        axios.post(url, {
            units
        },{
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json; charset=utf-8",
                "Authorization": 'Bearer ' + token
            },
            withCredentials: true
        }).then(response => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
        })
        console.log('automationId is' + this.props.getAutomationId())
        console.log('lwaToken is ' + token)
        console.log('customerId is' + config.customerId)
        console.log("path is " + url)
        this.props.setAutomationId("amzn1.alexa.automation.90d43d2b-0d69-4ced-96e4-ac48de131026")
    }

    handleCallGetAutomationApi = () => {
        let url = "/v3/automations/" + this.props.getAutomationId();
        console.log(url)
        let token = config.lwaToken;
        axios.get(url, {
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json; charset=utf-8",
                "Authorization": 'Bearer ' + token
            },
            withCredentials: true
        }).then(response => {
            console.log(response.data)
            this.setAutomation(response.data);
            console.log(this.state.automation)
        }).catch(error => {
            console.log(error)
        })
        console.log('customerId is' + config.customerId)
        console.log('lwaToken is' + config.lwaToken)
        console.log('automationId is' + this.props.getAutomationId())
    }


    render() {
        const {handleCallAssociateApi, handleCallGetAutomationApi, getAutomation} = this;
        return (
            <AutomationTable
                callAssociateApi={handleCallAssociateApi}
                callGetAutomationApi={handleCallGetAutomationApi}
                getAutomation={getAutomation}
            />
        );
    }
}

export default Automation;
