/* eslint-disable mui-path-imports/mui-path-imports */
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CmnHeaderWrapper = styled(Box)`
  .cmn_hdr {
    text-align: center;
    margin-bottom: 30px;
    h2 {
      margin-bottom: 10px;
      span {
        font-size: inherit;
        color: ${primaryColors.serviceBg};
      }
    }
    p{
      max-width: 700px;
      margin: 0 auto;
    }
  }
`;
