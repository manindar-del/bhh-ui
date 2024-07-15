import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const AuthWrapperStyle = styled(Box)`
     &.auth_main {
    display: flex;
    .auth_left {
      width: 50%;
      flex-basis: 50%;
      position: relative;
      @media (max-width: 899px) {
        width: 100%;
        flex-basis: 100%;
      }
      .abs_ico {
        position: absolute;
        img {
          width: 100%;
        }
        &.top {
          top: 0;
          left: 0;
          width: 490px;
        }
        &.btm {
          bottom: 0;
          left: 0;
          width: 286px;
        }
      }
      .auth_left_inner {
        position: relative;
        z-index: 2;
        margin-left: auto;
        padding-right: 70px;
        max-width: 100%;
        padding-left: 15px;
        @media (min-width: 1200px) {
          max-width: 585px;
          padding-left: 0;
        }
        @media (max-width: 1299px) {
          padding-right: 15px;
        }

        .auth_header {
          padding: 20px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          @media (max-width: 899px) {
            justify-content: center;
          }
          @media (max-width: 599px) {
            padding: 10px 0;
          }
          .logo {
            max-width: 200px;
            line-height: 1;
            
            img {
              display: block;
              width: 100%;
              max-width: 100%;
              height: auto;
              @media (max-width: 599px) {
                max-width: 150px;
              }
            }
          }
          .header_right {
            color: ${primaryColors.secondary};
            font-size: 16px;
            font-weight: 400;
            a {
              color: ${primaryColors.mainFontColor};
              font-size: 16px;
              font-weight: 400;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
        .auth_sec {
          height: calc(100vh - 153px);
          padding: 40px 0;
          display: flex;
          align-items: center;
          @media(max-width: 899px){
            height: calc(100vh - 97px);
          }
          @media (max-width: 599px) {
            padding: 25px 0;
            height: calc(100vh - 63px);
          }
          .auth_content {
            width: 100%;
            padding-right: 10px;
            max-height: 100%;
            overflow: auto;
            &::-webkit-scrollbar {
              width: 6px;
              background: #f9f9f9;
              border-radius: 44px;
            }

            &::-webkit-scrollbar-track {
              -webkit-box-shadow: inset 0 0 0px rgba(0, 0, 0, 0);
            }

            &::-webkit-scrollbar-thumb {
              width: 6px;
              background: #329691;
              border-radius: 44px;
            }

            &::-webkit-scrollbar-thumb:hover {
              background-color: #329691;
            }

            .form_group {
              margin: 0 0 15px;
            }
            .btn_group {
              button {
                width: 100%;
              }
            }
            .checkbox_group {
              .MuiFormControlLabel-label {
                color: ${primaryColors.mainFontColor};
                font-size: 14px;
              }
              .MuiFormControlLabel-root {
                margin-left: 0;
                .MuiCheckbox-root {
                  padding-left: 0;
                }
              }
            }

            .remember_group {
              display: flex;
              align-items: center;
              justify-content: space-between;
              .forgot_password {
                color: ${primaryColors.mainFontColor};
                font-size: 14px;
                font-weight: 500;
                @media(max-width: 599px){
                  font-size: 12px;
                }
                &:hover {
                  text-decoration: underline;
                }
              }
              .MuiFormControlLabel-root {
                margin-left: 0;
                .MuiSwitch-root {
                  margin-left: 0;
                }
              }
              .MuiTypography-root {
                color: ${primaryColors.mainFontColor};
                font-size: 14px;
                margin-left: 5px;
                @media(max-width: 599px){
                  margin-left: 0;
                }
              }
            }
            .heading {
              margin: 0 0 30px;
              .main_head {
                color: ${primaryColors.serviceBg};
                font-size: 40px;
                font-weight: 500;
                text-transform: capitalize;
                margin: 0 0 15px;
                @media (max-width: 599px) {
                  font-size: 30px;
                }
                @media (max-width: 479px) {
                  font-size: 24px;
                }
              }
              p {
                color: ${primaryColors.mainFontColor};
                font-size: 16px;
              }
            }

            .back_div{
              
              color: ${primaryColors.mainFontColor};
              a{
                svg{
                  font-size: 0;
                  line-height: 0;
                  margin-right: 5px;
                }
                display: flex;
              align-items: center;
              justify-content: center;
                color: inherit;
                text-decoration: none;
              }
            }
          }
        }
      }
    }
    .auth_right {
      width: 50%;
      flex-basis: 50%;
      position: relative;
      @media (max-width: 899px) {
        display: none;
      }
      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 55%;
        background: linear-gradient(
          0deg,
          #5b818e -45.02%,
          rgba(90, 130, 144, 0) 62.09%
        );
      }
      img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        display: block;
      }
    }
  }
`