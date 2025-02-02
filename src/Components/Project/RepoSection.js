import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../State/MainContext';
import { Row, Col, Container, Image, Button, Spinner } from 'react-bootstrap';

const RepoSection = () => {
  const { reposData, getReposData, searchTerm } = useContext(MainContext);

  useEffect(() => {
    if (typeof getReposData === "function") {
      getReposData("https://api.github.com/users/" + searchTerm + "/repos");
    } else {
      console.error("getReposData is not a function");
    }
  }, [getReposData, searchTerm]);

  if (!reposData) {
    return (
      <div>
        <Spinner animation="grow" />
      </div>
    );
  }

  return (
    <div className="reposContainer mt-4">
      {reposData.map((e) => (
        <div key={e.id}>
          <div className="reposCard">
            <h2>{e.name}</h2>
            <Button className="btn btn-primary">
              <a href={e.html_url} target="_blank" className='nav-link'>
                Go to the GitHub Page
              </a>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RepoSection;
