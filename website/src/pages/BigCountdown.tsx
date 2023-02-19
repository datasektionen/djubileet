import React from 'react';
import animatedLogo from '../img/AnimeradLogga.gif';
import stars from '../img/stars30.webp';
import '../BigCoundown.css';
import CountdownTimer from '../CountdownTimer';

function BigCountdown() {
    const DATUM = new Date("2023-09-24T23:00:00Z");

    return (
        <div className="Wrapper" >

            <img  src={animatedLogo} alt={"dJubileet Logo"} width={700} />

            <div className={"LargeCountdown"}>
                <CountdownTimer targetDate={DATUM}/>
            </div>
        </div>
    );
}

export default BigCountdown;

