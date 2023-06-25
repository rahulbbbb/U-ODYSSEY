import React from "react";
import {Route, Routes} from "react-router-dom"
import SignUpPage from "./pages/SignUpPage";
import Home from "./Home";
import About from "./pages/About";
import ContactPage  from "./pages/contact";
import ServicePage  from "./pages/service";
import WeatherPage from "./pages/weatherPage";
import Error  from "./pages/Error";
import GalleryPage from "./pages/GalleryPage";
import Protected from "./components/Protected";
import LoginPage from "./pages/LoginPage";



const App = () => {
  
  return (
    <>
    
    <Routes>
      <Route exact path="/" element={<LoginPage/>}></Route>
      <Route exact path="/signup" element={<SignUpPage/>}></Route>
      <Route exact path="/home" element={<Protected Component={Home}/>}></Route>
      <Route path="/about" element={<Protected Component={About}/>}></Route>
      <Route path="/contact" element={<Protected Component={ContactPage}/>}></Route>
      <Route path="/service" element={<Protected Component={ServicePage}/>}></Route>
      <Route path="/weather" element={<Protected Component={WeatherPage}/>}></Route>
      <Route path="/gallery" element={<Protected Component={GalleryPage}/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>

    </>
  )};
export default App;
