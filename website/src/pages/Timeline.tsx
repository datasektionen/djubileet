import React from 'react';
import '../css/App.css';
import EventEntry from "../components/EventEntry";

const Timeline = () => {
    return (
        <div className="App-schedule">
            <h1 className={"title"}>Event</h1>
            <div>
                <EventEntry
                    date={"29:e April"}
                    title={"Halvårsfesten"}
                    timeAndPlace={"18:00 META"}
                    fbLink={"1"}
                    /*ticketUnreleased={true}*/ ticketLink={"123"}
                />
                <hr/>
                <EventEntry
                    date={"30:e September"}
                    title={"Banquetten"}
                    timeAndPlace={"Winterviken"}
                    ticketSoldOut={true}
                />
                <hr/>
                <EventEntry
                    title={"TBA"}
                    date={"2:a Oktober"}
                />
                <hr/>
                <EventEntry
                    title={"TBA"}
                    date={"3:e Oktober"}
                />
                <hr/>
                <EventEntry
                    title={"XXL-Pub feat. DKM"}
                    date={"4:e Oktober"}
                    timeAndPlace={"17:17 META"}
                    fbLink={"1"}
                    noTicket={true}
                />
                <hr/>
                <EventEntry
                    title={"TBA"}
                    date={"5:e Oktober"}
                />
                <hr/>
                <EventEntry
                    title={"TBA"}
                    date={"6:e Oktober"}
                />
                <hr/>
                <EventEntry
                    date={"7:e Oktober"}
                    title={"Slutfesten"}
                    timeAndPlace={"TBA"}
                    ticketUnreleased={true}
                />
            </div>
        </div>
    );
  };
    
  export default Timeline;