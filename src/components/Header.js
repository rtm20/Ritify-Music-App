import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      searchQuery2: "",
    };
  }
  handleInputChanged(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  handleInputChanged1(event) {
    this.setState({
      searchQuery2: event.target.value,
    });
  }

  handleButtonClicked() {
    var searchQuery = this.state.searchQuery;
    this.setState({
      searchQuery: "",
    });

    if (searchQuery === "") {
      alert("Search Box is Empty!!!");
    } else {
      window.open(
        "https://www.youtube.com/results?search_query=" + searchQuery,
        "_blank"
      );
    }
  }
  handleButtonClicked1() {
    var searchQuery2 = this.state.searchQuery2;
    this.setState({
      searchQuery2: "",
    });
    if (searchQuery2 === "") {
      alert("Search Box is Empty!!!");
    } else {
      window.open("https://www.google.com/search?q=" + searchQuery2, "_blank");
      //window.location.href = "https://www.google.com/search?q=" + searchQuery2;
    }
  }
  render() {
    return (
      <div>
        <header>
          <nav class="navbar navbar-light bg-dark justify-content-between">
            <a className="navbar-brand">
              <h3>
                <b>
                  <div className="text-center">
                    <div class="text-success">
                      <a
                        href="/"
                        target="_blank"
                        style={{
                          color: "white",
                          fontFamily: "cursive",
                          paddingTop: "16px",
                        }}
                        data-toggle="tooltip"
                    data-placement="right"
                    title="Go to Home"
                      >
                        Ritify{" "}
                      </a>
                    </div>
                  </div>
                  <p
                    style={{
                      color: "white",
                      fontFamily: "serif",
                      font: "small-caption",
                      paddingTop: "9px",
                      paddingLeft: "3px",
                    }}
                  >
                    {" "}
                    Music is life itself{" "}
                  </p>
                </b>
              </h3>
              <div style={{ paddingLeft: "40px", paddingTop: "16px" }}>
                {" "}
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
              </div>
              <div style={{ paddingLeft: "20px", paddingTop: "16px" }}>
                {" "}
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
              </div>
              <div style={{ paddingLeft: "20px", paddingTop: "16px" }}>
                {" "}
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
              </div>
            </a>

            <form class="form-inline">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder=" Search Youtube"
                aria-label="Search"
                value={this.state.searchQuery}
                onChange={this.handleInputChanged.bind(this)}
              />
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                onClick={this.handleButtonClicked.bind(this)}
                data-toggle="tooltip"
                data-placement="top"
                title="Click to search"
              >
                Youtube
              </button>
              &nbsp;&nbsp;&nbsp;
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder=" Search Google"
                aria-label="Search"
                value={this.state.searchQuery2}
                onChange={this.handleInputChanged1.bind(this)}
              />
              <button
                type="button"
                class="btn btn-outline-info btn-sm"
                onClick={this.handleButtonClicked1.bind(this)}
                data-toggle="tooltip"
                data-placement="top"
                title="Click to search"
              >
                Google
              </button>
              <br />
            </form>
          </nav>
        </header>
      </div>
    );
  }
}
