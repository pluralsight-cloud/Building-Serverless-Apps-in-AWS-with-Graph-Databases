import React from "react";
import { useEffect, useState } from "react";
import useConfig from "../../components/useConfig";
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import axios from "axios";
import Followers from '../../components/followers.components';
import Hobbies from "../../components/hobbies.components";
import config from "../../config"

const Home = ({userData}) => {
    const [id, setSetId] = useState(userData.id);
    const [followers, setFollowers] = useState();
    const [following, setFollowing] = useState();
    const [hobbies, setHobbies] = useState();
    const [findFollowers, setFindFollowers] = useState();

    useEffect(() => {
        getFollers(id);
        getHobbies(id);
        findFriends(id);
    }, []);

    useEffect(() => {
        getFollers(id);
        getFollowing(id);
        getHobbies(id);
        findFriends(id);
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

    const getFollowing = async (id) => {
        console.log('get following', config.api)

        try {
            const {data} = await axios.get(`${config.api}/people/${id}/following`);
            console.log('data', data.data)
            setFollowing(data.data);
        } catch(err) {
            console.log(err);
        }
    }

    const findFriends = async (id) => {
        try {
            const {data} = await axios.get(`${config.api}/people/${id}/findfriends`);
            console.log('data', data.data)
            setFindFollowers(data.data);
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
        <div className="container">
            <section className="profile-section">
                <div className="profile-picture" style={{padding: '15px'}}>
                    <Avatar size={64} icon={<UserOutlined />} />
                </div>
                <div className="user-info">
                    <h2>{userData.name}</h2>
                    <p>Age: {userData.age}</p>
                    <p>Location: {userData.location}</p>
                </div>
            </section>

            <section className="post-section">
                <div className="post">
                    <h3>Post Title</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at massa id libero maximus malesuada. Sed euismod euismod euismod.</p>
                </div>
                <div className="post">
                    <h3>Another Post</h3>
                    <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Nulla quis lorem ut libero malesuada feugiat.</p>
                </div>
            </section>

            <aside className="sidebar">
                <h3>About {userData.name}</h3>
                <p>{userData.bio}</p>

                <Hobbies hobbies={hobbies} />
                <Followers followers={followers} following={following} findFollowers={findFollowers}></Followers>
            </aside>
        </div>
    )
}

export default Home;
