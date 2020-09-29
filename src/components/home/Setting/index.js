import React, { Component } from 'react';
import { Row, Col, Input, Select, Button, Table, Tag, Space } from 'antd';
const { Option } = Select;
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    key: 'name',
                    render: text => <a>{text}</a>,
                },
                {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                }
            ]
        };
    }
    render() {

        return (
            <div className='container'>
                <div className='formSearch'>
                    <Row gutter={16}>
                        <Col className="gutter-row" span={2}>
                            <Input placeholder="Basic usage" />
                        </Col>
                        <Col className="gutter-row" span={2}>
                            <Select defaultValue="lucy" style={{ width: '100%' }} >
                                <Option value="jack">Jack</Option>
                            </Select>
                        </Col>

                        <Col className="gutter-row" span={6}>
                            <Button type="primary" size='middle'>Default</Button>
                        </Col>
                    </Row>
                </div>
                <div className='tableShow'>

                </div>
            </div>
        );
    }
}

export default index;