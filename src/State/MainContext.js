import React, { useState } from "react";
import { Users, Repos, Followers } from '../DummyData/UsersData';
export const MainContext = React.createContext();

const MainProvider = ({ children }) => {
    const [userData, setUserData] = useState();
    const [reposData, setReposData] = useState([]);
    const [followersData, setFollowersData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("creativekamrul");

    const getData = async (url) => {
        const rawData = await fetch(url);
        const convertedData = await rawData.json();
        return convertedData;
    }

    const getUserData = async (userUrl) => {
        const nUserData = await getData(userUrl);
        setUserData(nUserData);
    }

    const getReposData = async (reposUrl) => {
        const nReposData = await getData(reposUrl);
        setReposData(nReposData);
        console.log(nReposData);
    }

    const getFollowersData = async (followersUrl) => {
        const nFollowersData = await getData(followersUrl);
        setFollowersData(nFollowersData);
    }

    return (
        <MainContext.Provider value={{
            loading,
            userData,
            reposData,
            followersData,
            searchTerm,
            setSearchTerm,
            getUserData,
            getReposData,
            getFollowersData
        }}>
            {children}
        </MainContext.Provider>
    )
}

export default MainProvider;
