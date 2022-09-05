import * as React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="container">
      <div className="text_block">
        <span className="heading">Akordean</span>
        <span className="sub__heading">vector PSD</span>
        <div className="desription"> A stylo modern accordion </div>
      </div>
      <MuiAccordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        disableGutters
        elevation={0}
        square
      >
        <MuiAccordionSummary
          style={{
            backgroundColor: "grey",
            color: "#fff",
            flexDirection: "row-reverse"
          }}
          expandIcon={
            expanded === "panel1" ? (
              <RemoveIcon
                style={{
                  borderRadius: "1px solid black",
                  backgroundColor: "#7fff00",
                  fontSize: "22px",
                  fontWight: "900"
                }}
              />
            ) : (
              <AddIcon
                style={{
                  borderRadius: "1px solid black",
                  backgroundColor: "#7fff00",
                  fontSize: "22px",
                  fontWight: "900"
                }}
              />
            )
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography
            style={
              expanded === "panel1"
                ? {
                    color: "#7fff00"
                  }
                : {}
            }
          >
            {expanded === "panel1"
              ? "this is an expanded panel"
              : "first panel"}
          </Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails style={{ backgroundColor: "grey", color: "#fff" }}>
          <Typography>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </MuiAccordionDetails>
      </MuiAccordion>
      <MuiAccordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        disableGutters
        elevation={0}
        square
      >
        <MuiAccordionSummary
          style={{
            backgroundColor: "grey",
            color: "#fff",
            flexDirection: "row-reverse"
          }}
          expandIcon={
            expanded === "panel2" ? (
              <RemoveIcon
                style={{
                  borderRadius: "1px solid black",
                  backgroundColor: "#7fff00",
                  fontSize: "22px",
                  fontWight: "900"
                }}
              />
            ) : (
              <AddIcon
                style={{
                  borderRadius: "1px solid black",
                  backgroundColor: "#7fff00",
                  fontSize: "22px",
                  fontWight: "900"
                }}
              />
            )
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography
            style={
              expanded === "panel2"
                ? {
                    color: "#7fff00"
                  }
                : {}
            }
          >
            {expanded === "panel2"
              ? "this is an second expanded panel"
              : "second panel"}
          </Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails style={{ backgroundColor: "grey", color: "#fff" }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </MuiAccordionDetails>
      </MuiAccordion>
      <MuiAccordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        disableGutters
        elevation={0}
        square
      >
        <MuiAccordionSummary
          style={{
            backgroundColor: "grey",
            color: "#fff",
            flexDirection: "row-reverse"
          }}
          expandIcon={
            expanded === "panel3" ? (
              <RemoveIcon
                style={{
                  borderRadius: "1px solid black",
                  backgroundColor: "#7fff00",
                  fontSize: "22px",
                  fontWight: "900"
                }}
              />
            ) : (
              <AddIcon
                style={{
                  borderRadius: "1px solid black",
                  backgroundColor: "#7fff00",
                  fontSize: "22px",
                  fontWight: "900"
                }}
              />
            )
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography
            style={
              expanded === "panel3"
                ? {
                    color: "#7fff00"
                  }
                : {}
            }
          >
            {expanded === "panel3"
              ? "this is an third expanded panel"
              : "Third panel"}
          </Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails style={{ backgroundColor: "grey", color: "#fff" }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Suspendisse.
          </Typography>
        </MuiAccordionDetails>
      </MuiAccordion>
      <MuiAccordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        disableGutters
        elevation={0}
        square
      >
        <MuiAccordionSummary
          style={{
            backgroundColor: "grey",
            color: "#fff",
            flexDirection: "row-reverse"
          }}
          expandIcon={
            expanded === "panel4" ? (
              <RemoveIcon
                style={{
                  borderRadius: "1px solid black",
                  backgroundColor: "#7fff00",
                  fontSize: "22px",
                  fontWight: "900"
                }}
              />
            ) : (
              <AddIcon
                style={{
                  borderRadius: "1px solid black",
                  backgroundColor: "#7fff00",
                  fontSize: "22px",
                  fontWight: "900"
                }}
              />
            )
          }
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <Typography
            style={
              expanded === "panel4"
                ? {
                    color: "#7fff00"
                  }
                : {}
            }
          >
            {expanded === "panel4"
              ? "this is an fourth expanded panel"
              : "Fourth panel"}
          </Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails style={{ backgroundColor: "grey", color: "#fff" }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </MuiAccordionDetails>
      </MuiAccordion>
    </div>
  );
}
