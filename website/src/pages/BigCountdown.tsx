import React from 'react';
import animatedLogo from '../img/AnimeradLogga.gif';
import '../css/BigCoundown.css';
import CountdownTimer from '../components/CountdownTimer';

function BigCountdown() {
    const DATUM = new Date("2028-10-14T15:00:00Z");

    return <>
        <video className="stars-bg" src={`${process.env.PUBLIC_URL}/stars30.webm`} autoPlay loop muted playsInline controls={false} />
        <div className="Wrapper">

            <img src={animatedLogo} alt={"dJubileet Logo"} width={700} />

            <div className={"LargeCountdown"}>
                <CountdownTimer targetDate={DATUM} />
            </div>
        </div>
    </>;
}

export default BigCountdown;

