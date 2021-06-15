import React, {Component} from 'react';
import NavigationBar from "../navBar/navBar";
import Automation from "../content/Automation";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerID: "testcustomerId",
            token: "lwaToken"
        };
    }

    setCustomerId = (customerID) => {
        this.setState({
            customerID: customerID
        });
    };

    getCustomerId = () => {
        return this.state.customerID;
    };

    setLwaToken = (lwaToken) => {
        this.setState({
            token: lwaToken
        });
    };

    getLwaToken = () => {
        return this.state.token;
    };

    render() {
        const {getCustomerId, getLwaToken} = this
        return (
            <main>
                <NavigationBar
                    getCustomerId={getCustomerId}
                />
                <Automation
                    getCustomerId={getCustomerId}
                    getLwaToken={getLwaToken}
                />
            </main>
        );
    }
}

export default Main;