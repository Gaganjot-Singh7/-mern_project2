// AboutUsPage.js

import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-gray-800 text-white py-4">
        <h1 className="text-3xl font-semibold text-center">About Us</h1>
      </header>
      <main className="container mx-auto py-8">
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Developer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src="team-member1.jpg" alt="Team Member 1" className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Gaganjot Singh</h3>
              <p className="text-gray-700">MERN Steck web developer</p>
            </div>
           
            {/* Add more team members here */}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Join Us!</h2>
          
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; 2024 Technolex. All rights reserved.
      </footer>
    </div>
  );
};

export default AboutUsPage;
