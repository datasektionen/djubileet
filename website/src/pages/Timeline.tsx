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
                    //fbLink={"1"}
                    ticketUnreleased={true}
                    //ticketLink={"123"}
                />
                <hr/>
                <EventEntry
                    date={"30:e September"}
                    title={"Banquetten"}
                    fbLink={"https://www.facebook.com/events/628294099057803"}
                    timeAndPlace={"Winterviken"}
                    ticketUnreleased={true}
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
                    fbLink={"https://www.facebook.com/events/2115230092199348"}
                    timeAndPlace={"TBA"}
                    info={"bla baneriu giubnqeior gbioqebnrg oierqhgn oiqerng ioqejrgn ioqkerjg nikqejgrtn qijtbrn iqrtbn iqijretbn ikqkretng bipqirtnhb äqrwt nbäwrlkt mbäwrltjkgn bwrktjb nkörjnh"}
                    ticketUnreleased={true}
                />
            </div>
        </div>
    );
  };
    
  export default Timeline;