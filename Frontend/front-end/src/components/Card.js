import React, { useState } from "react";
import "./styles.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { RiSpotifyLine } from "react-icons/ri";
import EllipsisText from "react-ellipsis-text";

export default function Card(props) {
  const {
    songs,
    songsIndian,
    events,
    twitterTrends,
    games,
    famousperson,
    repos,
    language,
    gainers,
    loosers,
    type,
    category,
    utilwrapper,
  } = props;

  //tabs to change views
  const [stocksview, changestocksview] = useState("gainers");
  const [songsview, changesongsview] = useState("worldwide");

  //changing state on click of languages
  const languageHandler = (value) => {
    utilwrapper(value, "language");
  };

  const typeHandler = (value) => {
    utilwrapper(value, "type");
  };

  return (
    <>
      <div className="card-wrapper">
        <div className="news-card">
          <p className="card-header-text">News of the day :</p>
          <div className="pill-container">
            <button
              className={`pill ${type === "all_news" ? "highlighted" : ""}`}
              onClick={() => {
                utilwrapper("all_news", "type");
              }}
            >
              All
            </button>

            <button
              className={`pill ${type === "travel" ? "highlighted" : ""}`}
              onClick={() => {
                utilwrapper("travel", "type");
              }}
            >
              Travel
            </button>
            <button
              className={`pill ${type === "sports" ? "highlighted" : ""}`}
              onClick={() => {
                utilwrapper("sports", "type");
              }}
            >
              Sports
            </button>
            <button
              className={`pill ${type === "technology" ? "highlighted" : ""}`}
              onClick={() => {
                utilwrapper("technology", "type");
              }}
            >
              Tech
            </button>

            <button
              className={`pill ${type === "science" ? "highlighted" : ""}`}
              onClick={() => {
                utilwrapper("science", "type");
              }}
            >
              Science
            </button>
          </div>
          {category &&
            category.articles.map((item) => {
              return (
                <div className="repo-parent">
                  <span class="left">
                    <FaArrowAltCircleRight
                      color="lightskyblue"
                      className="arrows"
                    />
                  </span>

                  <div className="news-parent-left">
                    <p className="card-list-news">
                      {item.title}{" "}
                      <span
                        style={{ verticalAlign: "middle" }}
                        href={item.inshorts_url}
                      >
                        <FiExternalLink
                          style={{ color: "#ffffff99" }}
                          onClick={() => {
                            window.open(item.inshorts_url);
                          }}
                        />
                      </span>
                    </p>
                    <p className="news-desc">
                      <EllipsisText text={item.description} length={"90"} />
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="stocks-card">
          <p className="card-header-text">Stocks of the day :</p>
          <div className="pill-container">
            <button
              className={`pill ${
                stocksview === "gainers" ? "highlighted" : ""
              }`}
              onClick={() => {
                changestocksview("gainers");
              }}
            >
              Top Gainers
            </button>
            <button
              className={`pill ${
                stocksview === "loosers" ? "highlighted" : ""
              }`}
              onClick={() => {
                changestocksview("loosers");
              }}
            >
              Top Loosers
            </button>
          </div>

          {stocksview === "gainers"
            ? gainers.map((gainer) => {
                return (
                  <div className="list-container">
                    <span class="left">
                      <FaArrowAltCircleRight
                        color="#ffffb7"
                        className="arrows"
                      />
                    </span>
                    <p className="card-list">
                      {gainer.gainername} with{" "}
                      <span className="gainer-change">
                        +{gainer.gainerchange}%
                      </span>{" "}
                      change
                    </p>
                  </div>
                );
              })
            : loosers.map((looser) => {
                return (
                  <div className="list-container">
                    <span class="left">
                      <FaArrowAltCircleRight
                        color="#ffffb7"
                        className="arrows"
                      />
                    </span>
                    <p className="card-list">
                      {looser.loosername} with{" "}
                      <span className="looser-change">
                        {looser.looserchange}%
                      </span>{" "}
                      change
                    </p>
                  </div>
                );
              })}
        </div>

        <div className="songs-card">
          <p className="card-header-text">Songs of the day : </p>
          <div className="pill-container">
            <button
              className={`pill ${
                songsview === "worldwide" ? "highlighted" : ""
              }`}
              onClick={() => {
                changesongsview("worldwide");
              }}
            >
              Worldwide
            </button>
            <button
              className={`pill ${songsview === "indian" ? "highlighted" : ""}`}
              onClick={() => {
                changesongsview("indian");
              }}
            >
              Indian
            </button>
          </div>
          {songsview === "worldwide"
            ? songs.map((song) => {
                return (
                  <div className="list-container">
                    <span class="left">
                      <FaArrowAltCircleRight
                        color="#d291bc"
                        className="arrows"
                      />
                    </span>

                    <p className="card-list-song">
                      <span style={{ textTransform: "capitalize" }}>
                        {song.songName}{" "}
                      </span>
                      {song.songArtist}
                    </p>

                    <div className="repo-parent-right ">
                      <a className="pill-static" href={song.songLink}>
                        Play
                      </a>
                    </div>
                  </div>
                );
              })
            : songsIndian.map((song) => {
                return (
                  <div className="list-container">
                    <span class="left">
                      <FaArrowAltCircleRight
                        color="#d291bc"
                        className="arrows"
                      />
                    </span>
                    <p className="card-list-song">
                      <span style={{ textTransform: "capitalize" }}>
                        {song.songIndianName}{" "}
                      </span>
                      {song.songIndianArtist}
                    </p>
                    <div className="repo-parent-right ">
                      <a className="pill-static" href={song.songIndianLink}>
                        Play
                      </a>
                    </div>
                  </div>
                );
              })}
        </div>

        <div className="games-card">
          <p className="card-header-text">Games of the day : </p>
          <span class="pill-static">Concurent Players</span>
          {games.map((game) => {
            return (
              <div className="list-container">
                <span class="left">
                  <FaArrowAltCircleRight
                    color="lightsalmon"
                    className="arrows"
                  />
                </span>
                <p className="card-list">
                  {game.gameName} with {game.currentGamePlayers} live players
                </p>
              </div>
            );
          })}
        </div>

        <div className="trends-card">
          <p className="card-header-text">Trends of the day : </p>

          {twitterTrends.map((twitterTrend) => {
            return (
              <div className="list-container">
                <span class="left">
                  <FaArrowAltCircleRight
                    color="lightskyblue"
                    className="arrows"
                  />
                </span>
                <p className="card-list">
                  {twitterTrend.trendName} with {twitterTrend.trendNumbers}{" "}
                  tweets
                </p>
              </div>
            );
          })}
        </div>

        <div className="birthday-card">
          <p className="card-header-text">Birthdays of the day : </p>
          {famousperson.map((person) => {
            return (
              <div className="list-container">
                <span class="left">
                  <FaArrowAltCircleRight
                    color="lightgoldenrodyellow"
                    className="arrows"
                  />
                </span>
                <p className="card-list">
                  {person.personName} , {person.personProfession}
                </p>
              </div>
            );
          })}
        </div>

        <div className="history-card">
          <p className="card-header-text">History of the day : </p>
          {events.map((event) => {
            return (
              <div className="list-container">
                <span class="left">
                  <FaArrowAltCircleRight
                    color="lightcoral"
                    className="arrows"
                  />
                </span>
                <p className="card-list">{event.eventName}</p>
              </div>
            );
          })}
        </div>

        <div className="repos-card">
          <p className="card-header-text">Repos of the day :</p>
          <div className="pill-container">
            <button
              className={`pill ${language === "all" ? "highlighted" : ""}`}
              onClick={() => {
                languageHandler("all");
              }}
            >
              All
            </button>

            <button
              className={`pill ${language === "Python" ? "highlighted" : ""}`}
              onClick={() => {
                languageHandler("Python");
              }}
            >
              Python
            </button>
            <button
              className={`pill ${language === "C" ? "highlighted" : ""}`}
              onClick={() => {
                languageHandler("C");
              }}
            >
              C
            </button>
            <button
              className={`pill ${language === "Java" ? "highlighted" : ""}`}
              onClick={() => {
                languageHandler("Java");
              }}
            >
              Java
            </button>
            <button
              className={`pill ${language === "Go" ? "highlighted" : ""}`}
              onClick={() => {
                languageHandler("Go");
              }}
            >
              Go
            </button>
          </div>
          {repos.slice(0,3).map((repo) => {
            return (
              <div className="repo-parent">
                <span class="left">
                  <FaArrowAltCircleRight
                    color="lightgreen"
                    className="arrows"
                  />
                </span>

                <div className="repo-parent-left">
                  <p className="card-list-repo">{repo.reponame}</p>
                  <p className="repo-desc">{repo.repodescription}</p>
                </div>

                <div className="repo-parent-right ">
                  <a className="pill-static" href={repo.repolink}>
                    Link
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
