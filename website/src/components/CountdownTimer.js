import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import DateTimeDisplay from './DateTimeDisplay';

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div>
        <a>
          <p className={"countdown-title"}>Nästa dJubileum börjar om:</p>
          <table className="time">
            <tr>
              <td className="number"><DateTimeDisplay value={days}/></td>
              <td className="number"><DateTimeDisplay value={hours}/></td>
              <td className="number"><DateTimeDisplay value={minutes}/></td>
              <td className="number"><DateTimeDisplay value={seconds}/></td>
            </tr>
            <tr>
              <td className="textdate">Dagar</td>
              <td className="textdate">Timmar</td>
              <td className="textdate">Minuter</td>
              <td className="textdate">Sekunder</td>
            </tr>
          </table>
        </a>
      </div>
    );
  };
    
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds === 0) {
    return (
        <ShowCounter
          days={0}
          hours={0}
          minutes={0}
          seconds={0}/>
      );
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;