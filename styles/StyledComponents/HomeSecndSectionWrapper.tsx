import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HomeSecndSectionWrapper = styled(Box)`
  .mainWrap_homeabt {
    position: relative;
    padding: 80px 0;
    @media(max-width: 1199px){
      padding: 60px 0;
    }
    @media(max-width: 899px){
      padding: 40px 0;
    }
    @media(max-width: 599px){
      padding: 30px 0;
    }
    .textWrapper_mainInfo {
      position: relative;
      h2 {
        text-align: left;
        /* margin-bottom: 15px;
        font-size: 32px;
        font-weight: 700;
        @media(max-width: 599px){
          font-size: 24px;
          margin-bottom: 10px;
        }
        span {
          color: ${primaryColors.primary1};
          font-size: 32px;
          font-weight: 700;
          @media(max-width: 599px){
            font-size: 24px;
          }
        } */
      }
      ul {
        margin-bottom: 30px;
        @media(max-width: 899px){
          margin-bottom: 10px;
        }
        li {
          position: relative;
          padding-left: 25px;
          &:not(:last-child) {
            margin-bottom: 10px;
          }
          &::before {
            position: absolute;
            content: "";
            left: 0;
            top: 8px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: ${primaryColors.secondaryFont};
          }
          p{
            @media(max-width: 899px){
              font-size: 14px;
            }
          }
        }
      }
    }
    .imgWrap {
      position: relative;
      @media(max-width: 899px){
        margin-top: 15px;
      }
      figure {
        margin: 0;
        line-height: 0;
        font-size: 0;
        width: 100%;
        img {
          width: 100%;
          border-radius: 20px;
          @media(max-width: 599px){
            border-radius: 10px;
          }
        }
      }
      .playBtn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        min-width: auto;
        background: ${primaryColors.primary};
        @media(max-width: 599px){
          width: 40px;
          height: 40px;
        }
        &:hover {
          transform: translate(-50%, -50%) rotate(360deg);
          background: ${primaryColors.black};
        }
      }
    }
  }
`;
