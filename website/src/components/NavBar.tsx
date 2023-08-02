import React from "react";

function NavBar() {
    const handleClickScroll = (id : string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
    <nav className="topnav">
        <button onClick={() => handleClickScroll("schema")}>Event</button>
        <button onClick={() => handleClickScroll("about")}>Om dJubileet</button>
        <button onClick={() => handleClickScroll("history")}>Historia</button>
        <button onClick={() => handleClickScroll("companyInfo")}>För Företag</button>
        <button onClick={() => handleClickScroll("linktree")}>Sociala Medier</button>
    </nav>
    );
}

export default NavBar;