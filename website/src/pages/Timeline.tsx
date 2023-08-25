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
                    alcoholEvent={true}
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
                    alcoholEvent={true}
                />
                <hr/>
                <EventEntry
                    date={"25:e september"}
                    dateTime={new Date(2023, 9, 25)}
                    title={"Syplunta med Färgfemman"}
                    timeAndPlace={"17:00 META"}
                    noTicket={true}
                    info={"Färgfemman är tillbaka! Kom och ta en öl eller hälsa på Loket och vinn i Färgfemman! Förvänta er retro märken och sytävling. "}
                    alcoholEvent={true}
                    fbLink={"https://www.facebook.com/events/296431496304196/"}
                />
                <hr/>
                <EventEntry
                    date={"26:e september"}
                    dateTime={new Date(2023, 9, 26)}
                    title={"METAhäng: Pysselstuga och märkestävling"}
                    timeAndPlace={"17:00 META"}
                    noTicket={true}
                    info={"Kom och häng i META! Vi kommer att ha pysselstuga där ni får skapa coola dekorationer till dJubileet. Dels kan ni få göra dekorationer till slutfesten, men vi kommer även ha en dJu(be)lgran i META som sjävklart behöver pynt! Är man inte mycket för pyssel kommer det att finnas brädspel och en MÄRKESTÄVLING! Finns det nåt coolt märke du drömmer om att ha på ovven? Kom och rita det! Vinnande märket kommer att beställas och kan sedan köpas av Prylis."}
                    fbLink={"https://www.facebook.com/events/1657990151330779/"}
                />
                <hr/>
                <EventEntry
                    title={"XL-Pub feat. DKM"}
                    date={"27:e september"}
                    dateTime={new Date(2023, 9, 27)}
                    timeAndPlace={"17:17 META"}
                    noTicket={true}
                    info={"40 år av data betyder såklart också 40 år av DKM, och vilket bättre sätt finns det att fira det än en XL (40) pub?! Förvänta er uteservering och en galen kväll. "}
                    alcoholEvent={true}
                    //info={"Årets aboslut fetaste pub, mitt i jubileumsveckan! Flera barer, grymma drinkar och en hel del annat. Det här är en pub man inte vill missa!"}
                    fbLink={"https://www.facebook.com/events/2379115775592603/"}
                />
                <hr/>
                <EventEntry
                    title={"Lunchföreläsning"}
                    date={"28:e september"}
                    dateTime={new Date(2023, 9, 28)}
                    timeAndPlace={"12:00 TBA"}
                    noTicket={false}
                    temporaryText="Sign-up kommer senare" 
                    info={"Förvänta er gratis mat och supertrevliga företagsrepresentanter."}
                    fbLink={"https://www.facebook.com/events/611799241100312/"}
                />
                <hr/>
                <EventEntry
                    title={"Bio på campus"}
                    date={"28:e september"}
                    dateTime={new Date(2023, 9, 28)}
                    timeAndPlace={"17:00 TBA"}
                    temporaryText="Sign-up kommer senare" 
                    noTicket={false}
                    info={"Vem älskar inte en biokväll? Koppla av efter plugget med en riktigt grym rulle från 80-talet! Det blir dessutom en double feature-visning med en film om någon jämngammal med sektionen! QN och dJubileet kommer att bjuda på popcorn i äkta bio-anda."}
                    fbLink={"https://www.facebook.com/events/200407242835404/"}
                />
                <hr/>
                <EventEntry
                    title={"Sektionshistoriaföreläsning och Sångarafton"}
                    date={"28:e september"}
                    dateTime={new Date(2023, 9, 28)}
                    timeAndPlace={"17:00 TBA"}
                    noTicket={false}
                    temporaryText="Sign-up kommer senare" 
                    info={"Kom och få en inblick i sektionens förflutna och öva upp sångrösten inför banquetten! Denna kväll bjuder på en föreläsning som hålls av Sektionshistoriker och man får dessutom gratis käk! Vi avslutar kvällen med sångarafton tillsammans med Sångledare och Scala."}
                    alcoholEvent={true}
                    fbLink={"https://www.facebook.com/events/622134180055778/"}
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
                    "Det kommer att bli en sittning som ingen datalog med sinne någonsin skulle vilja missa. Så leta rätt på schmecken, kemtvätta frackvästen, och smörj in stämbanden så ses vi på dansgolvet!<br/><br/>"
                    }
                    alcoholEvent={true}
 		 />
                <hr/>
                <EventEntry
                    title={"Pluggstuga med Studienämnden"}
                    date={"2:a oktober"}
                    dateTime={new Date(2023, 10, 2)}
                    timeAndPlace={"17:00 TBA"}
                    noTicket={true}
                    info={"Efter en vecka fullspäckad med roliga aktiviteter är det dags att ta igen plugget lite. Självklart kommer Studienämnden till undsättning och håller i en pluggstuga! Kom fikasugen, det kommer finnas gott om fika så att ni orkar plugga hela kvällen. Ni ska ju ändå klara av att ha kul en vecka till!"}
                    fbLink={"https://www.facebook.com/events/316458484127548/"}
                />
                <hr/>
                <EventEntry
                    title={"METAhäng: TBA"}
                    date={"3:e oktober"}
                    dateTime={new Date(2023, 10, 3)}
                    timeAndPlace={"17:00 TBA"}
                    noTicket={true}
                    info={"TBD"}
                />
                <hr/>
                <EventEntry
                    title={"Företagspub"}
                    date={"4:e oktober"}
                    dateTime={new Date(2023, 10, 4)}
                    timeAndPlace={"17:17 TBA"}
                    noTicket={true}
                    info={"Ett företag kommer att besöka puben för att berätta mer om sig själva och bjuda på god mat och dryck!"}
                    alcoholEvent={true}
                />
                <hr/>
                <EventEntry
                    title={"TBA"}
                    date={"5:e oktober"}
                    dateTime={new Date(2023, 10, 5)}
                    timeAndPlace={"TBD"}
                    //info={"Kom och få en inblick i sektionens förflutna och öva upp sångrösten inför banquetten! Denna kväll bjuder på en föreläsning som hålls av Sektionshistoriker och man får dessutom gratis käk! Vi avslutar kvällen med sångarafton tillsammans med Sångledare och Scala."}
                />
                <hr/>
                <EventEntry
                    title={"Spextakulär karaokepub"}
                    date={"6:e oktober"}
                    dateTime={new Date(2023, 10, 6)}
                    timeAndPlace={"17:17 TBA"}
                    noTicket={true}
                    info={"Sång + öl, kan det bli bättre? METAspexet kommer att bjuda på liveunderhållning och Ada tillsammans med Project Pride dammar av karaokemaskinen. Kom och sjung för glatta livet! Om du inte är en sångfågel - kom och häng och lyssna på när andra sjunger!"}
                    alcoholEvent={true}
                    fbLink={"https://www.facebook.com/events/315102227643405/"}
                />
                <hr/>
                <EventEntry
                    title={"Födelsedagskalas – sektionen fyller 40!"}
                    date={"7:e oktober"}
                    dateTime={new Date(2023, 10, 7)}
                    timeAndPlace={"13:37"}
                    noTicket={true}
                    info={"Kom och fira sektionens födelsedag! Den 7 oktober fyller sektionen officiellt 40 år och vi kommer att ha ett riktigt födelsedagskalas med tårta och allt vad det hör till. Hurra! Hurra! Hurra!"}
                    alcoholEvent={false}
                    fbLink={"https://www.facebook.com/events/669348288135145/"}
                />
                <hr/>
                <EventEntry
                    title={"Lunchföreläsning"}
                    date={"9:e oktober"}
                    dateTime={new Date(2023, 10, 9)}
                    timeAndPlace={"12:00"}
                    noTicket={false}
                    temporaryText="Sign-up kommer senare" 
                    info={"Ni kommer att bjudas på lunch och få träffa supertrevliga företagsrepresentanter."}
                />
                <hr/>
                <EventEntry
                    title={"D-Dagen setup"}
                    date={"11:e oktober"}
                    dateTime={new Date(2023, 10, 11)}
                    timeAndPlace={"Nymble"}
                    info={"Gör er plikt! Hjälp sektionen arrangera den största D-Dagen någonsin."}
                    alcoholEvent={false}
                />
                <hr/>
                <EventEntry
                    title={"D-Dagen"}
                    date={"12:e oktober"}
                    dateTime={new Date(2023, 10, 12)}
                    timeAndPlace={"Sent på kvällen"}
                    info={"Men hallå, D-Dagen är ju inte ett dJubileumsevent?! Jo, för i år vill vi välkomna alumner till efterköret! D-Dagen kommer att bjuda in en live-artist till efterköret, så det blir en kväll utöver det vanliga! Förvänta er barbongar, bra musik och cerise flugor."}
                    alcoholEvent={true}
                    fbLink={"https://www.facebook.com/kongligddagen"}
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
"Glöm inte att dricka varannan vatten, undvika att vakna i skogen, och att ha en riktigt rolig kväll!<br/><br/>" + "Tagga till så ses vi på slutfesten!<br/></br>"}
                    ticketLink={"https://dsekt.se/biljetter-slutfest"}
                    alcoholEvent={true}
  			  />
            </div>
        </div>
    );
  };
    
  export default Timeline;
