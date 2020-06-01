import React from "react"
import { Link } from "gatsby"

const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>PMy post will show up here once i figure out how :)</p>
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

export default BlogPage
