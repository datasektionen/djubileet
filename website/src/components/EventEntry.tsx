import React, {useState} from "react";

function EventEntry({date, title, timeAndPlace = "", fbLink = "", ticketLink = "", info = "", ticketUnreleased = false, ticketSoldOut = false, noTicket = false} :
                        {date : string, title : string, timeAndPlace? : string, fbLink? : string, ticketLink? : string, info? : string, ticketUnreleased? : boolean, ticketSoldOut? : boolean, noTicket? : boolean} ) {

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
                    <a href={ticketLink} target="_blank" onClick={(e) => e.stopPropagation()}  hidden={ticketLink === "" || ticketUnreleased || ticketSoldOut} >
                        Biljetter
                    </a>
                    <a className={"disabled-link"} hidden={!ticketUnreleased} >
                        Biljetter (Kommer)
                    </a>
                    <a className={"disabled-link"} hidden={!ticketSoldOut} >
                        Slutsålt
                    </a>
                    <span hidden={!noTicket}>Ingen biljett behövs!</span>
                    <a href={fbLink} target="_blank" onClick={(e) => e.stopPropagation()} hidden={fbLink === ""}>
                        Facebook
                    </a>
                </div>
            </td>

            <div hidden={!expanded} className={"event-additional-info"} dangerouslySetInnerHTML={{__html: info===""?"Mer info Kommer!":info}}>
            </div>
        </div>
    );
}

export default EventEntry;