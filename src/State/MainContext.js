import React, { useState } from "react";
import {Users,Repos,Followers} from '../DummyData/UsersData'
export const MainContext = React.createContext();
const MainProvider = ({children}) =>{
    const [userData, setUserData] = useState();
    const [reposData, setReposData] = useState("");
    const [followersData, setFollowersData] = useState("");
    const [loading,setLoading] = useState(true);
    const [searchTerm,setSearchTerm]= useState('creativekamrul');
    // if(userData && reposData && followersData){
    //     setLoading(false)
    // }
   // ...
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

    const getFollowersData = async (followersUrl) =>{
        const nFollowersData = await getData(followersUrl);
        setFollowersData(nFollowersData);
    }


        
 
    
    return(
        <div>
            <MainContext.Provider value={ 
            {
            loading,
            userData,
            reposData, 
            followersData ,
            searchTerm,
            setSearchTerm,
            getUserData,
            getReposData,
            getFollowersData}

        }  >
                {children}
            </MainContext.Provider>
        </div>
    )
}
export default MainProvider;