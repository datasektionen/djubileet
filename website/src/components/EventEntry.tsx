import React, {useState} from "react";

function EventEntry({date, title, timeAndPlace = "", fbLink = "", ticketLink = "", interestLink = "", info = "", ticketUnreleased = false, ticketSoldOut = false, noTicket = false} :
                        {date : string, title : string, timeAndPlace? : string, fbLink? : string, ticketLink? : string, interestLink? : string, info? : string, ticketUnreleased? : boolean, ticketSoldOut? : boolean, noTicket? : boolean} ) {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className={"event-row"} onClick={() => setExpanded(!expanded)}>
            <td className={"event-date"}>
                <p>{date}</p>
                <p className={"event-date-sub"} hidden={timeAndPlace === ""}>{timeAndPlace}</p>
            </td>
            <td  className={"event-info"}>
                <p className={"event-title"}>
                    {title}
                </p>
                <div>
                    {!(ticketLink === "" || ticketUnreleased)?<a className={"App-schedule-link"} href={ticketLink} target="_blank" onClick={(e) => e.stopPropagation()}>
                        {ticketSoldOut?"Biljetter (Slutsålt)":"Biljetter"}
                    </a>:null}
                    {interestLink !== ""?<a className={"App-schedule-link"} href={interestLink} target="_blank" onClick={(e) => e.stopPropagation()}>
                        Reservlista
                    </a>:null}
                    {ticketUnreleased?<a className={"disabled-link"} >
                        Biljetter (Kommer)
                    </a>:null}
                    {noTicket?(<span>Ingen biljett behövs!</span>):null}
                    {fbLink !== ""?<a className={"App-schedule-link"} href={fbLink} target="_blank" onClick={(e) => e.stopPropagation()} hidden={fbLink === ""}>
                        Facebook
                    </a>:null}
                </div>
            </td>

            <div hidden={!expanded} className={"event-additional-info"} dangerouslySetInnerHTML={{__html: info===""?"Mer info kommer!":info}}>
            </div>
        </div>
    );
}

export default EventEntry;