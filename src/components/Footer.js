import React, { Component } from "react";


export default class Footer extends Component {
  render() {
    return (
      <div>
        {/* <footer class="footx">
          <div class="content has-text-centered">
            <p>
              <strong>Ritify</strong> by{" "}
              <a href="https://www.linkedin.com/in/ritesh-meena/">Ritesh Meena</a>. The source code is
              licensed
              <a href="https://github.com/rtm20"> @rtm20</a>.
              The website content is licensed{" "}
              <a href="https://github.com/rtm20">
                2022
              </a>
            </p>
          </div>
        </footer>*/}
        <footer> 
      <div className="container">
        <h1>Ritify Music</h1>
        <p className="copyright-line">
          © Copyright 2022 - All rights reserved.
        </p>
        <ul className="social-list">
          <li>
          <a href="https://github.com/rtm20">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{ color: "black" }}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Connect on Github"
                  >
                    <span class="bi bi-github"></span>{" "}
                  </button>
                </a>
          </li>
          <li>
          <a href="https://www.linkedin.com/in/ritesh-meena/">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Connect on Linkedin"
                  >
                    <span class="bi bi-linkedin"></span>{" "}
                  </button>
                </a>
          </li>
          <li>
          <a href="https://www.instagram.com/ritify.music/">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{ color: "black" }}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Connect on Instagram"
                  >
                    <span class="bi bi-instagram"></span>{" "}
                  </button>
                </a>
          </li>
        </ul>
      </div>
    </footer>
      </div>
    );
  }
}
