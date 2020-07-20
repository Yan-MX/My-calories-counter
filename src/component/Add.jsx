import React, { useState } from "react";

function Add({ foodlist, setFood, setSum }) {
  const [afood, setAfood] = useState("");
  const [cal, setCal] = useState("");
  const handleChange = (event) => {
    const { id, value } = event.target;
    id === "food" ? setAfood(value) : setCal(value);
  };
  let index = 0;
  const submit = (event) => {
    setFood([...foodlist, { food: afood, calories: cal, key: index }]);
    setSum((s) => parseInt(s) + parseInt(cal));
    console.log(foodlist.length);
    index++;
    setAfood("");
    setCal("");
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="food">Food</label>
        <input
          id="food"
          type="text"
          value={afood}
          placeholder="Enter food"
          onChange={handleChange}
        />
        <label htmlFor="cal">Calories</label>
        <input
          id="cal"
          type="text"
          value={cal}
          placeholder="Enter calories"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default Add;
