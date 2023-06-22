import "./App.css";
import About from "./components/about/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Skills from "./components/skills/Skills";
import Service from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";

function App() {
    return (
        <>
            <Header/>
            <main className="main">
                <Home/>
                <About/>
                <Skills/>
                <Service/>
                <Qualification/>
                <Testimonials/>
                <Contact/>
            </main>
            <Footer/>
            <ScrollUp/>
        </>
    );
}

export default App;