import { useState, useEffect } from 'react'
import './App.css'
import { FaRegClock } from "react-icons/fa";

const formatText = (value:number, text:string) => {
  let plural:string, singular:string;
  switch(text) {
    case "day":
      plural = "days";
      singular = "day";
      break;
    case "hour":
      plural = "hours";
      singular = "hour";
      break;
    case "minute":
      plural = "minutes";
      singular = "minute";
      break;
    case "second":
      plural = "seconds";
      singular = "second";
      break;
    default:
      plural = "";
      singular = "";
  }
  if (value === 1) {
    return singular;
  }
  return plural;
}

const formatValue = (value:number) => {
  if (value < 10) {
    return `0${value}`
  }
  return `${value}`
}

function App() {
  const [days, setDays] = useState<number>(0)
  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)

  useEffect(() => {
    const holidayStartString = "2025-06-27T14:05:00.000Z"
    const holidayStart = new Date(holidayStartString)
  
  const timer = setInterval(() => {
    const now = new Date();
    const timeDiff = holidayStart.getTime() - now.getTime();
  
    if (timeDiff <= 0) {
        clearInterval(timer);
        console.log("Countdown complete!");
        return;
    }
  
    const d = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((timeDiff % (1000 * 60)) / 1000);

    setDays(d)
    setHours(h)
    setMinutes(m)
    setSeconds(s)
  
  }, 1000);
  }, [])
  return (
    <div className='app'>
      <header className="header">
        <nav>
          <a href="">Countdown</a>
          <a href="">Locations</a>
          <a href="">The Ship</a>
          <a href="">Itinerary</a>
          <a href="">Funds</a>
        </nav>
      </header>
      <section className='hero'>
        <h1 className='hero-heading'>Our next adventure begins in</h1>
        <div className="hero-timer">
          <div className="hero-timer-value">
            <h2 className='timer-number'>{formatValue(days)}</h2>
            <h2>{formatText(days, "day")}</h2>
          </div>
          <div className="hero-timer-value">
            <h2 className='timer-number'>{formatValue(hours)}</h2>
            <h2>{formatText(hours, "hour")}</h2>
          </div>
          <div className="hero-timer-value">
            <h2 className='timer-number'>{formatValue(minutes)}</h2>
            <h2>{formatText(minutes, "minute")}</h2>
          </div>
          <div className="hero-timer-value">
            <h2 className='timer-number'>{formatValue(seconds)}</h2>
            <h2>{formatText(seconds, "second")}</h2>
          </div>
        </div>
      </section>
      <section>
        <article className="destination barcelona">
          <div className="backdrop"></div>
          <div className="destination-text-container">
            <h2>Barcelona, Spain</h2>
            <h3>Two nights</h3>
          </div>
        </article>
        <article className='destination palma'>
          <div className="backdrop"></div>
          <div className="destination-text-container">
            <h2>Palma de Mallorca, Spain</h2>
            <h3>Half a day</h3>
          </div>
        </article>
        <article className='destination cannes'>
          <div className="backdrop"></div>
          <div className="destination-text-container">
            <h2>Cannes, France</h2>
            <h3>Half a day</h3>
          </div>
        </article>
        <article className='destination corsica'>
          <div className="backdrop"></div>
          <div className="destination-text-container">
            <h2>Corsica, France</h2>
            <h3>Half a day</h3>
          </div>
        </article>
        <article className='destination livorno'>
          <div className="backdrop"></div>
          <div className="destination-text-container">
            <h2>Livorno, Italy</h2>
            <h3>Full day</h3>
          </div>
        </article>
        <article className='destination rome'>
          <div className="backdrop"></div>
          <div className="destination-text-container">
            <h2>Rome, Italy</h2>
            <h3>Two nights</h3>
          </div>
        </article>
      </section>
      <section>
        <h2>The Scarlet Lady</h2>
        <p></p>
      </section>
    </div>
  )
}

export default App
