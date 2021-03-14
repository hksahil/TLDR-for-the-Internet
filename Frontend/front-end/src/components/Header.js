import React, { useState } from "react";
import "./styles.css";
import { FaBars } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import Drawer from "@material-ui/core/Drawer";
import Info from "./Drawer/index";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    background: "#121212",
  },
});
export default function Header() {
  const styles = useStyles();
  const [drawer, setdrawer] = useState(false);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var fulldate = new Date();
  var date = fulldate.getDate();
  var month = monthNames[fulldate.getMonth()];
  var day = fulldate.getDay();
  var year = fulldate.getFullYear();

  return (
    <div className="main-container">
      {drawer ? (
        <HiMenuAlt3
          className="navicon"
          onClick={() => {
            setdrawer(true);
          }}
        />
      ) : (
        <FaBars
          className="navicon"
          onClick={() => {
            setdrawer(true);
          }}
        />
      )}

      <div className="header">
        <div className="elevated">
          <p>Trending</p>
          <div className="moving-div">
            <Typewriter
              onInit={(typewriter) => {
                typewriter

                  .typeString("Stocks")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("News")
                  .pauseFor(1000)
                  .deleteAll()

                  .typeString("Songs")
                  .pauseFor(1000)
                  .deleteAll()

                  .typeString("Repos")
                  .pauseFor(1000)
                  .deleteAll()

                  .typeString("Games")
                  .pauseFor(1000)
                  .deleteAll()

                  .typeString("Events")
                  .pauseFor(1000)
                  .deleteAll()

                  .typeString("History")
                  .pauseFor(1000)
                  .deleteAll()

                  .typeString("Internet")
                  .pauseFor(1000)

                  .start();
              }}
            />
          </div>
          <p>Tracker</p>

          <div
            className="pill highlighted-date"
            style={{ position: "absolute" }}
          >
            <p
              style={{ padding: "2px", fontSize: "13px" }}
            >{`Today is ${month} ${date}, ${year}`}</p>
          </div>
        </div>
      </div>

      <Drawer
        anchor={'bottom'}
        open={drawer}
        onClose={() => setdrawer(false)}
        zIndex="drawer"
        classes={{ paper: styles.paper }}
      >
        <Info setdrawer={setdrawer}></Info>
      </Drawer>
    </div>
  );
}
