import React from "react";

import Header from "./components/Header";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import "./App.css";

import Grid from "@material-ui/core/Grid";

const API_KEY = "99499a0377b74feb8666d5a1cc482f67";

class App extends React.Component {
  state = {
    article0Title: undefined,
    article0Content: undefined,
    article0Img: undefined,
    article1Title: undefined,
    article1Content: undefined,
    article1Img: undefined,
    article2Title: undefined,
    article2Content: undefined,
    article2Img: undefined,
    error: undefined
  };

  getCountry = async e => {
    e.preventDefault();
    const country_selection = e.target.innerHTML;
    var country_abbrev = "";

    if (country_selection === "Australia") {
      country_abbrev = "au";
    } else if (country_selection === "Canada") {
      country_abbrev = "ca";
    } else if (country_selection === "US") {
      country_abbrev = "us";
    } else if (country_selection === "China") {
      country_abbrev = "cn";
    } else {
      return null;
    }
    console.log(country_abbrev);
    const api_call_country = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country_abbrev}&apiKey=${API_KEY}`
    );
    const country_data = await api_call_country.json();
    if (country_abbrev) {
      console.log(country_data);
      this.setState({
        article0Title: country_data.articles[0].title,
        article0Content: country_data.articles[0].content,
        article0Img: country_data.articles[0].urlToImage,
        article1Title: country_data.articles[1].title,
        article1Content: country_data.articles[1].content,
        article1Img: country_data.articles[1].urlToImage,
        article2Title: country_data.articles[2].title,
        article2Content: country_data.articles[2].content,
        article2Img: country_data.articles[2].urlToImage,
        error: ""
      });
    }
  };

  getNews = async e => {
    e.preventDefault();
    let query = e.target.search.value;
    const api_call = await fetch(
      `https://newsapi.org/v2/top-headlines?q=${query}&apiKey=${API_KEY}`
    );
    const data = await api_call.json();
    console.log(data);
    if (data.cod !== "404" && query && data.articles.length !== 0) {
      this.setState({
        article0Title: data.articles[0].title,
        article0Content: data.articles[0].content,
        article0Img: data.articles[0].urlToImage,
        article1Title: data.articles[1].title,
        article1Content: data.articles[1].content,
        article1Img: data.articles[1].urlToImage,
        article2Title: data.articles[2].title,
        article2Content: data.articles[2].content,
        article2Img: data.articles[2].urlToImage,
        error: ""
      });
    } else if (query) {
      this.setState({
        article0Title: undefined,
        article0Content: undefined,
        article0Img: undefined,
        article1Title: undefined,
        article1Content: undefined,
        article1Img: undefined,
        article2Title: undefined,
        article2Content: undefined,
        article2Img: undefined,
        error: "No Search Results Found"
      });
    } else {
      this.setState({
        article0Title: undefined,
        article0Content: undefined,
        article0Img: undefined,
        article1Title: undefined,
        article1Content: undefined,
        article1Img: undefined,
        article2Title: undefined,
        article2Content: undefined,
        article2Img: undefined,
        error: "Please enter a value"
      });
    }
  };

  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <Grid className="title-containter">
            <Header />
          </Grid>
          <Grid container direction="row" justify="center">
            <Form getNews={this.getNews} />
          </Grid>
          <Grid>
            <NavBar getCountry={this.getCountry} />
          </Grid>

          <Articles
            article0Title={this.state.article0Title}
            article0Content={this.state.article0Content}
            article0Img={this.state.article0Img}
            article1Title={this.state.article1Title}
            article1Content={this.state.article1Content}
            article1Img={this.state.article1Img}
            article2Title={this.state.article2Title}
            article2Content={this.state.article2Content}
            article2Img={this.state.article2Img}
            error={this.state.error}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
