import React from 'react';
import '../css/App.css';
import EventEntry from "../components/EventEntry";
import vermiculus from "../img/vermiculus.png"
import fra from "../img/FRA.png"
import af from "../img/af.png"
import sab from "../img/saab.png"

const Timeline = () => {
    return (
        <div className="App-schedule">
            <h1 className={"title"}>Event</h1>
            <div>
                <EventEntry
                    date={"19 april"}
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
                    date={"29 april"}
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
                    date={"25 september"}
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
                    date={"26 september"}
                    dateTime={new Date(2023, 9, 26)}
                    title={"Lunchföreläsning: Var det bättre förr?"}
                    timeAndPlace={"12:00 TBD"}
                    noTicket={false}
                    ticketLink={"https://forms.gle/SVt11Po6RpvctkSX8"}
                    fbLink={"https://www.facebook.com/events/794051115793339"}
                    info={"På Lunchföreläsning: Var det bättre förr? så kommer vi att bjuda in två av våra hedersmedlemmar. Nämligen den gamle programmansvarige Stefan Arnborg och den gamle kanslichefen Inger Larsson för att berätta om både roliga och kusliga händelser i Datateknikprogrammets långa historia. Fyll i formuläret om du vill ha lunch, det öppnar 13 september kl 13:37"}
                />
                <hr/>
                <EventEntry
                    date={"26 september"}
                    dateTime={new Date(2023, 9, 26)}
                    title={"METAhäng: Pysselstuga och märkestävling"}
                    timeAndPlace={"17:00 META"}
                    noTicket={true}
                    info={"Kom och häng i META! Vi kommer att ha pysselstuga där ni får skapa coola dekorationer till dJubileet. Dels kan ni få göra dekorationer till slutfesten, men vi kommer även ha en dJu(be)lgran i META som sjävklart behöver pynt! Är man inte mycket för pyssel kommer det att finnas brädspel och en MÄRKESTÄVLING! Finns det nåt coolt märke du drömmer om att ha på ovven? Kom och rita det! Vinnande märket kommer att beställas och kan sedan köpas av Prylis."}
                    fbLink={"https://www.facebook.com/events/1657990151330779/"}
                />
                <hr/>
                <EventEntry
                    title={"Onsdagspub XL feat. DKM"}
                    date={"27 september"}
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
                    title={"Lunchföreläsning med FRA"}
                    date={"28 september"}
                    dateTime={new Date(2023, 9, 28)}
                    timeAndPlace={"12:00 TBD"}
                    noTicket={false}
                    info={"Hur är det att arbeta med teknikutveckling på en av Sveriges hemligaste myndigheter?<br/><br/>" +
                    "FRA är en alldeles vanlig arbetsplats - men ändå helt unik.<br/>" +
                    "FRA arbetar med signalspaning och cybersäkerhet. Vi är en civil myndighet sin utgör en del av Sveriges underrättelsetjänst. Myndigheten bidrar till att skydda Sverige och svenska intressen genom att leverera unik information om viktiga utländska förhållanden till våra uppdragsgivare.<br/>" +
                    "Den tekniska avdelningen på FRA tar fram många av de lösningar som behövs för att kunna bedriva vår verksamhet. Mycket av det vi behöver går inte att hitta någon annanstans - den tekniska spännvidden hos oss sträcker sig från normal IT-drift till avancerad signalbehandling och superdatorer.<br/>" +
                    "Vi är just nu inne i en expansiv fas, FRA växer och kommer att fortsätta göra det under de kommande åren. Det gör att även teknikavdelningen växer och vi letar därför efter dig som vill jobba hos oss.<br/><br/>" +
                    "Kom så bjuder vi på mat och berättar mer om hur arbetet på den tekniska avdelningen hos en av Sveriges hemligaste myndigheter fungerar."}
                    fbLink={"https://www.facebook.com/events/611799241100312/"}
                    ticketLink={"https://forms.gle/K8zKfqZLvFhbksAn6"}
                    ticketText={"Sign-up"}
                    image={fra}
                />
                <hr/>
                <EventEntry
                    title={"Bio på campus"}
                    date={"28 september"}
                    dateTime={new Date(2023, 9, 28)}
                    timeAndPlace={"17:00 TBD"}
                    temporaryText="Sign-up kommer senare" 
                    noTicket={false}
                    info={"Vem älskar inte en biokväll? Koppla av efter plugget med en riktigt grym rulle från 80-talet! Det blir dessutom en double feature-visning med en film om någon jämngammal med sektionen! QN och dJubileet kommer att bjuda på popcorn i äkta bio-anda."}
                    fbLink={"https://www.facebook.com/events/200407242835404/"}
                />
                <hr/>
                <EventEntry
                    title={"Sektionshistoriaföreläsning och Sångarafton"}
                    date={"29 september"}
                    dateTime={new Date(2023, 9, 28)}
                    timeAndPlace={"17:00 META"}
                    noTicket={false}
                    info={"Kom och få en inblick i sektionens förflutna och öva upp sångrösten inför banquetten! Denna kväll bjuder på en föreläsning som hålls av Sektionshistoriker och man får dessutom gratis käk! Vi avslutar kvällen med sångarafton tillsammans med Sångledare och Scala."}
                    alcoholEvent={true}
                    ticketLink={"https://forms.gle/WS75yp4VWvtC4iEC6"}
                    fbLink={"https://www.facebook.com/events/622134180055778/"}
                />
                <hr/>
                <EventEntry
                    date={"30 september"}
                    dateTime={new Date(2023, 9, 30)}
                    title={"Banquetten"}
                    fbLink={"https://www.dsekt.se/djub-banquette-web"}
                    timeAndPlace={"Münchenbryggeriet"}
                    ticketUnreleased={false}
                    ticketSoldOut={false}
                    ticketLink={"https://banquette.djubileet.se/"}
                    //interestLink={"https://dsekt.se/reservlista-banquette"}

                    info={"Tiden är äntligen kommen för Konglig Datasektionen att fira sin 40-årsdag.<br/> I år kommer detta firande pågå under två hela veckor, inklusive en banquette i världsklass den 30 september.<br/><br/>" +
                    "dJubileumsbanquetten kommer såklart inkludera allt som förväntas av en vanlig banquette men det sker med lite mer högtidlighet och mycket mer nöje.<br/><br/>" +
                    "På banquetten går datalogernas firande till sin topp, de sjunger finare, de äter godare, de dricker dyrare och som ett resultat ser de även snyggare ut.<br/><br/>" +
                    "Det kommer att bli en sittning som ingen datalog med sinne någonsin skulle vilja missa. Så leta rätt på schmecken, kemtvätta frackvästen, och smörj in stämbanden så ses vi på dansgolvet!<br/><br/>"
                    }
                    alcoholEvent={true}
 		 />
                <hr/>
                <EventEntry
                    title={"Pluggstuga med Studienämnden"}
                    date={"2 oktober"}
                    dateTime={new Date(2023, 10, 2)}
                    timeAndPlace={"17:00 META"}
                    noTicket={true}
                    info={"Efter en vecka fullspäckad med roliga aktiviteter är det dags att ta igen plugget lite. Självklart kommer Studienämnden till undsättning och håller i en pluggstuga! Kom fikasugen, det kommer finnas gott om fika så att ni orkar plugga hela kvällen. Ni ska ju ändå klara av att ha kul en vecka till!"}
                    fbLink={"https://www.facebook.com/events/316458484127548/"}
                />
                <hr/>
                <EventEntry
                    title={"METAhäng: DESCathon"}
                    date={"3 oktober"}
                    dateTime={new Date(2023, 10, 3)}
                    timeAndPlace={"17:00 META"}
                    noTicket={true}
                    fbLink={"https://www.facebook.com/events/295533949843241"}
                    info={"Kom och häng i META! Under det här METAhänget så kommer DESC att anordna ett (för tillfället) hemligt event som vi lovar att ni inte vill missa! Ni kommer såklart utöver det spela brädspel, hänga med folk, och fortsätta att klä dJu(be)lgranen. Förvänta er en spontan timme av Ultima Online!"}
                />
                <hr/>
                <EventEntry
                    title={"Företagspub med Vermiculus"}
                    date={"4 oktober"}
                    dateTime={new Date(2023, 10, 4)}
                    timeAndPlace={"17:17 META"}
                    noTicket={true}
                    image={vermiculus}
                    imageTopMargin={-65}
                    info={"Vad är bättre än en pub? Jo en företagspub!<br/><br/> " +
                    "Vermiculus bygger revolutionerande system åt världens börser, clearinghus och värdepapperscentraler. Med sin innovativa och avancerade trading-, clearing- och CSD-teknik har fintech-bolaget tagit världens finansmarknader med storm och kommer nu tillsammans med NLG och DKM att hålla i årets första företagspub! \n" +
                    "Kom och häng med Vermiculus som bjuder på god mat, drinkbiljetter och ett exklusivt märke till den som beställer Vermiculus egna drink i baren!\n"}
                    alcoholEvent={true}
                />
                <hr/>
                <EventEntry
                    title={"TBD *Inställt pga regn*"}
                    date={"5 oktober"}
                    dateTime={new Date(2023, 10, 5)}
                    timeAndPlace={"TBD"}
                    info={"Vila upp er"}
                    //info={"Kom och få en inblick i sektionens förflutna och öva upp sångrösten inför banquetten! Denna kväll bjuder på en föreläsning som hålls av Sektionshistoriker och man får dessutom gratis käk! Vi avslutar kvällen med sångarafton tillsammans med Sångledare och Scala."}
                />
                <hr/>
                <EventEntry
                    title={"Spextakulär Karaokepub: Födelsedagsfest – Kom och Fira!"}
                    date={"6 oktober"}
                    dateTime={new Date(2023, 10, 6)}
                    timeAndPlace={"17:17 META"}
                    noTicket={true}
                    info={"Sång + öl, kan det bli bättre? METAspexet kommer att bjuda på liveunderhållning och Ada tillsammans med Project Pride dammar av karaokemaskinen. Kom och sjung för glatta livet! Om du inte är en sångfågel - kom och häng och lyssna på när andra sjunger!<br/><br/>" +
                "Självklart kommer vi vid tolvslaget fira att sektionen fyller 40. Det kommer hända en väldigt väldigt väldigt väldigt häftig grej så missa inte detta."}
                    alcoholEvent={true}
                    fbLink={"https://www.facebook.com/events/315102227643405/"}
                />
                <hr/>
                <EventEntry
                    title={"Sektionen fyller 40!"}
                    date={"7 oktober"}
                    dateTime={new Date(2023, 10, 7)}
                    info={"Den 7 oktober fyller sektionen officiellt 40 år. Hurra! Hurra! Hurra! <br/> <br/> Vi har inget event denna dag."}
                    alcoholEvent={false}
                />
                <hr/>
                <EventEntry
                    title={"Lunchföreläsning med SAAB"}
                    date={"9 oktober"}
                    dateTime={new Date(2023, 10, 9)}
                    timeAndPlace={"12:00 TBD"}
                    noTicket={false}
                    temporaryText="Sign-up kommer senare" 
                    info={"Ni kommer att bjudas på lunch och få träffa supertrevliga företagsrepresentanter."}
                    image={sab}
                />
                <hr/>
                <EventEntry
                    title={"Lunchföreläsning med Arbetsförmedlingen"}
                    date={"10 oktober"}
                    dateTime={new Date(2023, 10, 9)}
                    timeAndPlace={"12:00 TBD"}
                    noTicket={false}
                    temporaryText="Sign-up kommer senare" 
                    info={"Ni kommer att bjudas på lunch och få träffa supertrevliga företagsrepresentanter."}
                    image={af}
                />
                <hr/>
                <EventEntry
                    title={"D-Dagen"}
                    date={"12 oktober"}
                    dateTime={new Date(2023, 10, 12)}
                    timeAndPlace={"Sent på kvällen"}
                    info={"Men hallå, D-Dagen är ju inte ett dJubileumsevent?! Jo, för i år vill vi välkomna alumner till efterköret! D-Dagen kommer att bjuda in en live-artist till efterköret, så det blir en kväll utöver det vanliga! Förvänta er barbongar, bra musik och cerise flugor."}
                    alcoholEvent={true}
                    fbLink={"https://www.facebook.com/kongligddagen"}
                />
                <hr/>
                <EventEntry
                    date={"14 oktober"}
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
