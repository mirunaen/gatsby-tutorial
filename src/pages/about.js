import React from "react"
import "./styles.css"
import "./styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"

export default function About() {
  return (
    <section
      id="hero"
      className="h-100vh pattern-vertical-lines-md yellow-light bg-yellow flex justify-center items-center bg-fixed"
      tabindex="-1"
      style={{ outLine: `center` }}
    >
      <div>
        <h1 className="fs-l5 text-center lh-2 black">
          My beautiful Journey <br />
        </h1>
        <p className="text-center black opacity-50 fw-600 my-10">
          by Miruna Nedelcu👋.
        </p>
      </div>

      <nav className="navbar navbar-light bg-light justify-content-between">
        <a className="navbar-brand">Navbar</a>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </section>
  )
}
