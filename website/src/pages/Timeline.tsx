import React from 'react';
import '../css/App.css';
import EventEntry from "../components/EventEntry";

const Timeline = () => {
    return (
        <div className="App-schedule">
            <h1 className={"title"}>Event</h1>
            <div>
                <EventEntry
                    date={"19:e april"}
                    dateTime={new Date(2023, 4, 19)}
                    title={"Slutfesten - Biljettsläppspub"}
                    timeAndPlace={"17:17 META"}
                    fbLink={"https://www.facebook.com/events/6215077875251204"}
                    noTicket={true}
                    info={"Nu är det äntligen dags för biljettsläppet till sektionens största pang-boom-ouch fest och dJubileets (och sektionens) sista evenemang, nämligen slutfesten.<br/><br/>" +
                    "DKM och dJubileet har ingått en ohelig pakt och kommer styra upp en pub tillsammans! Sväng förbi på onsdag för en pub fylld med aliens, gamla märken och ett superduperultra viktigt biljettsläpp.<br/><br/>" +
                    "Formuläret för biljettsläppet öppnas klockan 20:00. Länken till formuläret kan ni hitta längre ner på sidan.<br/><br/>" +
                    "Biljetterna kommer att lottas ut mellan alla som svarar på formuläret inom en timme."}
                />
                <hr/>
                <EventEntry
                    date={"29:e april"}
                    dateTime={new Date(2023, 4, 29)}
                    title={"Halvårsfesten"}
                    timeAndPlace={"18:00 META"}
                    fbLink={"https://www.facebook.com/events/6315168058496407"}
                    ticketLink={"https://hf.djubileet.se/"}
                    interestLink={"https://dsekt.se/reservlista-hf"}
                    ticketSoldOut={true}
                    info={"Orkar du inte vänta ända tills hösten när dJubileumsveckorna startar? Då har du riktigt tur att halvårsfesten har anlänt!<br/><br/>" +
                    "Men vad är en halv?<br/>" +
                    "En halv är det irreducibla bråk som ges genom att dela ett med två (½), eller ett valfritt tal med ett annat tal av det dubbla värdet.<br/><br/>" +
                    "Men vad är ett år?<br/>" +
                    "Ett år är tiden det tar för planeten Terra (även känt som jorden i mindre sofistikerade kontext) att åka ett helt varv runt Sol (även känt som solen i mindre sofistikerade kontext).<br/><br/>" +
                    "Och vad är då en fest?<br/>" +
                    "En fest, även känd som en festlighet, kalas eller galej, är ett högtidligt socialt evenemang med fler än en deltagare.<br/><br/>" +
                    "dJubileet bjuder in dig på en utomjordlig kväll för att fira att det bara är ett halvt år kvar tills självaste Konglig Datasektionen fyller 40 år. Var redo för mat, dricka, vänner och kanske till och med ett besök av självaste Alien Albin och hans vänner.<br/><br/>" +
                    "<br/><br/>Biljettsläpp kommer ske den 22 mars klockan 19:30!"}
                />
                <hr/>
                <EventEntry
                    date={"25:e - 26:e september"}
                    dateTime={new Date(2023, 9, 26)}
                    title={"TBA"}
                />
                <hr/>
                <EventEntry
                    title={"XXL-Pub feat. DKM"}
                    date={"27:e september"}
                    dateTime={new Date(2023, 9, 27)}
                    timeAndPlace={"17:17 META"}
                    noTicket={true}
                    info={"Årets aboslut fetaste pub, mitt i jubileumsveckan! Flera barer, grymma drinkar och en hel del annat. Det här är en pub man inte vill missa!"}
                />
                <hr/>
                <EventEntry
                    date={"28:e - 29:e september"}
                    dateTime={new Date(2023, 9, 29)}
                    title={"TBA"}
                />
                <hr/>
                <EventEntry
                    date={"30:e september"}
                    dateTime={new Date(2023, 9, 30)}
                    title={"Banquetten"}
                    fbLink={"https://www.dsekt.se/djub-banquette-web"}
                    timeAndPlace={"Münchenbryggeriet"}
                    ticketUnreleased={false}
                    ticketSoldOut={false}
                    ticketLink={"https://banquette.djubileet.se/"}
                    //interestLink={"https://dsekt.se/reservlista-banquette"}

                    info={"Tiden är äntligen kommen för Konglig Datasektionen att fira sin 40-årsdag.<br/> I år kommer detta firande pågå under två hela veckor, inklusive en banquette i världsklass den 30:e september.<br/><br/>" +
                    "dJubileumsbanquetten kommer såklart inkludera allt som förväntas av en vanlig banquette men det sker med lite mer högtidlighet och mycket mer nöje.<br/><br/>" +
                    "På banquetten går datalogernas firande till sin topp, de sjunger finare, de äter godare, de dricker dyrare och som ett resultat ser de även snyggare ut.<br/><br/>" +
                    "Det kommer att bli en sittning som ingen datalog med sinne någonsin skulle vilja missa. Så leta rätt på schmecken, kemtvätta frackvästen, och smörj in stämbanden så ses vi på dansgolvet!<br/><br/>" +
                    "Första omgången biljetter har sålt slut, men fler biljetter kommer att släppas på länken ovan, tisdag den 20/6, kl 20:00."}
 		 />
                <hr/>
                <EventEntry
                    title={"TBA"}
                    dateTime={new Date(2023, 9, 6)}
                    date={"2:a – 6:e oktober"}
                />
                <hr/>
                <EventEntry
                    date={"14:e oktober"}
                    dateTime={new Date(2023, 10, 14)}
                    title={"Slutfesten"}
                    fbLink={"https://www.dsekt.se/djub-slutfest-web"}

                    timeAndPlace={"Nymble"}
                    info={"Efter att vi har uppmärksammat sektionens 40-årsdag i två hela veckor, så ser vi på slutfesten till att allting slutar med en ordentlig smäll!<br/><br/>" +
  	"dJubileets slutfest är utan tvekan en av de största händelserna på hela året, och är det bästa tillfället sektionen har att erbjuda för gamla och nya kursare att lära känna varandra.<br/><br/>" + "Exakt vad som kommer hända under kvällen är fortfarande hemligstämplat av nöjesanledningar, men en sak är säker. Det kommer bli en kväll som är svår att överträffa – åtminstone tills det att sektionen fyller 45 år!<br/><br/>" +
"Glöm inte att dricka varannan vatten, undvika att vakna i skogen, och att ha en riktigt rolig kväll!<br/><br/>" + "Tagga till så ses vi på slutfesten!<br/></br>" + "Biljettsläpp kommer ske den 19/4 klockan 20:00!"}
ticketLink={"https://dsekt.se/biljetter-slutfest"}
  			  />
            </div>
        </div>
    );
  };
    
  export default Timeline;
