import React, {Component} from "react";
import {Layout, Table} from "antd";
import InputForm from "./InputForm";

class AutomationTable extends Component {

    columns = [
        {
            title: "",
            width: 40,
            dataIndex: "icon",
            key: "icon",
            fixed: "left",
        },
        {
            title: "Name",
            width: 50,
            dataIndex: "friendlyName",
            key: "friendlyName",
            fixed: "left"
        },
        {
            title: "ID",
            width: 200,
            dataIndex: "id",
            key: "id",
            fixed: "left"
        },
        {
            title: 'Action',
            key: 'operation',
            width: 400,
        }
    ];

    render() {
        const {callAssociateApi, callGetAutomationApi} = this.props;
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Layout className="site-layout" style={{marginTop: '12'}}>
                    <div>
                        <InputForm
                            callAssociateApi={callAssociateApi}
                            callGetAutomationApi={callGetAutomationApi}
                        />
                        <Table/>
                    </div>
                </Layout>
            </Layout>
        );
    }
}

export default AutomationTable;