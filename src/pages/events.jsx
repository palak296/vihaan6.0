import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { EventCard } from '../components/body';
import musicevent from "../assets/musicevent.jpg";
import sportscomp from "../assets/sportscomp.jpg";
import artexhibition from "../assets/artexhibition.jpg";
import reading from "../assets/reading.jpg";
import writing from "../assets/writing.jpg";
import swimming from "../assets/swimming.jpeg";
import serverURL from '../backend';
import axios from "axios";

export function MainSection() {
  const [events, setEvents] = useState()

  useEffect(function () {
    if (!events) {
      axios.get(`${serverURL}/event/`)
        .then(function (response) {
          setEvents(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [events])

  return (
    <div className="py-20">
      <div className="mx-auto w-full md:w-4/5 px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-medium">All Events</h2>
        </div>
        <div className="container my-8 flex flex-wrap justify-center">
          {events && events.map(function (event, index) {
            return <EventCard key={index} img={event.image} text={event.name} />
          })}
        </div>
      </div>
    </div>
  );
}

const Events = () => {
  return (
    <div>
      <Header />
      <MainSection />
    </div>
  )
};

export default Events;