import React, {Component} from "react";
import {Layout} from "antd";
import InputForm from "./InputForm";

class AutomationTable extends Component {

    render() {
        const {callAssociateApi, callGetAutomationApi, getAutomation, setAutomationId, getAutomationId, setAutomation} = this.props;
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Layout className="site-layout" style={{marginTop: '12'}}>
                    <div>
                        <InputForm
                            callAssociateApi={callAssociateApi}
                            callGetAutomationApi={callGetAutomationApi}
                            getAutomation={getAutomation}
                            setAutomation={setAutomation}
                            setAutomationId={setAutomationId}
                            getAutomationId={getAutomationId}
                        />
                        <div><pre>{JSON.stringify(getAutomation(), null, 2) }</pre></div>
                    </div>
                </Layout>
            </Layout>
        );
    }
}

export default AutomationTable;