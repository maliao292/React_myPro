import React, { Component } from 'react';
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import { Row, Col, Input, Select, Button, Table, Tag, Space } from 'antd';
const { Option } = Select;
class index extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.props.getList()
    }
    render() {
        const columns = [
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
            },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            },
            {
                title: 'Tags',
                key: 'tags',
                dataIndex: 'tags',
                render: tags => (
                    <>
                        {tags.map(tag => {
                            let color = tag.length > 5 ? 'geekblue' : 'green';
                            if (tag === 'loser') {
                                color = 'volcano';
                            }
                            return (
                                <Tag color={color} key={tag}>
                                    {tag.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <a>Invite {record.name}</a>
                        <a>Delete</a>
                    </Space>
                ),
            },
        ];

        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                address: 'New York No. 1 Lake Park',
                tags: ['nice', 'developer'],
            },
            {
                key: '2',
                name: 'Jim Green',
                age: 42,
                address: 'London No. 1 Lake Park',
                tags: ['loser'],
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                address: 'Sidney No. 1 Lake Park',
                tags: ['cool', 'teacher'],
            },
        ];

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
                    <Table className='yhTable' columns={columns} dataSource={data} />
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log(state.settingReducer.get('roleListArr'))
    return {
        // list:state.getIn(['settingReducer','roleListArr'])
        list:state.settingReducer.get('roleListArr')
    }
}
const mapDispathToProps = dispatch => {
    return {
        getList(formdata) {
            dispatch(actionCreators.setLoginMsgAction(formdata))
        }
    }
}
export default connect(mapStateToProps, mapDispathToProps)(index);