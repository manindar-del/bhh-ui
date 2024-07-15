/* eslint-disable react/no-unescaped-entities */
import { primaryColors } from '@/themes/_muiPalette';
import CustomButtonPrimary from '@/ui/CustomButtons/CustomButtonPrimary';
import styled from '@emotion/styled';
import Typography from "@mui/material/Typography";
import { Box } from '@mui/system';

export const GetConnectedStyledWrapper = styled(Box)`
margin-bottom: 20px;
   .wrapper_BoxTw {
          display: flex;
          flex-wrap: wrap;
          margin: 0 -20px 30px;
          padding-top: 40px;
          @media(max-width: 899px){
              margin: 0 -10px 20px;
            }
          .single_listBox {
            width: 50%;
            padding: 0 20px;
            @media(max-width: 899px){
              padding: 0 10px;
            }
            @media(max-width: 599px){
              width: 100%;
              &:not(:last-child){
                margin-bottom: 15px;
              }
            }
            .homeCardBox {
              background: ${primaryColors.white};
              border-radius: 15px;
              box-shadow: 0px 7px 20px 0px rgba(0, 0, 0, 0.07);
              p {
                border-bottom: 1px solid ${primaryColors.disabledBg};
                text-align: center;
                padding: 12px;
                color: ${primaryColors.black};
                font-weight: 500;
                &.numberTxt {
                  border: 0;
                  font-size: 40px;
                  color: ${primaryColors.primary};
                  font-weight: 700;
                  padding: 25px 12px;
                  @media(max-width: 899px){
                    padding: 15px 10px;
                    font-size: 24px;
                  }
                }
              }
            }
          }
        }

    .waitingTimeLink{
      text-align: center;

     >p{
        margin-bottom: 15px;
        font-size: 22px;
        font-weight: 600;
        color: ${primaryColors.black};
        @media(max-width: 899px){
          font-size: 18px;
        }
      }
      .MuiButtonBase-root {
        margin: 0 auto;
        &:disabled{
          opacity: 0.6;
          p{
            color: ${primaryColors.black};
          }
        }
      }
    }
`
export default function GetConnected() {
  return (
    <GetConnectedStyledWrapper>
      <Box className="wrapper_BoxTw">
        <Box className="single_listBox">
          <Box className="homeCardBox">
            <Typography variant="body1">Your place in line</Typography>
            <Typography variant="body1" className="numberTxt">
              05
            </Typography>
          </Box>
        </Box>
        <Box className="single_listBox">
          <Box className="homeCardBox">
            <Typography variant="body1">Estimated wait time</Typography>
            <Typography variant="body1" className="numberTxt">
              07 min
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className="waitingTimeLink">
        <Typography variant='body1'>It's your turn to join</Typography>
        <CustomButtonPrimary variant="contained" color="primary" disabled >
          <Typography variant="body1">Join</Typography>
        </CustomButtonPrimary>
      </Box>
    </GetConnectedStyledWrapper>
  )
}
