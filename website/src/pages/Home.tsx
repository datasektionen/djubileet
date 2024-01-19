import React from 'react';
import animatedLogo from '../img/AnimeradLogga.gif'
import arrow from '../img/chevron-double-up.svg'
import '../css/App.css';
import CountdownTimer from '../components/CountdownTimer';
import Timeline from './Timeline';
import Linky from './Linky';
import About from './About';
import NavBar from "../components/NavBar";
import CompanyInfo from "./CompanyInfo";
import History from "./History";

function Home() {
  const DATUM = new Date("2028-10-14T00:00:00Z");

    return (
        <div className={"main"}>
            <div id={"top"} className="landing-screen">
                <header className={"header"}>
                    <NavBar/>
                </header>
                <div className={"filler"} />
                <img className={"landing-logo"} src={animatedLogo} alt={"dJubileet Logo"}/>

                <div className="bday">
                    <p>Tack till alla som deltog i Konglig Datasektionens 40-årsjubileum!</p>
                    <p>Vi ses igen på 45-års jubileumet</p>
                </div>
                <div className="landing-countdown">
                    <CountdownTimer targetDate={DATUM}/>
                </div>
                <div className={"filler"} />
                <img className={"arrow"} src = {arrow} alt="My Happy SVG"/>
            </div>
            <div>
                <div id="schema"><Timeline/></div>
                <div id="about"><About/></div>
                <div id="history"><History/></div>
                <div id="companyInfo"><CompanyInfo/></div>
                <div id="linktree"><Linky/></div>
                <footer className="App-footer">
                    <p>Kontakt: <a href="mailto:info@djubileet.se" className="App-schedule-link">info@djubileet.se</a></p>
                    <p className="name">Skapad av: FIPL Consulting</p>
                </footer>
            </div>
        </div>
    );
}

export default Home;

