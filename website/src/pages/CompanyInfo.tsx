import React from "react";

function CompanyInfo() {
    return (
        <div className={"App-about"}>
            <h1 className={"title"}>För Företag</h1>
            <p> Är ert företag intresserat av att sponsra Datasektionens största event? Kika på vår produktkatalog som ni hittar på länken nedan och maila oss vid intresse eller frågor!</p>
            <a className={"download-link"} href={"https://drive.google.com/u/0/uc?id=1uebbQCHH3YlEBNa8uC9BocTjPcvjloZI&export=download"}>Produktkatalog</a>
            <p> Har ni något annat förslag på samarbete? Skriv ett mail till oss så diskuterar vi det gärna!</p>
            <a className={"download-link"} href={"mailto: sales@djubileet.se"}>sales@djubileet.se</a>
            <p></p>
        </div>
    );
}

export default CompanyInfo;