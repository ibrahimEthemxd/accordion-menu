import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import { useState } from "react";

function Accor() {
  const [expanded, setExpanded] = useState([]); // Çoklu seçim için bir array
  const [multiSelect, setMultiSelect] = useState(false); // Çoklu seçim modu

  // Paneli açma/kapama fonksiyonu
  const handleChange = (panelName) => (event, exp) => {
    if (multiSelect) {
      setExpanded((prev) =>
        exp ? [...prev, panelName] : prev.filter((panel) => panel !== panelName)
      );
    } else {
      setExpanded(exp ? [panelName] : []);
    }
  };

  // Akordiyon bileşeni oluşturma fonksiyonu
  const renderAccordion = (panelName, title, content) => (
    <Accordion
      expanded={expanded.includes(panelName)}
      onChange={handleChange(panelName)}
      className="accor"
    >
      <AccordionSummary
        sx={{ backgroundColor: "#674000", color: "white" }}
        expandIcon={<AddIcon sx={{ color: "white" }} />}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );

  return (
    <div className="container">
      <Button
        variant="contained"
        disableElevation
        sx={{ marginBottom: 2, backgroundColor: "#674000" }}
        onClick={() => setMultiSelect((prev) => !prev)} // Çoklu seçim modunu değiştirme
      >
        {multiSelect ? "Disable Multi Selection" : "Enable Multi Selection"}
      </Button>
      {renderAccordion(
        "panel1",
        "First part",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat beatae explicabo incidunt maxime vero aliquam nihil sapiente cum odio impedit."
      )}
      {renderAccordion(
        "panel2",
        "Second part",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat beatae explicabo incidunt maxime vero aliquam nihil sapiente cum odio impedit."
      )}
      {renderAccordion(
        "panel3",
        "Third part",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat beatae explicabo incidunt maxime vero aliquam nihil sapiente cum odio impedit."
      )}
      {renderAccordion(
        "panel4",
        "Fourth part",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat beatae explicabo incidunt maxime vero aliquam nihil sapiente cum odio impedit."
      )}
    </div>
  );
}

export default Accor;
