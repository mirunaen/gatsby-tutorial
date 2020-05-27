import React from "react"
import { Link } from "gatsby"
const IndexPage = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>I`m Miruna,a teenager living in beautiful Spain</h2>
      <p>Need a developer?</p> <a href="/contact">Contact me!</a>
      <p>Need a developer? </p>
      <Link to="/">Home</Link>
      <Link to="blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default IndexPage
