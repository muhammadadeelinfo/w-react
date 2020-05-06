import React from "react";
const api = {
  key: "caf477dce0feaf3caad36d0c31fdf3fd",
  base: " https://api.openweathermap.org/data/2.5/",
};

function app() {
  const dateBuilder = (d) => {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return day + " " + date + " " + month + " " + year;
  };
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search..." />
        </div>
        <div className="location-box">
          <div className="location">Berlin, DE</div>
          <div className="data">{dateBuilder(new Date())}</div>
        </div>
      </main>
    </div>
  );
}

export default app;
