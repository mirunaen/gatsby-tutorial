import React from "react"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>I`m Miruna,a teenager trying Gatsby</h2>
      <p>Need a developer?</p> <a href="/contact">Contact me!</a>
      <p>
        Need a developer? <Link to="/contact">Contact me </Link>{" "}
      </p>
    </div>
  )
}

export default IndexPage
