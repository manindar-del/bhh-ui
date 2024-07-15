import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HomeBannerWrapper = styled(Box)`
  .wrapper_homeBanner {
    position: relative;
    padding: 80px 0;
    @media(max-width: 1199px){
      padding: 60px 0;
    }
    @media(max-width: 899px){
      padding: 40px 0;
    }
    .wrapper_imgBanner {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      &::before {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, rgba(1, 78, 141, 0.7) 0%, rgba(0, 0, 0, 0.01) 90%);
      }
      figure {
        width: 100%;
        height: 100%;
        line-height: 0;
        font-size: 0;
        margin-bottom: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .wrapper_textList {
      display: flex;
      flex-wrap: wrap;
      .textWrapper {
        position: relative;
        z-index: 1;
        width: 50%;
        @media(max-width: 899px){
          width: 100%;
        }
        .titleBanner {
          font-weight: 600;
          margin-bottom: 20px;
          font-size: 32px;
          color: ${primaryColors.white};
          @media(max-width: 599px){
            font-size: 24px;
            margin-bottom: 10px;
          }
        }
        p {
          color: ${primaryColors.white};
          margin-bottom: 25px;
          &.smallTitle {
            color: ${primaryColors.textPrimaryColor};
          }
        }
        button {
          p {
            margin: 0;
          }
        }
      }
      .textWrapBox_right {
        width: 50%;
        position: relative;
        z-index: 1;
        @media(max-width: 899px){
          width: 100%;
          margin-top: 20px;
        }
        .wrapper_BoxTw {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -20px;
          @media(max-width: 1199px){
              margin: 0 -10px;
            }
          .single_listBox {
            width: 50%;
            padding: 0 20px;
            @media(max-width: 1199px){
              padding: 0 10px;
            }
            @media(max-width: 479px){
              width: 100%;
              &:not(:last-child){
                margin-bottom: 15px;
              }
            }
            .homeCardBox {
              background: ${primaryColors.white};
              border-radius: 15px;
              p {
                border-bottom: 1px solid ${primaryColors.borderprimary};
                text-align: center;
                padding: 12px;
                color: ${primaryColors.textPrimaryColor};
                &.numberTxt {
                  border: 0;
                  font-size: 40px;
                  color: ${primaryColors.primary};
                  font-weight: 700;
                  padding: 25px 12px;
                  @media(max-width: 1199px){
                    padding: 15px 12px;
                    font-size: 30px;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
