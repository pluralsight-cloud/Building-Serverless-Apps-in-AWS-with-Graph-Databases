import React from "react";
import useConfig from "./useConfig";
import { Row, Col, List, Space } from 'antd';

const Followers = ({followers}) => {
    console.log('followers:', followers);
    const { app } = useConfig();
    return (
        <div>
            <h2>Followers</h2>
             <List 
                dataSource={followers}
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

export default Followers;
