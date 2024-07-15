import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const SelectWrapper = styled(Box)`
  .label_cus {
    color: ${primaryColors.mainFontColor};
    margin: 0 0 8px;
    font-weight: 600;
    display: block;
  }
  .MuiOutlinedInput-notchedOutline {
    display: none;
  }
  .MuiInputBase-root {
    background-color: ${primaryColors.white};
    border: 1px solid ${primaryColors.borderprimary};
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.06);
  }

  .MuiSelect-select {
      padding: 11px 40px 12px 10px;
   
      color: ${primaryColors.mainFontColor};
      font-size: 16px;
      font-weight: 400;
      text-align: left;
    }
    .MuiSelect-icon {
      padding: 0;
      line-height: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  .menu_item {
    &.MuiMenuItem-root {
      color: ${primaryColors.black};
    }
  }
`;
