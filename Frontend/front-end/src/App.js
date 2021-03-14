import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./components/styles.css";
import axios from "axios";

import Scroll from "./components/ScrollTop";
function App() {
  const [songs, setSongs] = useState([]);
  const [songsIndian, setSongsIndian] = useState([]);
  const [events, setEvents] = useState([]);
  const [twitterTrends, settwitterTrends] = useState([]);
  const [games, setgames] = useState([]);
  const [famousperson, setfamousperson] = useState([]);
  const [repos, setrepos] = useState([]);
  const [gainers, setgainers] = useState([]);
  const [loosers, setloosers] = useState([]);
  const [category, setcategory] = useState();
  const [language, setlanguage] = useState("all");
  const [type, setType] = useState("all_news");

  const utilwrapper = (value, flag) => {
    if (flag === "language") {
      setlanguage(value);
    } else if (flag === "type") {
      setType(value);
    } else if (flag === "gainers") {
      setgainers(value);
    } else if (flag === "loosers") {
      setloosers(value);
    } else if (flag === "category") {
      setcategory(value);
    }
  };

  useEffect(() => {
    language === "all"
      ? fetch("/github")
          .then((res) => res.json())
          .then((data) => {
            setrepos(data);
          })
      : fetch(`/github/${language}`)
          .then((res) => res.json())
          .then((data) => {
            setrepos(data);
          });
  }, [language]);

  // combining use effects
  const urls = [
    "/songs",
    "/songsIndian",
    "/events",
    "/twitterTrends",
    "/famousperson",
    "/games",
    "/topgainers",
    "/toploosers",
  ];

  useEffect(() => {
    Promise.all(
      urls.map((url) =>
        fetch(url)
          .then(checkStatus) // check the response of our APIs
          .then(parseJSON) // parse it to Json
          .catch((error) => console.log("There was a problem!", error))
      )
    ).then((data) => {
      // assign to requested URL as define in array with array index.
      setSongs(data[0]);
      setSongsIndian(data[1]);
      setEvents(data[2]);
      settwitterTrends(data[3]);
      setfamousperson(data[4]);
      setgames(data[5]);
      setgainers(data[6]);
      setloosers(data[7]);
    });
  }, []);

  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }

  function parseJSON(response) {
    return response.json();
  }

  // actual news api start//
  useEffect(() => {
    if (type === "all_news") {
      fetch("https://inshortsv2.vercel.app/news?type=all_news&limit=4")
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "data");
          setcategory(data);
        });
    } else {
      fetch(`https://inshortsv2.vercel.app/news?type=${type}&limit=3`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "data");
          setcategory(data);
        });
    }
  }, [type]);

  return (
    <div className="App">
      <Header></Header>
      <Card
        songs={songs}
        songsIndian={songsIndian}
        events={events}
        twitterTrends={twitterTrends}
        games={games}
        famousperson={famousperson}
        repos={repos}
        language={language}
        // languagewrapper={languagewrapper}
        gainers={gainers}
        loosers={loosers}
        type={type}
        // typewrapper={typewrapper}
        category={category}
        // categorywrapper={categorywrapper}
        utilwrapper={utilwrapper}
      ></Card>
      <Scroll showBelow={250} />
      <Footer></Footer>
    </div>
  );
}

export default App;
