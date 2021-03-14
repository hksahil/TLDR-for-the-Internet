import React from "react";
import { FcOk } from "react-icons/fc";
import { TiTimes } from "react-icons/ti";
import TextCarousal from "./TextCarousal";

export default function Info(props) {
  const { setdrawer } = props;
  return (
    <div>
      <TiTimes
        style={{
          color: "white",
          position: "absolute",
          right: "20px",
          top: "10px",
          fontSize: "20px",
        }}
        onClick={() => {
          setdrawer(false);
        }}
      />
      <div className="list">
        <p>What does this site do?</p>
        <p>TLDR is designed to simplify your life.<br></br>It summarizes the Internet in shortest way possible.
</p>
        <TextCarousal></TextCarousal>
      </div>

      <div className="list">
        <p>Is the data reliable?</p>
        <p>
          We run a cron job every 3 hours which scraps the data from top websites like twitter, Inshorts, Spotify etc.
          <br/><br/>
          So yea , you can believe us !
        </p>
      </div>
      <hr style={{ margin: "0px 20px" }}></hr>
      <div className="list">
        <div style={{ display: "flex" }}>
          <span>
            <FcOk />
          </span>
          <span style={{ marginLeft: "8px" }}>
            Need the data which updates every hour ?
          </span>
        </div>
        <div style={{ display: "flex", marginTop: "5px" }}>
          <span>
            <FcOk />
          </span>
          <span style={{ marginLeft: "8px" }}>
            Want your custom list to be shown ?
          </span>
        </div>

        {/* CTA */}

        <a href="mailto:officialhksahil@gmail.com" class="btn success ">
          Get premium ! Drop a message
        </a>
      </div>
    </div>
  );
}
