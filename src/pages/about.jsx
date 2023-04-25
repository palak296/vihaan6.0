import React from 'react';
import Header from '../components/header'
import about from "../assets/about.png"

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img className="rounded-lg shadow-lg" src={about} alt="Team photo" />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <p className="text-lg leading-7 mb-4">
              Our mission is to create a platform that enables college students to showcase their skills, build their network, and enhance their career prospects, while having fun and making a difference. We believe that every college student has unique talents and interests, and that every competition is an opportunity to explore, learn, and grow.
              <br /><br />
              Our team is made up of experts in various fields, such as web development, user experience design, marketing, and community building. We have years of experience working with college students, understanding their needs and aspirations, and designing solutions that meet and exceed their expectations.
              <br /><br />
              We are also passionate about innovation, creativity, and social impact. We strive to create competitions that not only challenge and entertain, but also contribute to the greater good of society. We believe that by connecting college students from different backgrounds, cultures, and perspectives, we can promote empathy, understanding, and cooperation, and create a better world for everyone.
              <br /><br />
              Our values are transparency, inclusivity, and excellence. We are committed to building a platform that is open, fair, and accessible to all college students, regardless of their gender, race, religion, or nationality. We believe in fostering a culture of collaboration, respect, and continuous improvement, and we are always eager to listen to feedback, suggestions, and ideas from our users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;