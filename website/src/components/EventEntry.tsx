import React, {useState} from "react";

function EventEntry({date, title, timeAndPlace = "", fbLink = "", ticketLink = "", interestLink = "", info = "",
                        temporaryText = "", ticketText = "Biljetter", ticketUnreleased = false, ticketSoldOut = false, noTicket = false,
                        dateTime, alcoholEvent = false, image = "", imageTopMargin = 0, showIfPassed = true, showHR = true} :
                        {date : string, title : string, timeAndPlace? : string, fbLink? : string, ticketLink? : string, interestLink? : string, info? : string,
                            ticketUnreleased? : boolean, ticketSoldOut? : boolean, noTicket? : boolean, dateTime : Date,
                            alcoholEvent? : boolean, temporaryText? : string, ticketText? : string, image? : string, imageTopMargin? : number, showIfPassed? : boolean, showHR? : boolean} ) {

    const [expanded, setExpanded] = useState(false);


    const today = new Date();
    let hasHappened : boolean = !(dateTime.getFullYear() > today.getFullYear() ||
        (dateTime.getMonth() > today.getMonth() + 1 && dateTime.getFullYear() == today.getFullYear()) ||
        (dateTime.getDate() > today.getDate() - 1 && dateTime.getMonth() == today.getMonth() + 1 && dateTime.getFullYear() == today.getFullYear()));

    let imgStyle: React.CSSProperties = {
        marginTop: imageTopMargin,

    };

    if(image==""){
        imgStyle.display = "none";
    }

    return (
        <div hidden={hasHappened && !showIfPassed}>
        <div className={hasHappened?"disabled-event-row":"event-row"}  onClick={() => setExpanded(!expanded)}>
            <td className={"event-date"}>
                <table className={"event-date-row"}>
                    <tr className={"event-date-row"}>
                        <div className={"event-date-img"}>
                            <img hidden={image==""} src={image}/>
                        </div>
                        <td className={"event-date-info"}>
                            <p>{date}</p>
                            <div className={"event-date-line"}>
                                <p className={"event-date-sub"} hidden={timeAndPlace === ""}>{timeAndPlace}</p>
                                <p className={"serving-alcohol"} hidden={!alcoholEvent} title="På det här eventet kommer alkohol serveras">🥂</p>
                            </div>
                            <div className={"mobile-img"}>
                                <img hidden={image==""}  style={imgStyle} src={image}/>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
            <td  className={"event-info"}>
                <p className={"event-title"}>
                    {title}
                </p>
                <div>
                    {!(temporaryText === "" )?<span className={"App-schedule-link"}>
                        {temporaryText}
                    </span>:null}
                    {!(ticketLink === "" || ticketUnreleased || hasHappened)?<a className={"App-schedule-link"} href={ticketLink} target="_blank" onClick={(e) => e.stopPropagation()}>
                        {ticketSoldOut?ticketText+" (Slutsålt)":ticketText}
                    </a>:null}
                    {interestLink !== "" && !hasHappened?<a className={"App-schedule-link"} href={interestLink} target="_blank" onClick={(e) => e.stopPropagation()}>
                        Reservlista
                    </a>:null}
                    {ticketUnreleased && !hasHappened?<a className={"disabled-link"} >
                        Biljetter (Kommer)
                    </a>:null}
                    {noTicket?(<span>Ingen biljett behövs!</span>):null}
                    {fbLink !== ""?<a className={hasHappened?"disabled-App-schedule-link":"App-schedule-link"} href={fbLink} target="_blank" onClick={(e) => e.stopPropagation()} hidden={fbLink === ""}>
                        Facebook
                    </a>:null}
                    
                </div>
            </td>

            <div hidden={!expanded} className={"event-additional-info"} dangerouslySetInnerHTML={{__html: info===""?"Mer info kommer!":info}}>
            </div>
        </div>
            <hr hidden={!showHR}/>
        </div>
    );
}

export default EventEntry;