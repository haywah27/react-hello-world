import React, { useState } from "react";
import Select from "react-select";

function ColorChange() {
  const colors = [
    {
      value: 1,
      label: "blue",
    },
    {
      value: 2,
      label: "pink",
    },
    {
      value: 3,
      label: "green",
    },
    {
      value: 4,
      label: "purple",
    },
    {
      value: 5,
      label: "orange",
    },
  ];

  const [setColor, colorValue] = useState(colors.label);

  const handleColor = (event) => {
    colorValue(event.label);
  };

  return (
    <div>
      <style>{`body {background-color: ${setColor}`}</style>
      <Select options={colors} onChange={handleColor}></Select>
      <center>
        <b>The background color is: {setColor}</b>
      </center>
    </div>
  );
}

export default ColorChange;
