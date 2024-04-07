import React from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { useWeather } from "./useWeather.tsx";

export function Weather() {
  const { weatherData } = useWeather();

  if (weatherData === undefined) {
    return null;
  }

  return (
    <>
      {weatherData?.error?.code ? (
        <Row className="mt-4 weather-city-name justify-content-center">
          {weatherData?.error?.message}
        </Row>
      ) : (
        <>
          <Row className="mt-4 weather-city-name justify-content-center">
            {weatherData?.location?.name} - {weatherData?.location?.country}
          </Row>

          <Row className="weatherOverview justify-content-center">
            <Row className="mb-4 weather-city-name day-header justify-content-center">
              Current Weather
            </Row>

            <Col className="col-sm-3">
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mt-2"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Local Time</div>
                  {weatherData?.location?.localtime}
                </div>
                <Badge bg="secondary" pill className="weather-data-size">
                  GMT
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Current Temparature </div>
                </div>
                <Badge bg="primary" pill className="weather-data-size">
                  {weatherData?.current?.temp_f} - F
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Condition</div>
                  {weatherData?.current?.condition?.text}
                </div>
                <Badge bg="light" pill>
                  <img
                    src={`${weatherData?.current?.condition?.icon}`}
                    alt={`${weatherData?.current?.condition?.text}`}
                  />
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Cloud</div>
                </div>
                <Badge bg="primary" pill className="weather-data-size">
                  {weatherData?.current?.cloud}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Feelslike</div>
                </div>
                <Badge bg="primary" pill className="weather-data-size">
                  {weatherData?.current?.feelslike_f} - F
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Gust MPH</div>
                </div>
                <Badge bg="primary" pill className="weather-data-size">
                  {weatherData?.current?.gust_mph}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start mb-2"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Wind MPH</div>
                </div>
                <Badge bg="primary" pill className="weather-data-size">
                  {weatherData?.current?.wind_mph}
                </Badge>
              </ListGroup.Item>
            </Col>
          </Row>

          <Row className="justify-content-center mt-2">
            {weatherData?.forecast?.forecastday?.map((data) => (
              <Col className=" col m-2 " key={data.date}>
                <Row className="fw-bold day-header justify-content-center mt-2">
                  {data.date}
                </Row>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Condition</div>
                    {weatherData?.current?.condition?.text}
                  </div>
                  <Badge bg="light" pill>
                    <img
                      src={`${data?.day?.condition?.icon}`}
                      alt={`${data?.day?.condition?.text}`}
                    />
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Temparature Range</div>
                  </div>
                  <Badge bg="secondary" pill className="weather-data-size">
                    {Math.round(data?.day?.mintemp_f)} {` to `}
                    {Math.round(data?.day?.maxtemp_f)} F
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Moon Rise </div>
                  </div>
                  <Badge bg="secondary" pill className="weather-data-size">
                    {data.astro.moonrise}
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Moon Set </div>
                  </div>
                  <Badge bg="secondary" pill className="weather-data-size">
                    {data.astro.moonset}
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Sun Rise </div>
                  </div>
                  <Badge bg="secondary" pill className="weather-data-size">
                    {data.astro.sunrise}
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Sun Set </div>
                  </div>
                  <Badge bg="secondary" pill className="weather-data-size">
                    {data.astro.sunset}
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Chance of Rain </div>
                  </div>
                  <Badge bg="secondary" pill className="weather-data-size">
                    {data.day.daily_chance_of_rain}%
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Chance of Snow </div>
                  </div>
                  <Badge bg="secondary" pill className="weather-data-size">
                    {data.day.daily_chance_of_snow}%
                  </Badge>
                </ListGroup.Item>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
}

export default Weather;
