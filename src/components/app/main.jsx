import React, {Component} from 'react';
import NavigationBar from "../navBar/navBar";
import Automation from "../content/Automation";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            automationID: ""
        };
    }

    getAutomationId = () => {
        return this.state.automationID;
    }

    setAutomationId = (automationId) => {
        this.setState({
            automationID: automationId
        })
    }

    render() {
        const {getAutomationId, setAutomationId} = this
        return (
            <main>
                <NavigationBar/>
                <Automation
                    getAutomationId={getAutomationId}
                    setAutomationId={setAutomationId}
                />
            </main>
        );
    }
}

export default Main;