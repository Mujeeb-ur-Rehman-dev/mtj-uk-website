import React, { useState } from "react";
import "./ImpactSection1.css";
import HelpImg from "../../assets/img/impacts/icons/icon-help.svg";
import MedicineImg from "../../assets/img/impacts/icons/icon-medicine.svg";
import WaterImg from "../../assets/img/impacts/icons/icon-water.svg";
import ScholarImg from "../../assets/img/impacts/icons/icon-scholarship.svg";
import RationImg from "../../assets/img/impacts/icons/icon-ration.svg";
import WomenImg from "../../assets/img/impacts/icons/icon-women.svg";
import OrphanImg from "../../assets/img/impacts/icons/icon-orphan.svg";
import HealthImg from "../../assets/img/impacts/icons/icon-medicine.svg";
import impactBgImage from "../../assets/img/impacts/background/background.png";



const ALL_STATS = [
  { icon: HelpImg,        value: "100,000+", label: "People helped during the floods in Pakistan" },
  { icon: MedicineImg,    value: "500,000+", label: "Free tests and medicines provided" },
  { icon: WaterImg,       value: "350,000+", label: "People given access to clean water" },
  { icon: ScholarImg, value: "10,000+",  label: "Scholarships gifted to students" },
  { icon: RationImg,      value: "50,000+",  label: "Ration bags delivered" },
  { icon: WomenImg,       value: "600+",     label: "Women trained in income-generating skills" },
  { icon: OrphanImg,      value: "400",      label: "Orphans sponsored in Gaza" },
  { icon: HealthImg,        value: "400,000+", label: "People helped in Gaza" },
];

const PER_PAGE = 4;

export default function ImpactSection1({
  className = "",
  stats = ALL_STATS,
  itemsPerPage = PER_PAGE,
  showDots = true,
}) {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(stats.length / itemsPerPage);
  const visible = stats.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  return (
    <section className={`impact ${className}`.trim()}>
      <div className="impact__stamp">

        {/* scalloped maroon stamp background image */}
        <img
          className="impact__stamp-bg"
          src={impactBgImage}
          alt=""
          aria-hidden="true"
        />

        {/* overlay — 3 rows: header | grid | controls */}
        <div className="impact__content">

          {/* ROW 1: eyebrow + title grouped so they stay together at the top */}
          <div className="impact__header">
            <p className="impact__eyebrow">Our Work For Humanity</p>
            <h2 className="impact__title">THE IMPACT OF YOUR DONATIONS</h2>
          </div>

          {/* ROW 2: stat cards */}
          <div className="impact__grid">
            {visible.map((s, i) => (
              <div className="impact__item" key={i}>
                <img
                  className="impact__icon"
                  src={s.icon}
                  alt=""
                  width="156"
                  height="165"
                />
                <strong className="impact__value">{s.value}</strong>
                <p className="impact__label">{s.label}</p>
              </div>
            ))}
          </div>

          {/* ROW 3: prev / dots / next */}
          <div className="impact__controls">
            <button
              className="impact__arrow"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              aria-label="Previous"
              disabled={page === 0}
            >
              ←
            </button>

            <div className="impact__dots">
              {showDots &&
                Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    className={`impact__dot${i === page ? " impact__dot--active" : ""}`}
                    onClick={() => setPage(i)}
                    aria-label={`Page ${i + 1}`}
                  />
                ))}
            </div>

            <button
              className="impact__arrow"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              aria-label="Next"
              disabled={page === totalPages - 1}
            >
              →
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
