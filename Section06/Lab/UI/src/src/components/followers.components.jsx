import React from "react";
import useConfig from "./useConfig";
import { Tabs, List, Typography } from 'antd';

const Followers = ({followers, following, findFollowers}) => {
    console.log('followers:', followers);
    const { app } = useConfig();

    const items = [
        {
          key: '1',
          label: `Following`,
          children: <List 
                dataSource={following}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text mark></Typography.Text> {item.name[0]}
                    </List.Item>
                )}
            />,
        },
        {
          key: '2',
          label: `Followers`,
          children: <List 
                dataSource={followers}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text mark></Typography.Text> {item.name[0]}
                    </List.Item>
                )}
            />,
        },
        {
            key: '3',
            label: `Find`,
            children: <List 
                  dataSource={findFollowers}
                  renderItem={item => (
                      <List.Item>
                          <Typography.Text mark></Typography.Text> {item.name[0]}
                      </List.Item>
                  )}
              />,
          },
    ];

    return (

        <div>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    )
}

export default Followers;
