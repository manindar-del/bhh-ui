/* eslint-disable mui-path-imports/mui-path-imports */
import { CmnHeaderWrapper } from "@/styles/StyledComponents/CmnHeaderWrapper";
import { Box } from "@mui/material";
import React from "react";

export interface headerProps {
  children: JSX.Element | JSX.Element[];
}

export default function CmnHeader({children}:headerProps) {
  return (
    <CmnHeaderWrapper>
      <Box className="cmn_hdr">
        {children}
      </Box>
    </CmnHeaderWrapper>
  );
}
