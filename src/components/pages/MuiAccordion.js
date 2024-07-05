//https://mui.com/material-ui/react-accordion/
//https://mui.com/material-ui/react-accordion/
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useGlobals } from "../../Globals.js"
import { ThemeProvider, createTheme } from '@mui/material/styles';




export default function MuiAccordion() {
  const { GlobalFont, setGlobalFont, PrimaryColour, setPrimaryColour,
    SecondaryColour, setSecondaryColour, TertiaryColour, setTertiaryColour } = useGlobals();


  const AccordionText = {
    fontSize: "20px",
    fontWeight: "Light",
    fontFamily: GlobalFont,
    backgroundColor: "white",
    marginTop: "4px",
    display: "flex",
  };


  const AccordionQ = {
    fontFamily: GlobalFont,
    fontSize: "20px",
  };

  const AccordionQuestion = {
    fontFamily: "courier",
    fontSize: "20px",
  };


  const AccordionBG = {
    borderRadius: "0",
    width: "95%",
    alignContent: "center",
    backgroundColor: PrimaryColour,
    margin: "0 auto",
  };


  return (
    <div style={{ marginBottom: "20px", marginTop: "10px" }}>
      <Accordion style={AccordionBG}>
        <AccordionSummary
        style = {AccordionQ}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Do you provide free measure and quotes for fencing?
        </AccordionSummary>
        <AccordionDetails style={AccordionText}>
          Yes, all our quotes are free and no-obligation.
        </AccordionDetails>
      </Accordion>
      <Accordion style={AccordionBG}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          style={AccordionQ}
        >
          How high can I build my fence?
        </AccordionSummary>
        <AccordionDetails style={AccordionText}>
          This depends on where the fence is located on your property. It’s best to check with your local council before you begin building your fence, to ensure it complies with their rules and regulations as each council can differ.
        </AccordionDetails>
      </Accordion>
      <Accordion style={AccordionBG}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          style={AccordionQ}
        >
          Will you take away the old fence and how much does that cost?
        </AccordionSummary>
        <AccordionDetails style={AccordionText}>
          Yes, we can take away the old fence. Generally this will cost around $15/metre and is factored into the initial quote.
        </AccordionDetails>
      </Accordion>
      <Accordion style={AccordionBG}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          style={AccordionQ}
        >
          What if my neighbour wants a fence over and above what is deemed a standard for a sufficient dividing fence?
        </AccordionSummary>
        <AccordionDetails style={AccordionText}>
          You are only required to contribute up to the cost of half of what is deemed the cost of a standard fence. If your neighbour wishes to erect a fence over and above this, they are responsible for the extra cost associated with that fence – Refer to the Victoria Fences Act for further details – Click here to view the Victoria Fences Act 2014 Amendment.
        </AccordionDetails>
      </Accordion>
      <Accordion style={AccordionBG}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          style={AccordionQ}
        >
          Do your fences come with a warranty?
        </AccordionSummary>
        <AccordionDetails style={AccordionText}>
          Yes, we offer 12 months warranty on workmanship.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}





