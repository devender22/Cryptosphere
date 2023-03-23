import React,{useState} from "react";

function Table(){
    return(
        <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Row 1</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Row 2</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Row 3</th>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
    );
}

export default Table;