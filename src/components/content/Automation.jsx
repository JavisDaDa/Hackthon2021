import React, {Component} from "react";
import AutomationTable from "./automationTable";


class Automation extends Component {

    state = {
    };


    handleCallAssociateApi = (automationId) => {
        console.log(automationId)
    }

    handleCallGetAutomationApi = (lwaToken) => {
        console.log(lwaToken)
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
