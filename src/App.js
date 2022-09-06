import logo from "./logo.svg";
import "./App.css";
import firebase from "./Firebase/index";
import { useEffect, useState } from "react";
import { useMemo } from "react";

function App() {
  const [data, setData] = useState([]);
  const notiRef = firebase.database().ref("/Pavan1");

  // useMemo(() => {
  //   setInterval(() => {
  //     setData(data + 1000);
  //   }, 1000);
  // }, [data]);

  const fetchData = () => {
    notiRef.on("value", (snapshot) => {
      // console.log(snapshot.val());
      setData(snapshot.val());
    });
  };

  useEffect(() => {
    // notiRef.set({
    //   jenil: "hello",
    //   time: firebase.database.ServerValue.TIMESTAMP,
    // });

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="outsider"
      >
        {data.map((item, i) => (
          <div
           className="card flex"
            key={i}
          >
            <div className="grid">

            <div>Title: {item.title}</div>
            <div className="timer">Countdown: {item.countdown}</div>
            <div>Amount: {item.bid_amount}</div>
            <div>Price: {item.price}</div>
            <div>Start-date: {item.startdate}</div>
            <div>End-date: {item.enddate}</div>
          </div>
          <div>
            <button className="btn btn-primary">Bid now</button>
          </div>
            </div>
        ))}
        {/* Fix Time:{new Date(data).toUTCString()} */}
      </div>
      {/* <div
        style={{
          background: "pink",
          color: "#000",
          fontWeight: 600,
          padding: 15,
        }}
      >
        Increase by 10 Time:{new Date(data + 10000).toUTCString()}
      </div>
      <div
        style={{
          background: "pink",
          color: "#000",
          fontWeight: 600,
          padding: 15,
        }}
      >
        <Timer />
      </div> */}
    </div>
  );
}

export default App;

const Timer = () => {
  const [timer, setTimer] = useState(10);
  const [active, setActive] = useState(false);

  if (active) {
    setInterval(() => {
      if (timer >= 0) {
        setTimer(timer - 1);
      }
    }, 1000);
  }

  useEffect(() => {
    if (timer >= 0) setActive(false);
  }, [active, timer]);
  return (
    <div>
      <button onClick={() => setActive(true)}>{timer}</button>
    </div>
  );
};
