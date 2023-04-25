import React, { useEffect, useState } from "react";
import sport from "../assets/sport.jpg"
import music from "../assets/music.jpg";
import art from "../assets/art.jpg";
import reading from "../assets/reading.jpg";
import writing from "../assets/writing.jpg";
import swimming from "../assets/swimming.jpeg";
import main from "../assets/main.png"
import musicevent from "../assets/musicevent.jpg"
import sportscomp from "../assets/sportscomp.jpg"
import artexhibition from "../assets/artexhibition.jpg"
import { Link } from "react-router-dom";
import serverUrl from '../backend'
import axios from "axios";

export function HeroSection() {
  return (
    <div className="bg-[#b2deef] py-12">
      <div className="  flex items-center justify-around px-4">
        <div className=" w-[40%] ">
          <h2 className="text-4xl text-blue-950  font-medium mb-6">
            Unleash Your Potential, Connect with Peers, Excel in
            Extracurriculars
          </h2>
          <Search />
        </div>

        <img src={main} alt="" className="  h-100 w-80" />
      </div>
    </div>
  );
}

export function Search() {
  return (
    <div>
      <div className="flex">


        <div className="relative w-full">
          <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Explore your interests..." required />
          <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
    </div>
  )
}
export function Card({ img, text }) {
  return (
    <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 h-1/3 border rounded-lg">
      {console.log(img)}
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="object-cover shadow-md hover:shadow-xl rounded-lg h-[30%]"
          src={img}
          alt=""
        />
      </div>
      <div className="px-4 py-2">
        <div className="text-lg leading-6 font-medium space-y-1">
          <h3 className="font-bold text-gray-800 text-xl mb-2">{text}</h3>
        </div>
        <div className="text-lg">
          <p className="font-medium text-sm text-indigo-600 mt-2">
            Explore more<span className="text-indigo-600">&hellip;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function EventCard({ img, text }) {
  return (
    <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 h-1/3 border rounded-lg" onClick={() => window.location.href = '/event'}>
      <div className="aspect-w-16 aspect-h-9">
        <img
          className="object-cover shadow-md hover:shadow-xl rounded-lg h-[30%]"
          src={img}
          alt=""
        />
      </div>
      <div className="px-4 py-2">
        <div className="text-lg leading-6 font-medium space-y-1">
          <h3 className="font-bold text-gray-800 text-xl mb-2">{text}</h3>
        </div>
        <div className="text-lg">
          <p className="font-medium text-sm text-indigo-600 mt-2">
            Explore more<span className="text-indigo-600">&hellip;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

const Body = () => {
  const [passions, setPassions] = useState()
  const [events, setEvents] = useState()

  useEffect(function () {
    if (!passions) {
      axios.get(`${serverUrl}/skill`)
        .then(function (response) {
          setPassions(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [passions])

  useEffect(function () {
    if (!events) {
      axios.get(`${serverUrl}/event/`)
        .then(function (response) {
          setEvents(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  }, [events])

  return (
    <div>
      <HeroSection />

      <div className="mx-auto w-full md:w-4/5 px-4">
        <div className="container my-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-medium">Passion</h2>
          </div>
          <div
            id="scrollContainer"
            className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
          >

            {passions && passions.map(function (passion, index) {
              return <Card key={index} img={passion.image} text={passion.name} />
            })}

            <Card img={music} text={"Music"} />
            <Card img={art} text={"Art"} />
            <Card img={sport} text={"Sport"} />
            <Card img={reading} text={"Reading"} />
            <Card img={writing} text={"Writing"} />
            <Card img={swimming} text={"Swimming"} />
          </div>
        </div>
      </div>

      <div className="mx-auto w-full md:w-4/5 px-4 mt-12">
        <div className="container my-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl font-medium">Upcoming events</h2>
          </div>
          <div
            id="scrollContainer"
            className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
          >
            {events && events.map(function (event, index) {
              return <Card key={index} img={event.image} text={event.name} />
            })}

            <EventCard img={sportscomp} text={"Cricket Competition"} />
            <EventCard img={artexhibition} text={"Art Exhibition"} />
            <EventCard img={musicevent} text={"Concert"} />
            <EventCard img={reading} text={"Reading"} />
            <EventCard img={writing} text={"Writing"} />
            <EventCard img={swimming} text={"Swimming"} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Body;