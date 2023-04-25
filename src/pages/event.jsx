import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import sport from "../assets/sport.jpg";
import { EventCard } from '../components/body';
import musicevent from "../assets/musicevent.jpg";
import sportscomp from "../assets/sportscomp.jpg";
import artexhibition from "../assets/artexhibition.jpg";
import reading from "../assets/reading.jpg";
import writing from "../assets/writing.jpg";
import swimming from "../assets/swimming.jpeg";
import { Card } from '../pages/collaborations'

export function MainSection(props) {

    return (
        <div className="py-20">
            <div className="  flex items-start justify-around rounded-xl px-4  bg-[#08324f] ml-24 mr-24">
                <div className=" w-[40%] mt-12">
                    <h2 className="text-5xl text-white  font-medium">
                        Cricket Competition
                    </h2>

                    <div className="text-xl text-white mt-12">
                        <div className="mb-6">Venue: Delhi</div>
                        <div className="mb-6">Time: 5-7pm</div>
                        <div className="mb-6">No. of Participants: 30</div>
                        <div className="mb-6">Organizer: Subh Raj</div>
                        <button class="bg-black mb-12 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded">
                            Join
                        </button>
                    </div>

                </div>
                <img src={sport} alt="" className="h-100 w-80 mt-20" />
            </div>

            <div className="mx-auto w-full md:w-4/5 px-4 mt-24">
                <div className="container my-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-medium">Participants</h2>
                    </div>
                    <div
                        id="scrollContainer"
                        className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
                    >
                        <Card name={"Smith Jain"} np={25} locality={"Delhi"} />
                        <Card name={"Siri Shrivastva"} np={25} locality={"Pune"} />
                        <Card name={"Vishal Gupta"} np={25} locality={"Banglore"} />
                        <Card name={"Smith "} np={25} locality={"Mumbai"} />
                    </div>
                </div>
            </div>

            <div className="mx-auto w-full md:w-4/5 px-4 mt-24">
                <div className="container my-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-medium">More events</h2>
                    </div>
                    <div
                        id="scrollContainer"
                        className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
                    >
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
}

const Event = () => {
    return (
        <div>
            <Header />
            <MainSection />

        </div>
    )
};

export default Event;