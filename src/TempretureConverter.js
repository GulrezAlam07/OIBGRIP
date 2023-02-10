import React, { useState } from "react";

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState("");
  const [unit, setUnit] = useState("celsius");

  const handleTemperatureChange = (e) => {
    setTemperature(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  const celsiusToFahrenheit = (temperature) => {
    return (temperature * 9) / 5 + 32;
  };

  const fahrenheitToCelsius = (temperature) => {
    return ((temperature - 32) * 5) / 9;
  };

  const convertTemperature = () => {
    if (unit === "celsius") {
      return celsiusToFahrenheit(temperature).toFixed(2);
    } else {
      return fahrenheitToCelsius(temperature).toFixed(2);
    }
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <input
        type="text"
        placeholder="Enter temperature"
        value={temperature}
        onChange={handleTemperatureChange}
      />
      <br />
      <br />
      <label>
        <input
          type="radio"
          value="celsius"
          checked={unit === "celsius"}
          onChange={handleUnitChange}
        />
        Celsius
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="fahrenheit"
          checked={unit === "fahrenheit"}
          onChange={handleUnitChange}
        />
        Fahrenheit
      </label>
      <br />
      <br />
      {temperature ? (
        <p>
          {temperature}°
          {unit === "celsius" ? "C" : "F"} is equal to{" "}
          {convertTemperature()}°
          {unit === "celsius" ? "F" : "C"}
        </p>
      ) : (
        <p>Enter a temperature to see the conversion</p>
      )}
    </div>
  );
};

export default TemperatureConverter;
