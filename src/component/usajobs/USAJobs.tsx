import React from "react";
import { Col, Dropdown, NavDropdown, Row } from "react-bootstrap";
import { useUSAJobs } from "../usajobs/useUSAJobs.tsx";
import { VerticallyCenteredModal } from "../usajobs/VerticallyCenteredModal.tsx";

export const USAJobs = () => {
  const {
    data,
    dutyModalShow,
    setDutyModalShow,
    requirementModalShow,
    setRequirementModalShow,
    updateDuty,
    updateRequirement,
    getDutyStatus,
    getRequirementStatus,
  } = useUSAJobs();

  const getLocalDate = (databaseDate: string) => {
    const date = new Date(databaseDate);
    return `${date?.getMonth() + 1}-${date?.getDate()}-${date?.getFullYear()}`;
  };

  if (data?.SearchResult?.SearchResultCountAll === 0)
    return (
      <div className="container">
        <div className="card bg-white mb-2 border border-white">
          No Result - Update your search
        </div>
      </div>
    );

  console.log("--ssss-------", data?.SearchResult);
  return (
    <div>
      <div className="container">
        <Row>
          {data?.SearchResult?.SearchResultItems?.map((jobData, index) => (
            <div
              className="card bg-white mb-2 col-sm-6 border border-white"
              key={index + "-job"}
            >
              <Row className="card-header d-inline-block text-black bg-transparent text-center">
                <h6>{jobData?.MatchedObjectDescriptor?.PositionTitle}</h6>
              </Row>
              <div className="card-body text-white job-card-body">
                <h6 className="card-title">Overview</h6>

                <Row>
                  <Col className="col-6">
                    <strong>Open & closing dates: </strong>
                  </Col>
                  <Col className="col-6">
                    {getLocalDate(
                      jobData?.MatchedObjectDescriptor?.PositionStartDate || ""
                    )}{" "}
                    to{" "}
                    {getLocalDate(
                      jobData?.MatchedObjectDescriptor?.ApplicationCloseDate ||
                        ""
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col className="col-6">
                    <strong>Salary Per Year: </strong>{" "}
                  </Col>
                  <Col className="col-6">
                    $
                    {Number(
                      jobData?.MatchedObjectDescriptor?.PositionRemuneration[0]
                        ?.MinimumRange
                    ).toLocaleString()}
                    {" - "}$
                    {Number(
                      jobData?.MatchedObjectDescriptor?.PositionRemuneration[0]
                        ?.MaximumRange
                    ).toLocaleString()}
                  </Col>
                </Row>
                <Row>
                  <Col className="col-6">
                    <strong>Location: </strong>
                  </Col>
                  <Col>
                    {jobData?.MatchedObjectDescriptor?.PositionLocation
                      ?.length > 1 ? (
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Anywhere in the U.S"
                        menuVariant="dark"
                      >
                        {jobData?.MatchedObjectDescriptor?.PositionLocation.map(
                          (locationData) => (
                            <>
                              <NavDropdown.Item
                                href={`${data?.SearchResult?.SearchResultItems[0]?.MatchedObjectDescriptor?.PositionURI}`}
                                target="_blank"
                              >
                                {locationData?.CityName}
                              </NavDropdown.Item>
                            </>
                          )
                        )}
                      </NavDropdown>
                    ) : (
                      jobData?.MatchedObjectDescriptor?.PositionLocation[0]
                        ?.CityName
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col className="col-6">
                    <strong>Remote Job: </strong>
                  </Col>
                  <Col>
                    {data?.SearchResult?.SearchResultItems[0]
                      ?.MatchedObjectDescriptor?.UserArea?.Details
                      ?.TeleworkEligible
                      ? "Yes"
                      : "No"}
                  </Col>
                </Row>
                <Row>
                  <Col className="col-6">
                    <strong>Security Clearance: </strong>
                  </Col>
                  <Col>
                    {
                      jobData?.MatchedObjectDescriptor?.UserArea?.Details
                        ?.SecurityClearance
                    }
                  </Col>
                </Row>

                <Row>
                  <Col className="col-6">
                    <strong>Department Name: </strong>
                  </Col>
                  <Col>{jobData?.MatchedObjectDescriptor?.DepartmentName}</Col>
                </Row>

                <Row className="d-flex mt-1">
                  <button
                    onClick={() => {
                      updateDuty(index);
                      setDutyModalShow(true);
                    }}
                    className="button-hover"
                  >
                    Duties
                  </button>

                  {getDutyStatus(index) && (
                    <VerticallyCenteredModal
                      show={dutyModalShow}
                      onHide={() => setDutyModalShow(false)}
                      MajorDuties={[
                        data?.SearchResult?.SearchResultItems[0]
                          ?.MatchedObjectDescriptor?.UserArea?.Details
                          ?.MajorDuties,
                      ]}
                      title={"Duties"}
                    />
                  )}

                  <button
                    onClick={() => {
                      updateRequirement(index);
                      setRequirementModalShow(true);
                    }}
                    className="button-hover"
                  >
                    Job Requirements
                  </button>

                  {getRequirementStatus(index) && (
                    <VerticallyCenteredModal
                      show={requirementModalShow}
                      onHide={() => setRequirementModalShow(false)}
                      MajorDuties={[
                        data?.SearchResult?.SearchResultItems[0]
                          .MatchedObjectDescriptor?.QualificationSummary,
                      ]}
                      title={"Job Requirements"}
                    />
                  )}
                </Row>
              </div>
              <div className="card-footer bg-transparent border-success">
                <a
                  href={`${data?.SearchResult?.SearchResultItems[0]?.MatchedObjectDescriptor?.PositionURI}`}
                  className="btn btn-outline-success"
                  target="_blank"
                  rel="noreferrer"
                >
                  Apply
                </a>
              </div>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
};
