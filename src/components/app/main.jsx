import React, {Component} from 'react';
import NavigationBar from "../navBar/navBar";
import Automation from "../content/Automation";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerID: "A34SBJJTZXA0NN",
            automationID: "amzn1.alexa.automation.90d43d2b-0d69-4ced-96e4-ac48de131026",
            token: "Atza|IgEBIO905SKoiwBtoUgcRCOmA09Pqvb2jFmljSMyf1LTrkTrnG6bWrGrTMbG732uQvE-6BkgyBmq6UTT5e9Uj9i91YvaGwSt4Uh6t4Ncoi_3cHBH-tUWU-QaB0dyq_NiblnQ8EiJb_UkdSLRGive--Gp5OKE5cp5umKghj5bjCS1WpeI-7ffWklWZXw7dr-sTkc8n1C6uQR3ZS4V3iX7cl2gzyBWMGN8a0pgP5sOVvQHaJxCwpgDSFr6qiNGA355NlK0pmKgEUQx0mHClmLGAojdGUKFvEScwa5JW-4ibdy6Rs5lBTE21fcM7L-9FdSJqi2nLHEPHHDywCrtfmgq-rne-UlipfT4lLiRsw42bpiehiyUfxIifOKxAMC9lowxMr8gV5sCIL9yTwckk3okzMl3CsQ-"
        };
    }

    getCustomerId = () => {
        return this.state.customerID;
    };

    getLwaToken = () => {
        return this.state.token;
    };

    getAutomationId = () => {
        return this.state.automationID;
    }

    setAutomationId = (automationId) => {
        this.setState({
            automationId: automationId
        })
    }

    render() {
        const {getCustomerId, getLwaToken, getAutomationId, setAutomationId} = this
        return (
            <main>
                <NavigationBar
                    getCustomerId={getCustomerId}
                />
                <Automation
                    getCustomerId={getCustomerId}
                    getLwaToken={getLwaToken}
                    getAutomationId={getAutomationId}
                    setAutomationId={setAutomationId}
                />
            </main>
        );
    }
}

export default Main;