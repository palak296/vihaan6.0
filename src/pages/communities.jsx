import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import { EventCard } from '../components/body';
import serverURL from '../backend';
import axios from "axios";

export function MainSection() {
  const [events, setEvents] = useState()

  useEffect(function () {
    if (!events) {
      axios.get(`${serverURL}/skill/`)
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
          <h2 className="text-3xl font-medium">Communities to join</h2>
        </div>
        <div className="container my-8 flex flex-wrap justify-center">
          {events && events.map(function (event, index) {
            return <EventCard key={index} img={event.image} text={event.name} link='/community' />
          })}
        </div>
      </div>
    </div>
  );
}

const Communities = () => {
  return (
    <div>
      <Header />
      <MainSection />
    </div>
  )
};

export default Communities;