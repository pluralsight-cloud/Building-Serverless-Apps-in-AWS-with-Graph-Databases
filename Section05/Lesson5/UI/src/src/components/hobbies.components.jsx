import React from "react";
import useConfig from "./useConfig";
import { Row, Col, List, Space } from 'antd';

const Hobbies = ({hobbies}) => {
    const { app } = useConfig();
    return (
        <div>
            <h2>Hobbies</h2>
             <List 
                dataSource={hobbies}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta title={(
                            <Space direction='vertical'>
                                <div>{item.name[0]}</div>
                            </Space>
                        )} />
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Hobbies;
