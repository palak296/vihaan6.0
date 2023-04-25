import React from 'react'
import Header from '../components/header'
import profile from "../assets/profile.png"

export function ProfileDetails() {
  return (
    <form className="w-full max-w-xl mt-12">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
            First Name
          </label>
          <input className="appearance-none block w-full bg-white text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />

        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
            Last Name
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
            City
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
            State
          </label>
          <div className="relative">
            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
              <option>Delhi</option>
              <option>Mumbai</option>
              <option>Kolkata</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-zip">
            Zip
          </label>
          <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210" />
        </div>
        <div className='flex-col'>
          <div className="flex flex-wrap -mx-3 ">
            <div className="w-full px-3 ml-3 mt-6">
              <label className="block uppercase tracking-wide text-white  text-xs font-bold mb-2 " for="college">
                College
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="college" type="college" placeholder="Enter your college" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3 ml-3 mt-12">
              <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2 " for="interest">
                Personal Interests
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="Personal_interest" type="interest" placeholder="Enter your interests" />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 ml-3 mt-3">
              <button className="bg-black text-white font-bold py-2 px-4 mt-6 rounded">Update</button>
            </div>
          </div>
        </div>


      </div>
    </form>
  )
}
const Profile = () => {
  return (
    <div className='bg-[#1d536c] '>
      <Header />
      <div className="min-h-screen ">
        <div className="font-medium text-4xl text-white mt-3 text-center"> Profile </div>
        <div className="  flex justify-around px-4">
          <div className="mx-auto w-64 ">
            <div className="relative w-50">
              <img className="w-50 h-50 rounded-full absolute" src={profile} alt="" />

            </div>
          </div>

          <div className=" w-[60%] ml-12 ">
            <ProfileDetails />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile