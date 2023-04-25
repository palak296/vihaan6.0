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
                        Rapping Community
                    </h2>
                    <br />
                    <h3 className="text-3xl text-white font-light">Join here Bantai</h3>

                    <div className="text-xl text-white mt-12">
                        <div className="mb-6">Active Members: 30</div>
                        <button class="bg-black mb-12 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded">
                            Join
                        </button>
                    </div>

                </div>
                <img src='https://media.istockphoto.com/id/1224556355/photo/cool-boy-child-dancing-hip-hop-in-a-hoodie-and-glasses-in-a-studio-on-a-neon-background.jpg?s=612x612&w=0&k=20&c=2tljg7DX-DB7u1N9R8H3YO8zAnpQyWgu8ZdMxJOUF0I=' alt="" className="h-100 w-80 mt-20" />
            </div>

            <div className="mx-auto w-full md:w-4/5 px-4 mt-24">
                <div className="container my-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-medium">Previous events</h2>
                    </div>
                    <div
                        id="scrollContainer"
                        className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
                    >
                        <EventCard img='https://ichef.bbci.co.uk/news/976/cpsprodpb/1352B/production/_98874197_rappers.jpg' text={"BeeetDrope"} />
                        <EventCard img='https://th-thumbnailer.cdn-si-edu.com/K_7v3RLiQa7scJe9LByPFHWLfXc=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/02/fd/02fdac13-96e6-4651-bca5-a9b6719bc3e5/9480751508_49909a4de9_c.jpg' text={"mikemikecheck"} />

                    </div>
                </div>
            </div>

            <div className="mx-auto w-full md:w-4/5 px-4 mt-24">
                <div className="container my-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-medium">Other related communities</h2>
                    </div>
                    <div
                        id="scrollContainer"
                        className="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
                    >
                        <EventCard img='https://static.wikia.nocookie.net/beatbox/images/b/bb/NaPoM_GBB_2021.jpg' text={"Beatboxing"} link='/community' />

                    </div>
                </div>
            </div>

            <div className="mx-auto w-full md:w-4/5 px-4 mt-24">
                <div className="container my-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-3xl font-medium">Active Leaderboard</h2>
                    </div>
                    <div id="container mx-auto">
                        <div class="row"><div class="name">Raftaar</div><div class="score">430</div></div>
                        <div class="row"><div class="name">Divine</div><div class="score">580</div></div>
                        <div class="row"><div class="name">MC Stan</div><div class="score">310</div></div>
                        <div class="row"><div class="name">KrSNA</div><div class="score">640</div></div>
                    </div>
                </div>
            </div>

        </div >
    );
}

const Community = () => {
    return (
        <div>
            <Header />
            <MainSection />

        </div>
    )
};

export default Community;