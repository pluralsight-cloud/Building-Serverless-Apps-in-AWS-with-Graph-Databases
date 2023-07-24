import React from "react";
import useConfig from "./useConfig";
import { Row, Col, List, Typography } from 'antd';

const Hobbies = ({hobbies}) => {
    const { app } = useConfig();
    return (
        <div>
            <h3>Interests</h3>
             <List 
                dataSource={hobbies}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text mark></Typography.Text> {item.name[0]}
                    </List.Item>
                )}
            />
        </div>
    )
}

export default Hobbies;
