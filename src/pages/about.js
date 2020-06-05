import React from "react"
import "./styles.css"
import "./styles/global.css"
import "bootstrap/dist/css/bootstrap.min.css"
export default function About() {
  return (
    <>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">
              Miruna`s blog
            </a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Page 1</a>
            </li>
            <li>
              <a href="#">Page 2</a>
            </li>
            <li>
              <a href="#">Page 3</a>
            </li>
          </ul>
        </div>
      </nav>
      <section
        id="hero"
        className="h-100vh pattern-vertical-lines-md yellow-light bg-yellow flex justify-center items-center bg-fixed"
        tabindex="-1"
        style={{ outLine: `center` }}
      >
        <div className="container">
          <h1 className="fs-l5 text-center lh-2 black">
            My beautiful Journey <br />
          </h1>
          <p className="text-center black opacity-50 fw-600 my-10">
            by Miruna Nedelcu👋.
          </p>
        </div>
      </section>
    </>
  )
}
