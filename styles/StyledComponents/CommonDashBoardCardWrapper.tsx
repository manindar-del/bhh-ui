

import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CommonDashBoardCardWrapper = styled(Box)`
.cardMainWrap{
    width: 100%;
    position: relative;
    padding: 20px 10px;
    background: ${primaryColors.white};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    text-align: center;
    height: 100%;
    i{
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 0;
        padding: 20px;
        border-radius: 15px;
        max-width: 90px;
        margin: 0 auto 10px;
    }
    p{
        font-size: 14px;
        font-weight: 500;
        @media(max-width: 1599px){
            font-size: 12px;
        }
    }
    h4{
        font-weight: 600;
        color: ${primaryColors.textPrimaryColor};
        font-size: 25px;
        @media(max-width: 1599px){
            font-size: 20px;
        }
    }
}
`