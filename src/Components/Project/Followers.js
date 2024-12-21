import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../State/MainContext'
import {Row,Col,Container, Image, Button} from 'react-bootstrap';

const Followers = () => {
   const {followersData,getFollowersData,searchTerm} = useContext(MainContext);
    
    useEffect(()=>{
      getFollowersData("https://api.github.com/users/"+ searchTerm + "/followers")
    },[]);
 if(followersData){
  return (
 
    <div className='reposContainer mt-4'>
            {
              followersData.map((e)=>{
                return(
                  < >
                  <div className='reposCard ' >
                  <Row>
                      <Col md={3}>
                      <Image src={e.avatar_url} alt='avatar' fluid roundedCircle></Image>
                      </Col>
                      <Col>
                          <h2>{e.login}</h2>
                        <Button className='btn btn-primary ' ><a href={e.html_url} target="_blank" className='nav-link'>Go to the Github Page</a></Button>
                      </Col>
                    </Row>
                    
                  </div>
                  </>
                )
              })
            }
        </div>
 
)
 }else{
    <div>
    no data
    </div>
 }
}

export default Followers