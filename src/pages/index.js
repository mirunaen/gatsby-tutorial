import React from "react"
import { Link } from "gatsby"
const IndexPage = () => {
  return (
    <div>
      <section
        id="hero"
        className="h-100vh pattern-vertical-lines-md yellow-light bg-yellow flex justify-center items-center bg-fixed"
        tabIndex="-1"
        style={{ outLine: `center` }}
      >
        <div className="container">
          <h1 className="fs-l5 text-center lh-2 black">
            My beautiful Journey <br />
          </h1>
          <p className="text-center black opacity-50 fw-600 my-10">
            by Miruna Nedelcu👋.
          </p>
          <Link to="/">Home</Link>
          <Link to="blog">BLOG</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </section>
    </div>
  )
}

export default IndexPage
