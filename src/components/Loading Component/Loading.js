import React from "react";
import "./Loading.css";

// import asset
import loading from "../../assets/loading.gif";

function Loading() {
  return (
    <section className="loading-section">
      <img src={loading} className="loading-gif" />
    </section>
  );
}

export default Loading;
