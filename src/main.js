import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUmbrella } from "react-icons/fa"; // Umbrella icon

const Main = () => {
  // Store the index of the expanded event (or null if none is expanded)
  const [expanded, setExpanded] = useState(null);

  // Timeline events
  const events = [
    { year: 2000, title: "Company Founded", details: "Our company was founded info info info info info info info info ." },
    { year: 2005, title: "First Major Milestone", details: "We achieved our first major milestone by info info info info info info info info info info info info info info info info." },
    { year: 2010, title: "Milestone 2", details: "info info info info info info info info info info info info info info info info." },
    { year: 2015, title: "Milestone 3", details: "info info info info info info info info info info info info info info info info." },
    { year: 2020, title: "Milestone 4", details: "info info info info info info info info info info info info info info info info." },
    { year: 2025, title: "Milestone 5", details: "info info info info info info info info info info info info info info info info info info info info info info info info." }
  ];

  return (
    <div>
      <h1>Timeline</h1>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.year}
            iconStyle={{ background: "#2196F3", color: "#fff" }}
            icon={<FaUmbrella />}
            contentStyle={{ padding: "10px 20px", textAlign: "left" }} // Adjust padding
            dateClassName="timeline-date" // Custom class for styling
          >
            {/* Clickable title to toggle expansion */}
            <h3
              onClick={() => setExpanded(expanded === index ? null : index)}
              style={{ cursor: "pointer", color: "#007BFF", textDecoration: "underline" }} // Visual cue
            >
              {event.title}
            </h3>

            {/* Show details only if this event is expanded */}
            {expanded === index && <p>{event.details}</p>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;
