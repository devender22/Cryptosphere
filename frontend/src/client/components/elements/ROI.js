import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";

function ROI() {
  const [goldTDay, setGoldTDay] = useState(0);
  const [spxTDay, setSpxTDay] = useState(0);
  const [btcTDay, setBTCTDay] = useState(0);
  const [goldPDay, setGoldPDay] = useState(0);
  const [spxPDay, setSpxPDay] = useState(0);
  const [btcPDay, setBTCPDay] = useState(0);
  const [goldWeek, setGoldWeek] = useState(0);
  const [spxWeek, setSpxWeek] = useState(0);
  const [btcWeek, setBTCWeek] = useState(0);
  const [goldMonth, setGoldMonth] = useState(0);
  const [spxMonth, setSpxMonth] = useState(0);
  const [btcMonth, setBTCMonth] = useState(0);

  let buttonStyle = {
    "background-color": "#27c499",
    border: "1px solid #27c499",
    width: "200px",
  };
  let weightStyle = { fontWeight: "bold" };

  function getData() {
    const url = "http://localhost:5000/other-securities";
    axios
      .get(url)
      .then((response) => {
        let obj = response.data["data"];

        let count = 1;
        let idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["Gold"] !== null) {
            setGoldTDay(obj[idx]["Gold"]);
            count--;
          }

          idx--;
        }

        //--------------
        count = 1;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["SPX_Index"] !== null) {
            setSpxTDay(obj[idx]["SPX_Index"]);
            count--;
          }

          idx--;
        }
        //-------------
        count = 1;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["BTC"] !== null) {
            setBTCTDay(obj[idx]["BTC"]);
            count--;
          }

          idx--;
        }

        //-------//---------

        count = 2;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["Gold"] !== null) {
            setGoldPDay(obj[idx]["Gold"]);
            count--;
          }

          idx--;
        }

        //--------------
        count = 2;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["SPX_Index"] !== null) {
            setSpxPDay(obj[idx]["SPX_Index"]);
            count--;
          }

          idx--;
        }
        //-------------
        count = 2;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["BTC"] !== null) {
            setBTCPDay(obj[idx]["BTC"]);
            count--;
          }

          idx--;
        }

        count = 7;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["Gold"] !== null) {
            setGoldWeek(obj[idx]["Gold"]);
            count--;
          }

          idx--;
        }

        //--------------
        count = 7;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["SPX_Index"] !== null) {
            setSpxWeek(obj[idx]["SPX_Index"]);
            count--;
          }

          idx--;
        }
        //-------------
        count = 7;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["BTC"] !== null) {
            setBTCWeek(obj[idx]["BTC"]);
            count--;
          }

          idx--;
        }

        count = 30;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["Gold"] !== null) {
            setGoldMonth(obj[idx]["Gold"]);
            count--;
          }

          idx--;
        }

        //--------------
        count = 30;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["SPX_Index"] !== null) {
            setSpxMonth(obj[idx]["SPX_Index"]);
            count--;
          }

          idx--;
        }
        //-------------
        count = 30;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["BTC"] !== null) {
            setBTCMonth(obj[idx]["BTC"]);
            count--;
          }

          idx--;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(getData, []);

  return (
    <div className="overview-box" style={{ height: "280px" }}>
      <div className="box-heading">ETH Return of Investment (in %)</div>
      <div style={{ padding: "20px" }}>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>v/s BTC</th>
                <th>v/s SPX Index</th>
                <th>v/s Gold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1 D</th>
                <td>{(((btcPDay - btcTDay) * 100) / btcPDay).toFixed(3)}</td>
                <td>{(((spxPDay - spxTDay) * 100) / spxPDay).toFixed(3)}</td>
                <td>{(((goldPDay - goldTDay) * 100) / goldPDay).toFixed(3)}</td>
              </tr>
              <tr>
                <th>1 W</th>
                <td>{(((btcWeek - btcTDay) * 100) / btcWeek).toFixed(3)}</td>
                <td>{(((spxWeek - spxTDay) * 100) / spxWeek).toFixed(3)}</td>
                <td>{(((goldWeek - goldTDay) * 100) / goldWeek).toFixed(3)}</td>
              </tr>
              <tr>
                <th>1 M</th>
                <td>{(((btcMonth - btcTDay) * 100) / btcMonth).toFixed(3)}</td>
                <td>{(((spxMonth - spxTDay) * 100) / spxMonth).toFixed(3)}</td>
                <td>
                  {(((goldMonth - goldTDay) * 100) / goldMonth).toFixed(3)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ROI;
