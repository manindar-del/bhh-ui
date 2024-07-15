/* eslint-disable mui-path-imports/mui-path-imports */
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const CmnFormWrapper = styled(Box)`

padding: 30px 25px;
background-color: ${primaryColors.white};
box-shadow: 0px 14px 55px 0px rgba(0, 0, 0, 0.07);
border-radius: 10px;
margin-top: 40px;
@media(max-width: 899px){
    padding: 20px 5px;
    margin-top: 20px;
}

.textarea_wrap{
    textarea{
        height: 70px !important;
    }
}

.form_heading{
    margin-bottom: 15px;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    @media(max-width: 599px){
        font-size: 24px;
    }
    span{
        color: ${primaryColors.primary1};
        font-size: 32px;
        margin-left: 10px;
        font-weight: 700;
        @media(max-width: 599px){
            font-size: 24px;
        }
    }
}
.form_main_label{
    color: ${primaryColors.mainFontColor};
    margin: 0 0 20px;
}
.checkbox_group{
    margin: 0 0 10px;
}


.btn_center{
    text-align: center;
    button{
        padding: 12px 40px;
        min-width: auto;
        display: inline-block;
        
    }
}

`