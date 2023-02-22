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
                    info={"Om du, precis som dJubileumsstaben, inte kan vänta på dJubileet i höst är Halvårsfesten perfekt för dig!<br/><br/>" +
                    "Halvårsfesten är en fulsittning som kommer att fira att det bara är ett halvt år kvar tills att det är dags för det största firandet på datasektionen!<br/><br/>" +
                    "Mer information kommer snart!"}
                />
                <hr/>
                <EventEntry
                    date={"30:e September"}
                    title={"Banquetten"}
                    fbLink={"https://www.facebook.com/events/628294099057803"}
                    timeAndPlace={"Winterviken"}
                    ticketUnreleased={true}

                    info={"I höst uppmärksammar vi Datasektionens 40-årsdag i två hela veckor, och med banquetten ser vi till att starta firandet på topp! På banquetten drar vi upp allting ett snäpp från det vanliga – lokalen är lite större, maten är lite godare, vinet är lite dyrare, och gästerna är lite snyggare.<br/><br/>" +
                    "Precis som alla fester av rang kommer dJubileumsbanquetten erbjuda alla vanliga nöjen – sånger kommer sjungas, tal kommer talas, och med lite tur kanske den lyckligt lottade kan få tassarna på en medalj eller två.<br/><br/>" +
                    "Leta rätt på schmecken, kemtvätta frackvästen, och snygga till ögonfransarna så ses vi på dansgolvet!"}
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
                    info={"Årets aboslut fetaste pub, mitt i jubileumsveckan! Flera barer, grymma drinkar och en hel del annat. Det här är en pub man inte vill missa!"}
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
                    info={"Efter att vi har uppmärksammat sektionens 40-årsdag i två hela veckor, så ser vi på slutfesten till att allting slutar med en ordentlig smäll!<br/><br/>" +
                    "dJubileets slutfest är tveklöst en av de största händelserna på året, och är ett sällsynt tillfälle både att springa på gamla kursare och att bekanta sig med sektionens yngre medlemmar.<br/><br/>" +
                    "Exakt vad som kommer hända under kvällen håller vi för oss själva än så länge, men en sak är säker. det kommer bli en kväll som är svår att överträffa – åtminstone tills det att sektionen fyller 45 år!"}
                    ticketUnreleased={true}
                />
            </div>
        </div>
    );
  };
    
  export default Timeline;