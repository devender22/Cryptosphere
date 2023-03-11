
import React from 'react';
import '../../css/App.css';

const data = [
  { volume: 23, value: 19 }
]
  
function Table() {
  return (
    <div>
    <div className="table">
      <table>
        <th> ETH Price Statistics </th>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>24h Low/24h High</td>
              <td>{val.value}</td>
            </tr>
          )
        })}
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>Volume/Market Cap</td>
              <td>{val.volume}</td>
            </tr>
          )
        })}
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>Trading Volume</td>
              <td>{val.volume}</td>
            </tr>
          )
        })}
      </table>
    </div>

    <div className="table">
      <table>
        <th> ETH Return Of Investment </th>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>Ethereum</td>
              <td>{val.value}</td>
            </tr>
          )
        })}
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>Bitcoin</td>
              <td>{val.volume}</td>
            </tr>
          )
        })}
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>Ether</td>
              <td>{val.volume}</td>
            </tr>
          )
        })}
      </table>
    </div>
</div>
  );
}
  
export default Table;
