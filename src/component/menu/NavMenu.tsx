import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useUSAJobs } from "../usajobs/useUSAJobs.tsx";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

export const NavBar: React.FC<any> = ({
  brandName,
  imageSrcPath,
  navItems,
}: NavBarProps) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { formValues, handleChange, handleSubmit } = useUSAJobs();

  return (
    <nav className="navbar navbar-expand-md navbar-light shadow nav-body mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to={`/`}>
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </Link>

        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems?.map((items, index) => (
              <li
                key={items}
                className="nav-item text-white"
                onClick={() => setSelectedIndex(index)}
              >
                <Link
                  className={
                    selectedIndex == index
                      ? "nav-link active fw-bold"
                      : "nav-link"
                  }
                  to={`/${items.toLocaleLowerCase()}`}
                >
                  {items}
                </Link>
              </li>
            ))}
          </ul>

          {window.location.href.includes("usa-job") && (
            <form className="d-flex me-3" onSubmit={handleSubmit}>
              <input
                className="form-control me-2"
                type="text"
                placeholder="Search"
                aria-label="Search"
                name="title"
                value={formValues.title}
                onChange={handleChange}
              />
              <input
                className="form-control me-2"
                type="text"
                placeholder="location"
                aria-label="Location"
                name="location"
                value={formValues.location}
                onChange={handleChange}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
