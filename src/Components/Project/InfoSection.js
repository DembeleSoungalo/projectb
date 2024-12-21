import React, { useContext, useEffect} from 'react';
import { MainContext } from '../../State/MainContext';
import {Row,Col,Container, Image, Button} from 'react-bootstrap';
import RepoSection from './RepoSection';
import Followers from './Followers';



const InfoSection = () => {
  const {userData,getUserData,searchTerm}= useContext(MainContext);
  useEffect(()=>{
    getUserData("https://api.github.com/users/"+ searchTerm);
  },[])
  if (!userData) {
    return <div>Loading...</div>;
  }

  
  return (
    <div>
    <Container>
      <Row>
        <Col>
          <Image className="user_img" src={userData.avatar_url} roundedCircle alt='user_img'></Image>
          <h1>{userData.name}</h1>
          <p>{userData.bio}</p>
          <Button className='btn btn-primary ' ><a href={userData.html_url} target="_blank" className='nav-link'>Aller à la page Github</a></Button>
        </Col>
        <Col className='user_2nd'>
        <h1>Repos publics : {userData.public_repos}</h1>
        <h1>Abonnés : {userData.followers}</h1>
        <h1> {userData.company}</h1>
        <h1><a href={userData.blog}>{userData.blog}</a></h1>
        </Col>
      </Row>
      <Row>
          <Col>
           
            <RepoSection />
          </Col>
          <Col>
            <Followers />
          </Col>
        </Row>
    </Container>
       
    </div>
  );
};

export default InfoSection