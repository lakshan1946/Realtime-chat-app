import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./UserAccordion.css";

export const styles = {
  backgroundColor: "transparent",
  color: "white",
  fontSize: "12px",
};

export default function UserAccordion() {
  return (
    <div className="accordion">
      <Accordion style={styles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Chat Setting
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Privacy & help
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion style={styles} defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Shared photos
        </AccordionSummary>
        <AccordionDetails>
          <div className="photos">
            <div className="photo">
              <div className="photo-detail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaO6lWOo30L2AqIVF76Mx8WS-8OrnlUJw7w&s"
                  alt=""
                />
                <span>nature</span>
              </div>
              <img className="download-img" src="./download.png" alt="" />
            </div>
            <div className="photo">
              <div className="photo-detail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaO6lWOo30L2AqIVF76Mx8WS-8OrnlUJw7w&s"
                  alt=""
                />
                <span>nature</span>
              </div>
              <img className="download-img" src="./download.png" alt="" />
            </div>
            <div className="photo">
              <div className="photo-detail">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYaO6lWOo30L2AqIVF76Mx8WS-8OrnlUJw7w&s"
                  alt=""
                />
                <span>nature</span>
              </div>
              <img className="download-img" src="./download.png" alt="" />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
