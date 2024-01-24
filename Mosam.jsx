import React from "react";

export const Mosam = (props) => {
  return (
    <div>
      <div className="flex items-center border-2 border-white w-[420px] h-[520px] rounded-[20px] bg-white shadow-inner shadow-blue-900 mt-40 ml-9 mb-1">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl text-blue-950">
            {props.data && props.data.main
              ? "Aaj ka taapmaan :" + props.data.main.temp + "°C"
              : "Jaaniye aaj ka mausam :cloud"}
          </h3>
          <div className="mt-2">
            <form onSubmit={props.fetch}>
              <input
                type="text"
                onChange={props.setCity}
                placeholder="location for weather"
                value={props.city}
              />
            </form>
          </div>
          {props.data && props.data.weather && props.data.weather[0] && (
            <img
              src={`http://openweathermap.org/img/w/${props.data.weather[0].icon}.png`}
              className="h-[150px]"
              alt="Weather Icon"
            />
          )}
          <div>
            <h3 className="text-2xl text-blue-700">
              {props.data && props.data.name ? props.data.name : ""}
            </h3>
            <h2>{props.data && props.data.main ? props.data.main.temp + "°C" : ""}</h2>
          </div>
          <div className="flex flex-row border-2 border-white text-white h-[190px] w-[400px] mt-3 bg-blue-300 ml-2">
            <div className="flex flex-col ml-4 mt-5">
              <div className="flex">Humidity</div>
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/3d-button-icon-weather-mobile-app-website-cloudy-weather-forecast-element_313242-1411.jpg"
                  className="h-13 w-12"
                />
              </div>
              <div> {props.data.main ? props.data.main.humidity : ""}</div>
            </div>
            <div className="flex flex-col ml-4 mt-5">
              <div className="flex">Pressure</div>
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/3d-button-icon-weather-mobile-app-website-cloudy-weather-forecast-element_313242-1411.jpg"
                  className="h-13 w-12"
                />
              </div>
              <div>{props.data.main ? props.data.main.pressure : ""}</div>
            </div>
            <div className="flex flex-col ml-4 mt-5">
              <div className="flex">Max T</div>
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/3d-button-icon-weather-mobile-app-website-cloudy-weather-forecast-element_313242-1411.jpg"
                  className="h-13 w-12"
                />
              </div>
              <div>{props.data.main ? props.data.main.temp_max : ""}</div>
            </div>

            <div className="flex flex-col ml-4 mt-5">
              <div className="flex">Min T</div>
              <div>
                <img
                  src="https://img.freepik.com/premium-vector/3d-button-icon-weather-mobile-app-website-cloudy-weather-forecast-element_313242-1411.jpg"
                  className="h-13 w-12"
                />
              </div>
              <div>{props.data.main ? props.data.main.temp_min : ""}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

