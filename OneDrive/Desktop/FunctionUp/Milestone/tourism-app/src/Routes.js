import {  Routes, Route } from 'react-router-dom';
import Home from "./Home";
import About from "./pages/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import WeatherPage from './pages/weatherPage';
import Gallery from './Gallery/Gallery';
import Login from './components/SignIn/login';
import SignUp from './components/SignUp/SignUp';

export const MyRoutes = () => (
    <Routes> 
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/weather" component={WeatherPage} />
        <Route exact path="/gallery" component={Gallery}/>

       
  </Routes>
  
  
  );