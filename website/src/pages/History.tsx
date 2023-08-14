import React, {useState}  from "react";

function History() {
    const [hide, setHide] = useState(true);

    return (
        <div className={"App-about"}>
            <h1 className={"title"}>Datasektionens Historia</h1>
            <p>
                Den 7 oktober 1983 bildades Konglig Datasektionen i och med att de första sextio datateknologerna höll det första sektionsmötet. Ur protokollet kan man notera att bland de saker som diskuterades fanns sektionens färg, symbol och maskot. Intressant är att den färg som länge diskuterades var brunt, denna färg ansågs dock alltför förknippad med en viss annan rörelse som hade sin storhetstid under 40-talet nere på kontinenten. Khaki hann också bli nedröstat innan sektionen till slut kunde enas om att cerise var den absolut käckaste färgen man kunde ha på overallerna. Sektionens symbol blev först lilla frakturdeltat, men den ändrades till lilla deltat då man insåg att frakturdelta inte är någonting som existerar i sinnevärlden. Någonting som tyvärr fallit i glömska är att sektionen även fick en maskot, lusen.</p>

            <div hidden={!hide}>
                <button className={"expand-button"} onClick={() => setHide(!hide)}>Visa Mer...</button>
                <br/><br/>
            </div>
        </div>
    );
}

export default History;