import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  background: ${primaryColors.white};
  width: 100%;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.02);
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
  }
  .wrapper_logoWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .hdr_rgt {
    margin-left: 20px;
    display: flex;
    align-items: center;
    button {
      padding: 11px 42px;
      min-width: auto;
    }
    .MuiBadge-badge {
      right: 4px;
      top: 5px;
      min-width: 10px;
      height: 10px;
    }
    .cart_icon {
      margin-right: 18px;
    }
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 10px 0;
    transition: all 0.4s;
  }

  .headerLogo {
    width: 250px;
    display: inline-block;
    transition: all 0.4s;
    @media(max-width: 1199px){
      width: 180px;
    }
    @media(max-width: 899px){
      width: 150px;
    }
  }
  .navbar {
    margin-left: auto;
    a {
      margin-right: 45px;
      display: inline-block;
      color: ${primaryColors.secondaryFont};
      font-size: 15px;
      &:hover {
        color: ${primaryColors.primary};
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${primaryColors.primary};
      }
    }
  }
`;
