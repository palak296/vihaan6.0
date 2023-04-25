import React from 'react'
import Header from '../components/header'
import { Search } from '../components/body';

export function Card({ name, np, locality }) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex mt-12">

      <div className="border border-gray-400  bg-white rounded-xl  p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
          <div className="text-l text-black ">
            <div className="mb-2">Skills: music, dance, beat-boxing</div>
            <div className="mb-2">Locality: {locality}</div>
            <div className="mb-2">No. of Participations: {np}</div>
            <button class="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 mt-6 rounded">
              Connect
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}

export function HeroSection() {
  return (
    <div className="bg-[#b2deef] py-12  flex items-center justify-around px-4">
      <div className=" w-[40%] ">
        <h2 className="text-4xl text-blue-950  font-medium mb-6">
          Search skills for collaboration
        </h2>
        <Search />
      </div>
    </div>
  );
}

const Collaborations = () => {
  return (
    <div className='mb-5'>
      <Header />
      <HeroSection />
      <div className="container my-8">
        <div
          id="scrollContainer"
          className="flex-col w-[20%] justify-center flex-no-wrap items-start mb-8 mx-auto"
        >
          <Card name={"Smith Jain"} np={25} locality={"Delhi"} />
          <Card name={"Siri Shrivastva"} np={25} locality={"Pune"} />
          <Card name={"Vishal Gupta"} np={25} locality={"Banglore"} />
          <Card name={"Smith "} np={25} locality={"Mumbai"} />
        </div>
      </div>
    </div>
  )
}

export default Collaborations