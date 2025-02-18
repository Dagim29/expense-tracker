import React from "react";

const Filter = ({ setFilter }) => {
  return (
    <div className="filter">
      <h2>Filter</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="food">Food</option>
        <option value="transport">Transport</option>
        <option value="entertainment">Entertainment</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
};

export default Filter;