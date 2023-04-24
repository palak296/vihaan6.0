import React from "react";
import sport from "../assets/sport.jpg"
import music from "../assets/music.jpg";
import art from "../assets/art.jpg";
import reading from "../assets/reading.jpg";
import writing from "../assets/writing.jpg";
import swimming from "../assets/swimming.jpeg";
import main from "../assets/main.png"


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
    <div class="flex">
        
        
        <div class="relative w-full">
            <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Explore your interests..." required/>
            <button type="submit" class="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span class="sr-only">Search</span>
            </button>
        </div>
    </div>
</div>
    )
}

const Body = () => {
  return (
      <div>
        <HeroSection/>
     
      <div class="mx-auto w-full md:w-4/5 px-4">
        <div class="container my-8">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-3xl font-medium">
              Passion
             
            </h2>
            <div>
              <button class="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"></button>
              <button class="cursor-pointer text-xl mx-1 text-indigo-600 font-bold"></button>
            </div>
          </div>
          <div
            id="scrollContainer"
            class="flex flex-no-wrap overflow-x-scroll scrolling-touch items-start mb-8"
          >
            <div class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
              <a href="#" class="space-y-4">
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src={music}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      Music
                    </h3>
                  </div>
                  <div class="text-lg">
                   
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Explore more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
              <a href="#" class="space-y-4">
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src={art}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      Art
                    </h3>
                  </div>
                  <div class="text-lg">
                   
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Explore more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
              <a href="#" class="space-y-4">
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src={sport}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      Sports
                    </h3>
                  </div>
                  <div class="text-lg">
                   
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Explore more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
              <a href="#" class="space-y-4">
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src={reading}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      Reading
                    </h3>
                  </div>
                  <div class="text-lg">
                    
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Explore more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
              <a href="#" class="space-y-4">
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src={writing}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      Writing
                    </h3>
                  </div>
                  <div class="text-lg">
                    
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Explore more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div class="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 border rounded-lg">
              <a href="#" class="space-y-4">
                <div class="aspect-w-16 aspect-h-9">
                  <img
                    class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src={swimming}
                    alt=""
                  />
                </div>
                <div class="px-4 py-2">
                  <div class="text-lg leading-6 font-medium space-y-1">
                    <h3 class="font-bold text-gray-800 text-3xl mb-2">
                      Swimming
                    </h3>
                  </div>
                  <div class="text-lg">
                    
                    <p class="font-medium text-sm text-indigo-600 mt-2">
                      Explore more<span class="text-indigo-600">&hellip;</span>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
