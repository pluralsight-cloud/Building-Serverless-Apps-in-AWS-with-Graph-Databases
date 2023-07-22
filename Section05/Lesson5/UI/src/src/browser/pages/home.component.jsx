import React from "react";
import { useEffect, useState } from "react";
import useConfig from "../../components/useConfig";
import { Row, Col, Space, Avatar, Typography, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from "axios";
import Followers from '../../components/followers.components';
import Hobbies from "../../components/hobbies.components";
import config from "../../config"

const { Title, Paragraph } = Typography;

const Home = ({userData}) => {
    const [id, setSetId] = useState(userData.id);
    const [followers, setFollowers] = useState();
    const [hobbies, setHobbies] = useState();

    useEffect(() => {
        getFollers(id);
        getHobbies(id);
    }, []);

    useEffect(() => {
        getFollers(id);
        getHobbies(id);
    }, [id]);

    const getFollers = async (id) => {
        console.log('get followers', config.api)

        try {
            const {data} = await axios.get(`${config.api}/people/${id}/followers`);
            console.log('data', data.data)
            setFollowers(data.data);
        } catch(err) {
            console.log(err);
        }
    }

    const getHobbies = async (id) => {
        try {
            const {data} = await axios.get(`${config.api}/people/${id}/hobbies`);
            console.log('data', data.data)
            setHobbies(data.data);
        } catch(err) {
            console.log(err);
        }
    }

    const { app } = useConfig();
    return (
        <div>
            <Row gutter={12}>
                <Col span={3}>
                    <Followers followers={followers}></Followers>
                    <Hobbies hobbies={hobbies}></Hobbies>
                </Col>
                <Col span={20}>
                    <div style={{backgroundColor: '#FFFFFF', borderRadius: '10px'}}>
                        <Space direction='horrizontal' style={{width: '100%', padding: '20px 0px 0px 20px'}}>
                            <div>
                                <Avatar size={64} icon={<UserOutlined />} />
                                {userData.name}
                            </div>
                            <div style={{padding: '0px 20px'}}>
                                <Paragraph style={{fontSize: '14px'}}>
                                    {userData.bio}
                                </Paragraph>
                            </div>
                        </Space>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Home;
