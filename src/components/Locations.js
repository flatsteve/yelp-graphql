import React from "react";

const locations = [
  { id: 1, name: "New York" },
  { id: 2, name: "Boston" },
  { id: 3, name: "Los Angeles" }
];

const Locations = ({ location, updateLocation }) => {
  return (
    <select
      value={location}
      onChange={({ target }) => updateLocation(target.value)}
    >
      {locations.map(location => {
        return (
          <option key={location.id} value={location.name}>
            {location.name}
          </option>
        );
      })}
    </select>
  );
};

export default Locations;
