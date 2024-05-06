import React from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { useUSMarketsAll } from "./useUSMarketsAll.tsx";
import { USMarketsData } from "../../types/USMarkets.ts";

export function USMarkets() {
  const { fullDetailsData } = useUSMarketsAll();

  const fullDataOfStock = fullDetailsData as USMarketsData;

  if (fullDataOfStock === undefined) {
    return null;
  }

  const colorStatus = (value: number) => {
    if (value === undefined) return "secondary";
    return value > 0 ? "success" : "danger";
  };

  return (
    <>
      <Row className="mt-4 weather-city-name justify-content-center">
        {fullDataOfStock?.fullData?.data[0].ticker}
        {" - "}
        {fullDataOfStock?.fullData?.data[0].name}
        <Row className="justify-content-center">
          <Col className=" col-sm-3 m-2 stock-details fs-16" key="stock name">
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start mt-2"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Price</div>
              </div>
              <Badge bg="success" pill>
                {fullDataOfStock?.fullData?.data[0].price || 0.0}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start mt-2"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Day Change</div>
              </div>
              <Badge
                bg={`${colorStatus(
                  fullDataOfStock?.fullData?.data[0].day_change
                )}`}
                pill
              >
                {fullDataOfStock?.fullData?.data[0].day_change || 0.0}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start mt-2"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Day Open</div>
              </div>
              <Badge bg="secondary" pill>
                {fullDataOfStock?.fullData?.data[0].day_open || 0.0}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start mt-2"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Day Lov</div>
              </div>
              <Badge bg="secondary" pill>
                {fullDataOfStock?.fullData?.data[0].day_low || 0.0}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start mt-2"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Day High</div>
              </div>
              <Badge bg="secondary" pill>
                {fullDataOfStock?.fullData?.data[0].day_high || 0.0}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start mt-2"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Previous Close Price</div>
              </div>
              <Badge bg="success" pill>
                {fullDataOfStock?.fullData?.data[0].previous_close_price || 0.0}
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start mt-2"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">volume</div>
              </div>
              <Badge bg="secondary" pill>
                {fullDataOfStock?.fullData?.data[0].volume || 0}
              </Badge>
            </ListGroup.Item>
          </Col>
        </Row>
      </Row>

      <Row className="weatherOverview justify-content-center">
        <Row className="mb-4 weather-city-name day-header justify-content-center">
          US Markets News
        </Row>

        <Row className="justify-content-center mt-2 ">
          {fullDataOfStock?.news?.data?.map((stockInfo) => (
            <Row className=" col m-2" key={stockInfo.uuid}>
              <Row className="card" style={{ width: "auto", height: "" }}>
                <img
                  className="mt-2"
                  src={`${stockInfo.image_url}`}
                  alt={`${stockInfo.description}`}
                />
                <Row className="card-body">
                  <h5 className="card-title">{stockInfo.title}</h5>
                  <p className="card-text">{stockInfo.description}</p>
                  <p className="card-text">{stockInfo.snippet}</p>
                  <a
                    href={`${stockInfo.url}`}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    source
                  </a>
                </Row>
              </Row>
            </Row>
          ))}
        </Row>
      </Row>
    </>
  );
}
