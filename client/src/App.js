// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import AuthComponent from "./components/register/AuthComponent";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Blog from "./components/Blogs/Blogs";
// import CreatePost from "./components/createpost/createpost";
// import Health from "./components/Categories/Health";
// import Travel from "./components/Categories/Travel";
// import Music from "./components/Categories/Music";
// import Art from "./components/Categories/Art";
// import Education from "./components/Categories/Education";
// import Fashion from "./components/Categories/Fashion";
// import Other from "./components/Categories/Other";
// import Science from "./components/Categories/Science";
// import Sports from "./components/Categories/Sports";
// import Technology from "./components/Categories/Technology";
// import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component

// function App() {
//   // const [token, setToken] = useState(localStorage.getItem("token"));

//   // const onLogin = (userToken) => {
//   //   // Set the token in both state and localStorage
//   //   setToken(userToken);
//   //   localStorage.setItem("token", userToken);
//   // };

//   // const onLogout = () => {
//   //   // Clear the token from both state and localStorage
//   //   setToken(null);
//   //   localStorage.removeItem("token");
//   // };

//   // useEffect(() => {
//   //   // Check if the user is already authenticated (has a token in localStorage)
//   //   const storedToken = localStorage.getItem("token");
//   //   if (storedToken) {
//   //     setToken(storedToken);
//   //   }
//   // }, []);
//   // Inside your useEffect or wherever you need to check authentication
//   // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));

//   const storedToken = localStorage.getItem("authToken"); // Retrieve Bearer token from local storage

//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("authToken"));


//   return (
//     <Router>
//       <div className="App">
//         <Sidebar />
//         <Navbar />

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/auth"
//             element={<AuthComponent setIsLoggedIn={setIsLoggedIn} />}
//           />
//           <Route path="/blog" element={<Blog />} />
//           <Route
//             path="/createpost"
//             element={ <ProtectedRoute
//               path="/createpost"
//               element={<CreatePost />}
//               isLoggedIn={isLoggedIn}
//             />}
//           />
//           {/* <Route path="/createpost" element={<CreatePost />} /> */}
         
//           <Route
//             path="/category/health"
//             element={<ProtectedRoute token={storedToken} element={Health} />}
//           />
//           <Route
//             path="/category/travel"
//             element={<ProtectedRoute token={storedToken} element={Travel} />}
//           />
//           <Route
//             path="/category/music"
//             element={<ProtectedRoute token={storedToken} element={Music} />}
//           />
//           <Route
//             path="/category/art"
//             element={<ProtectedRoute token={storedToken} element={Art} />}
//           />
//           <Route
//             path="/category/education"
//             element={<ProtectedRoute token={storedToken} element={Education} />}
//           />
//           <Route
//             path="/category/fashion"
//             element={<ProtectedRoute token={storedToken} element={Fashion} />}
//           />
//           <Route
//             path="/category/other"
//             element={<ProtectedRoute token={storedToken} element={Other} />}
//           />
//           <Route
//             path="/category/science"
//             element={<ProtectedRoute token={storedToken} element={Science} />}
//           />
//           <Route
//             path="/category/sports"
//             element={<ProtectedRoute token={storedToken} element={Sports} />}
//           />
//           <Route
//             path="/category/technology"
//             element={<ProtectedRoute token={storedToken} element={Technology} />}
//           />
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import AuthComponent from "./components/register/AuthComponent";
import Sidebar from "./components/Sidebar/Sidebar";
import Blog from "./components/Blogs/Blogs";
import CreatePost from "./components/createpost/createpost";
import Health from "./components/Categories/Health";
import Travel from "./components/Categories/Travel";
import Music from "./components/Categories/Music";
import Art from "./components/Categories/Art";
import Education from "./components/Categories/Education";
import Fashion from "./components/Categories/Fashion";
import Other from "./components/Categories/Other";
import Science from "./components/Categories/Science";
import Sports from "./components/Categories/Sports";
import Technology from "./components/Categories/Technology";

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
