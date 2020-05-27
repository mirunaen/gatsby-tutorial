import React from "react"
import "./styles.css"
import "./styles/global.css"

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
        <div className="text-center ">
          <div className="">
            <a
              href="#introduction"
              class="button-lg no-underline br-0 bg-black white fs-s3 ls-wider uppercase hover-opacity-100 focus-white hover-scale-up-1 ease-500"
            >
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
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
