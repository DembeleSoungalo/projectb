import React, { useContext, useEffect } from 'react'
import { MainContext } from '../../State/MainContext'
import {Row,Col,Container, Image, Button, Spinner} from 'react-bootstrap';
const RepoSection = () => {
  const {reposData,getReposData,searchTerm} = useContext(MainContext);
  useEffect(()=>{
    getReposData("https://api.github.com/users/" + searchTerm + "/repos");
  },[])
  
  if(reposData){
    return (
      <div className="reposContainer mt-4">
          {/* {
            reposData.map((e)=>{
              return(
                <div key={e.id} >
                <div className="reposCard" >
                  <h2>{e.name}</h2>
                  <Button className="btn btn-primary"  ><a href={e.html_url} target="_blank" className='nav-link'>Go to the Github Page</a></Button>
                </div>
                </div>
              )
            })
          } */}
      </div>
    )
  }else{
    return(
      <div>
        <Spinner animation="grow" >
         
        </Spinner>
      </div>
    )
  }
}

export default RepoSection