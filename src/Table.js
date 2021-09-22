import React from "react";

function Table(){

    return(
        <div><br /><br /><br />
              <table className="table table-bordered className text-white">
    <thead>
      <tr>
        <th>Name</th>
        <th>Side-Effect</th>
        <th>Price/Dose</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Sperma</td>
        <td>None</td>
        <td>$2</td>
        <td>80-Days</td>

      </tr>
      <tr>
        <td>Cancer</td>
        <td>Dryness & Vomiting</td>
        <td>$10</td>
        <td>120-Days</td>

      </tr>
      <tr>
        <td>Heart</td>
        <td>None</td>
        <td>$20</td>
        <td>10-Days</td>

      </tr>
      <tr>
        <td>Renal</td>
        <td>Black-Stool If Over Dose</td>
        <td>$7</td>
        <td>60-Days</td>

      </tr>
      <tr>
        <td>Paralysis & Palsey</td>
        <td>None</td>
        <td>$10</td>
        <td>10-Days</td>
      </tr>
      <tr>
        <td>Asthama</td>
        <td>None</td>
        <td>$0.5</td>
        <td>40-Days</td>
      </tr>
    </tbody>
  </table>
        </div>
    )
}

export default Table;