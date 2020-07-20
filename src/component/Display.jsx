import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

function Display({ foodlist, sum }) {
  return (
    <React.Fragment>
      <table>
        <tbody>
          <tr>
            <td className="title">Food</td>
            <td className="title">Calories</td>
            <td></td>
          </tr>
          {foodlist.length > 0
            ? foodlist.map((food) => (
                <tr>
                  <td>{food.food}</td>
                  <td>{food.calories}</td>
                  <td>
                    <FaTrash />
                    <FaEdit />
                  </td>
                </tr>
              ))
            : ""}
          <tr>
            <td>sum</td>
            <td>{sum}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Display;
