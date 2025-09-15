import React from "react";
import realtime from "../assets/real-time_data.png";
import trusted from "../assets/trusted_soures.png";
import background from "../assets/background_image.png"; // ✅ your bg image

export default function Section1() {
  return (
    <>
      {/* Full Page Container with Background */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          minHeight: "100vh", // full page height
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff", // makes text visible on bg
          textAlign: "center",
          padding: "20px",
        }}
      >
        {/* Main Content */}
        <div id="realtimedata" style={{ marginBottom: "20px" }}>
          <button id="realtime" className="btn btn-light btn-sm mx-2">
            <img src={realtime} alt="vector" width="15" height="13" /> Real-time
            Data
          </button>
          <button id="trustedsources" className="btn btn-light btn-sm mx-2">
            <img src={trusted} alt="badge" width="17" height="17" /> Trusted
            Source
          </button>
        </div>

        <div id="ipomaincontent">
          <h1 className="fw-bold">
            IPO Intelligence,
            <br /> Without the Noise
          </h1>
        </div>

        <h6 id="trackipo" className="fw-bold mt-3">
          Track IPO listings, grey market premiums, allotment status, and key
          dates — all in one place.
          <br />
          Built for investors, traders, and market watchers.
        </h6>

        <div id="exploreipo" className="mt-4">
          <button id="explore" className="btn btn-dark btn-lg rounded-pill">
            Explore IPOs
          </button>
        </div>
      </div>
    </>
  );
}
