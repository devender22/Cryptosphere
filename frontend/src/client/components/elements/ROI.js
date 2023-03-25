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
  const [gold, setGold] = useState({ M6: 0, Y1: 0, Y3: 0, Y5: 0 });
  const [spx, setSPX] = useState({ M6: 0, Y1: 0, Y3: 0, Y5: 0 });
  const [btc, setBTC] = useState({ M6: 0, Y1: 0, Y3: 0, Y5: 0 });

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
        console.log(obj.length)
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

        //-------
        count = 180;
        idx = obj.length - 1;
        while (count > 0 && idx > 0) {
          if (obj[idx]["Gold"] !== null) {
            setGold({ ...gold, M6: obj[idx]["Gold"] });
            count--;
          }

          idx--;
        }
        // console.log(obj[idx]);
        //--------------
        count = 180;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["SPX_Index"] !== null) {
            setSPX({ ...spx, M6: obj[idx]["SPX_Index"] });
            count--;
          }

          idx--;
        }
        // console.log(obj[idx]);
        //-------------
        count = 180;
        idx = obj.length - 1;
        while (count > 0) {
          if (obj[idx]["BTC"] !== null) {
            setBTC({ ...btc, M6: obj[idx]["BTC"] });
            count--;
          }

          idx--;
        }
        // console.log(obj[idx]);
        // console.log(btc);
        // console.log(gold);
        // console.log(btc);
        //-------
        // count = 360;
        // idx = obj.length - 1;
        // while (count > 0) {
        //   if (obj[idx]["Gold"] !== null) {
        //     setGold({ ...gold, Y1: obj[idx]["Gold"] });
        //     count--;
        //   }

        //   idx--;
        // }

        // //--------------
        // count = 360;
        // idx = obj.length - 1;
        // while (count > 0) {
        //   if (obj[idx]["SPX_Index"] !== null) {
        //     setSPX({ ...spx, Y1: obj[idx]["SPX_Index"] });
        //     count--;
        //   }

        //   idx--;
        // }
        // //-------------
        // count = 360;
        // idx = obj.length - 1;
        // while (count > 0) {
        //   if (obj[idx]["BTC"] !== null) {
        //     setBTC({ ...btc, Y1: obj[idx]["BTC"] });
        //     count--;
        //   }

        //   idx--;
        // }

        // console.log(btc);
        // console.log(gold);
        // console.log(btc);
        //-------
        // count = 1080;
        // idx = obj.length - 1;
        // while (count > 0 ) {
        //   if (obj[idx]["Gold"] !== null) {
        //     setGold({...gold,Y3:obj[idx]["Gold"]});
        //     count--;
        //   }

        //   idx--;
        // }

        // //--------------
        // count = 1080;
        // idx = obj.length - 1;
        // while (count > 0 ) {
        //   if (obj[idx]["SPX_Index"] !== null) {
        //     setSPX({...spx,Y3:obj[idx]["SPX_Index"]});
        //     count--;
        //   }

        //   idx--;
        // }
        // //-------------
        // count = 1080;
        // idx = obj.length - 1;
        // while (count > 0) {
        //   if (obj[idx]["BTC"] !== null) {
        //     setBTC({...btc,Y3:obj[idx]["BTC"]});
        //     count--;
        //   }

        //   idx--;
        // }

        // //-------
        // count = 1800;
        // idx = obj.length - 1;
        // while (count > 0) {
        //   if (obj[idx]["Gold"] !== null) {
        //     setGold({...gold,Y5:obj[idx]["Gold"]});
        //     count--;
        //   }

        //   idx--;
        // }

        // //--------------
        // count = 1800;
        // idx = obj.length - 1;
        // while (count > 0) {
        //   if (obj[idx]["SPX_Index"] !== null) {
        //     setSPX({...spx,Y5:obj[idx]["SPX_Index"]});
        //     count--;
        //   }

        //   idx--;
        // }
        // //-------------
        // count = 1800;
        // idx = obj.length - 1;
        // while (count > 0) {
        //   if (obj[idx]["BTC"] !== null) {
        //     setBTC({...btc,Y5:obj[idx]["BTC"]});
        //     count--;
        //   }

        //   idx--;
        // }

        // console.log(btc);
        // console.log(gold);
        // console.log(btc);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(getData, []);

  return (
    <div
      className="overview-box"
      style={{ height: "280px", overflowY: "hidden" }}
    >
      <div className="box-heading">ETH Return of Investment (in %)</div>
      <div
        style={{
          padding: "20px",
          overflow: "scroll",
          height: "260px",
          width: "100%",
          overflow: "auto",
        }}
      >
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
              <tr>
                <th>6 M</th>
                <td>
                  {(((btc["M6"] - btcTDay) * 100) / btc["M6"]).toFixed(3)}
                </td>
                <td>
                  {(((spx["M6"] - spxTDay) * 100) / spx["M6"]).toFixed(3)}
                </td>
                <td>
                  {(((gold["M6"] - goldTDay) * 100) / gold["M6"]).toFixed(3)}
                </td>
              </tr>
              {/* <tr>
                <th>1 Y</th>
                <td>
                  {(((btc["Y1"] - btcTDay) * 100) / btc["Y1"]).toFixed(3)}
                </td>
                <td>
                  {(((spx["Y1"] - spxTDay) * 100) / spx["Y1"]).toFixed(3)}
                </td>
                <td>
                  {(((gold["Y1"] - goldTDay) * 100) / gold["Y1"]).toFixed(3)}
                </td>
              </tr>
              <tr>
                <th>3 Y</th>
                <td>{(((btc['Y3'] - btcTDay) * 100) / btc['Y3']).toFixed(3)}</td>
                <td>{(((spx['Y3'] - spxTDay) * 100) / spx['Y3']).toFixed(3)}</td>
                <td>
                  {(((gold['Y3'] - goldTDay) * 100) / gold['Y3']).toFixed(3)}
                </td>
              </tr> */}
              {/* <tr>
                <th>5 Y</th>
                <td>{(((btc['Y5'] - btcTDay) * 100) / btc['Y5']).toFixed(3)}</td>
                <td>{(((spx['Y5'] - spxTDay) * 100) / spx['Y5']).toFixed(3)}</td>
                <td>
                  {(((gold['Y5'] - goldTDay) * 100) / gold['Y5']).toFixed(3)}
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ROI;
