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

    window.location.href =
      "https://www.youtube.com/results?search_query=" + searchQuery;
  }
  handleButtonClicked1() {
    var searchQuery2 = this.state.searchQuery2;

    window.location.href = "https://www.google.com/search?q=" + searchQuery2;
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
                        href="/#"
                        target="_blank"
                        style={{ color: "white", fontFamily: "cursive" , paddingTop:"16px" }}
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
              <div style={{ paddingLeft: "40px" , paddingTop:"16px" }}>
                {" "}
                <a href="https://www.linkedin.com/in/ritesh-meena/">
                  <button type="button" class="btn btn-secondary">
                    <span class="bi bi-linkedin"></span>{" "}
                  </button>
                </a>
              </div>
              <div style={{ paddingLeft: "20px" , paddingTop:"16px" }}>
                {" "}
                <a href="https://github.com/rtm20">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{ color: "black" }}
                  >
                    <span class="bi bi-github"></span>{" "}
                  </button>
                </a>
              </div>
              <div style={{ paddingLeft: "20px", paddingTop:"16px" }}>
                {" "}
                <a href="https://www.instagram.com/_acoustring20/">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    style={{ color: "black" }}
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
