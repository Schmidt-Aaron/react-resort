import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

// get unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast
  } = context;

  // get uniques
  let types = getUnique(rooms, "type");
  let people = getUnique(rooms, "capacity");

  // add all
  types = ["all", ...types];

  // map to jsx
  types = types.map((item, i) => {
    return (
      <option value={item} key={i}>
        {item}
      </option>
    );
  });

  people = people.map((item, i) => {
    return (
      <option key={i} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* end select type */}
        {/* select capacity */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* end capacity */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control" />
        </div>

        {/* end room price */}
      </form>
    </section>
  );
}
