/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-nested-ternary */
/* eslint-disable mui-path-imports/mui-path-imports */
import { GetStartedWraper } from "@/styles/StyledComponents/GetStartedWraper";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useState } from "react";

import { Box, List, ListItem } from "@mui/material";
import CareForm from "../CareForm/CareForm";
import CmnHeader from "../CmnHeader/CmnHeader";
import GetConnected from "../GetConnected/GetConnected";
import VisitForm from "../VisitForm/VisitForm";
import WaitForm from "../WaitForm/WaitForm";

export default function GetStarted() {
  const [step, setStep] = useState(0);
  const handleNextStep = (nextStepValue: number) => {
    setStep(nextStepValue);
  };

  return (
    <GetStartedWraper>
      <Container fixed>
        <CmnHeader>
          <Typography variant="h2">
            Lorem ipsum dolor <Typography variant="caption">sit amet.</Typography>{" "}
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            error rerum modi placeat optio architecto similique praesentium,
            debitis fuga sequi!
          </Typography>
        </CmnHeader>

        <Box className="get_started_form">
          <Box className="form_hdr">
            <List disablePadding>
              <ListItem className={step === 0 ? "active" : (step > 0 ? "active complete" : "")} disablePadding>
                <Typography variant="body1">1</Typography>
                <Typography variant="caption" color="initial">Type of Care</Typography>
              </ListItem>
              <ListItem className={step === 1 ? "active" : (step > 1 ? "active complete" : "")} disablePadding>
                <Typography variant="body1">2</Typography>
                <Typography variant="caption" color="initial">Visit Details</Typography>
              </ListItem>
              <ListItem className={step === 2 ? "active" : (step > 2 ? "active complete" : "")} disablePadding>
                <Typography variant="body1">3</Typography>
                <Typography variant="caption" color="initial">Don't Want to wait</Typography>
              </ListItem>
              <ListItem className={step === 3 ? "active" : (step > 3 ? "active complete" : "")} disablePadding>
                <Typography variant="body1">4</Typography>
                <Typography variant="caption" color="initial">Get Connected</Typography>
              </ListItem>

            </List>
          </Box>
          <Box className="form_body">
            {step === 0 ? (
              <CareForm onNextStep={handleNextStep} />
            ) : step === 1 ? (
              <VisitForm onNextStep={handleNextStep} />
            ) : step === 2 ? (
              <WaitForm onNextStep={handleNextStep} />
            ) : step === 3 ? (
              <GetConnected />
            ) : null}
          </Box>
        </Box>
      </Container>
    </GetStartedWraper>
  );
}
