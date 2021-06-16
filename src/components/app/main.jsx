import React, {Component} from 'react';
import NavigationBar from "../navBar/navBar";
import Automation from "../content/Automation";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerID: "A34SBJJTZXA0NN",
            automationID: "amzn1.alexa.automation.90d43d2b-0d69-4ced-96e4-ac48de131026",
            token: "Atza|IgEBICP8-3tqNR2u-vAzx3ax7MZsxLWC7-CqLe6YhfTixG-UCSLosYPS9bW1LC89Agmq5eMZ2AZZkosVQtYkkIxr2zzm7OMo0Qs05RlEsRpHGety4FbZCIy1HhojGZv1MkejJw3n_H6uEdarsJDTKcJOw40OHP3kzPRB26nv3ouQW4-zZWf30mrrPgdRUfW0q47wabOnd3gbaGVd81o4jleF72tyn9QE9Q3ZUhx5kVpt2CbZtcYPq4fjnfnpzEXItSdSUif3pRmk13XiqumOCL5MKPtU6gJxOUTBhEsTEzvgY-dG30FqIfMXNi89QYIVc-08IKerSQgM_nSY-yhSfRmhmD_r3EVc9E-HdM1_VkIDJ6EfzcG1S8MRxiz-3bFWRzrTqApX4wVU17UDfxZ2_R2SEnKq"
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