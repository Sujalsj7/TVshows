import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { fetchShows } from "../api";
import './ShowListScreen.css';
import '../index.css';

const ShowListScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShowsData = async () => {
      try {
        const data = await fetchShows();
        setShows(data);
      } catch (error) {
        console.log("error");
      }
    };

    fetchShowsData();
  }, []);

  return (
   

    <div className="container">
      <h1>Show List</h1>
      <ul className="show-list">
        {shows.map(show => (
          <li key={show.show.id}>
            <div className="show-card">
              <img src={show.show.image?.medium} alt={show.show.name} />
              <h3>{show.show.name}</h3>
              
              <a class="btn btn-primary" href={`/summary/${show.show.id}`} role="button">View Details</a>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShowListScreen;
