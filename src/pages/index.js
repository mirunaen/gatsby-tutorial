import React from "react"

const IndexPage = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <h2>I`m Miruna,a teenager living in beautiful Spain</h2>
      <p>Need a developer?</p> <a href="/contact">Contact me!</a>
      <p>Need a developer? </p>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="blog">BLOG</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default IndexPage
