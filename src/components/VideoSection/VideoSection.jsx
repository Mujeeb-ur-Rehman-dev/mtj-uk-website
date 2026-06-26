import React, { useState } from "react";
import "./VideoSection.css";

export default function VideoSection({
  className = "",
  videoId = "KPg1Ux3juAU",
  embedOnLoad = false,
}) {
  const [playing, setPlaying] = useState(embedOnLoad);
  const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
    <section className={`video ${className}`.trim()}>
      {playing ? (
        <iframe
          className="video__iframe"
          src={videoUrl}
          title="How we are Fighting Hunger in Pakistan | MTJ Foundation"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      ) : (
        <button
          className="video__poster"
          onClick={() => setPlaying(true)}
          aria-label="Play video"
        >
          <div className="video__caption">
            <strong>How we are Fighting Hunger in Pakistan</strong>
            <span>MTJ Foundation Canada</span>
          </div>
          <span className="video__play">▶</span>
        </button>
      )}
    </section>
  );
}
