import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShows } from "../api";
import "../index.css";

const ShowSummaryScreen = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [bookingFormVisible, setBookingFormVisible] = useState(false);

  useEffect(() => {
    const fetchShowSummary = async () => {
      try {
        const data = await fetchShows();
        const selectedShow = data.find((item) => item.show.id === parseInt(id));
        setShow(selectedShow);
      } catch (error) {
        alert("error");
      }
    };

    fetchShowSummary();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBookTicket = () => {
    setBookingFormVisible(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
    });

    setBookingFormVisible(false);
  };

  return (
    <div >
      {show ? (
        <div className="">
          {/* <h2>{show.show.name} </h2>

          <div class="card">
            <div class="card-body">
              <p> {show.show.summary}</p>
            </div>
          </div> */}

          <div class="jumbotron">
            <h1 class="display-4">{show.show.name}</h1>
            <p class="lead">{show.show.summary}</p>
            <p>Language: {show.show.language} </p>
            <p>Genre: {show.show.genres[0] }  {show.show.genres[1]}</p>

            
            <hr class="my-4" />
            <p class="lead">
              
              <button class="btn btn-primary btn-lg" onClick={handleBookTicket} type="submit">Book Ticket</button>
            </p>
          </div>

          {bookingFormVisible ? (
            <div className="booking-form">
              <h3>Movie Ticket Booking (Name:{show.show.name})</h3>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber">Phone Number:</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <button type="submit">Book Ticket</button>
              </form>
            </div>
          ) : (
            <div>
              {/* <button
                onClick={handleBookTicket}
                type="button"
                class="btn btn-primary"
              >
                Book Ticket
              </button> */}
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ShowSummaryScreen;
