

import React, { useState, useEffect } from "react";
import React from "react";
import Health from './components/Categories/Health';
import Travel from './components/Categories/Travel';
import Music from './components/Categories/Music';
import Art from './components/Categories/Art';
import Education from './components/Categories/Education';
import Fashion from './components/Categories/Fashion'
import Other from './components/Categories/Other'
import Science from './components/Categories/Science'
import Sports from './components/Categories/Sports'
import Technology from './components/Categories/Technology'

function App() {
  const storedToken = localStorage.getItem("authToken"); // Retrieve Bearer token from local storage

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthComponent />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/category/health" element={<Health />} />
          <Route path="/category/travel" element={<Travel />} />
          <Route path="/category/music" element={<Music />} />
          <Route path="/category/art" element={<Art />} />
          <Route path="/category/education" element={<Education />} />
          <Route path="/category/fashion" element={<Fashion />} />
          <Route path="/category/other" element={<Other />} />
          <Route path="/category/science" element={<Science />} />
          <Route path="/category/sports" element={<Sports />} />
          <Route path="/category/technology" element={<Technology />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
