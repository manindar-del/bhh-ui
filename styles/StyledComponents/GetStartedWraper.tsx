/* eslint-disable import/no-named-as-default-member */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const GetStartedWraper = styled(Box)`
  .get_started_form {
    .form_hdr {
      padding: 15px 20px;
      background-color: ${primaryColors.white};
      border-radius: 10px;
      box-shadow: 0px 14px 55px 0px rgba(0, 0, 0, 0.07);
      ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        @media(max-width: 899px){
          flex-wrap: nowrap;
          overflow-x: auto;
        }
        li {
          width: auto;
          position: relative;
          display: block;

          min-width: 132px;
          text-align: center;
          &::before {
            top: 15px;
            content: "";
            position: absolute;
            left: 100px;
            height: 5px;
            border-radius: 10px;
            width: 250px;
            background-color: ${primaryColors.border_primary};
            @media(max-width: 1199px){
              width: 165px;
              left: 95px;
            }
            @media(max-width: 899px){
              width: 75px;
              left: 95px;
            }
          }
          &:last-child {
            &::before {
              display: none;
            }
          }
          p {
            background-color: ${primaryColors.border_primary};
            height: 35px;
            width: 35px;

            border-radius: 100%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${primaryColors.textPrimaryColor};
          }
          &.active {
            p {
              background-color: ${primaryColors.primary};
              color: ${primaryColors.white};
            }
          
            &.complete{
              p{
                font-size: 0;
                background-image: url(${assest.tick});
                background-repeat: no-repeat;
                background-size: 30px;
                background-position: center;
             
              }
              &::before{
              background-color: ${primaryColors.primary};
            }
            }
          }
        }
      }
    }
  }
`;
