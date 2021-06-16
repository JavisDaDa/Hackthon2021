import React, {Component} from "react";
import axios from 'axios';
import AutomationTable from "./automationTable";

const config = require('../../config');

class Automation extends Component {

    state = {
    };

    handleCallAssociateApi = async () => {
        let url = "/v3/automations/" + config.automationId + "/associatedUnits"
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
        console.log('customerId is' + this.props.getCustomerId())
        console.log("path is " + url)
    }

    handleCallGetAutomationApi = () => {
        console.log('customerId is' + this.props.getCustomerId())
        console.log('lwaToken is' + this.props.getLwaToken())
        console.log('automationId is' + this.props.getAutomationId())
    }


    render() {
        const {getCustomerId, getLwaToken} = this.props;
        const {handleCallAssociateApi, handleCallGetAutomationApi} = this;
        return (
            <AutomationTable
                getCustomerId={getCustomerId}
                getLwaToken={getLwaToken}
                callAssociateApi={handleCallAssociateApi}
                callGetAutomationApi={handleCallGetAutomationApi}
            />
        );
    }
}

export default Automation;
