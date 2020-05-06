import React from "react";
const api = {
  key: "caf477dce0feaf3caad36d0c31fdf3fd",
  base: " https://api.openweathermap.org/data/2.5/",
};

function app() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search..." />
        </div>
      </main>
    </div>
  );
}

export default app;
