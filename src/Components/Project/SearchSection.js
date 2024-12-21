import React, { useContext, useEffect } from 'react'

import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import { MainContext } from '../../State/MainContext';
import { Users } from '../../DummyData/UsersData';

const SearchSection = () => {
const {getUserData,searchTerm,setSearchTerm,getFollowersData,getReposData} = useContext(MainContext)
const handelSubmit = (e)=>{
  e.preventDefault();
  getUserData("https://api.github.com/users/" + searchTerm);
  getFollowersData("https://api.github.com/users/"+searchTerm+ "/followers");
  getReposData("https://api.github.com/users/" + searchTerm + "/repos");
  
}
useEffect(()=>{

},[])
  return (
    <div>
    <Container >
        <Row>
            <Col>
            <Form className="d-flex mt-5" onSubmit={handelSubmit}>
            <Form.Control
              type="search"
              placeholder="Users Name"
              className="me-2 text-center"
              aria-label="Search"
              value={searchTerm}
              onChange={(e)=>{
                setSearchTerm(e.target.value)
              }}
            />
            <Button variant="primary   ms-3" type='submit'>Search</Button>
          </Form>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default SearchSection