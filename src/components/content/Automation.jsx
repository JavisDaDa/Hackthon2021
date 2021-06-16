import React, {Component} from "react";
import axios from 'axios';
import AutomationTable from "./automationTable";

const config = require('../../config');

class Automation extends Component {

    state = {
    };


    handleCallAssociateApi = async () => {
        let betaEndpoint = config.betaEndpointPath;
        let url = betaEndpoint + "/v3/automations/" + this.props.getAutomationId() + "/associatedUnits"
        let token = this.props.getLwaToken();
        let units = {
            "units": [{
                "id": this.props.getCustomerId()
            }]
        }
        axios.post(url, {
            units
        },{
            headers: {
                "Accept-Charset": "utf-8",
                "Accept":"application/json",
                "Content-Type":"application/json; charset=utf-8",
                "Authorization": 'Bearer ' + token,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
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
