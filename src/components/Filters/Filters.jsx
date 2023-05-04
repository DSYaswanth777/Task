import React from "react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Filters = () => {
  return (
    <div>
      <label for="cars">Show</label>
      <select name="cars" id="cars">
        <option value="volvo">25</option>
        <option value="saab">50</option>
        <option value="mercedes">100</option>
      </select>
      entries
      <button>Excel</button>
      <button>Print</button>
      <label/>Search
      <input type="search" />
    </div>
  );
};

export default Filters;
