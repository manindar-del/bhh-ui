import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const ConfirmationModalWrap = styled(Box)`
.wrapper_btnModalWrap{
    position: relative;
    padding: 0 0 40px 0;
    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        @media(max-width: 899px){
            flex-wrap: wrap;
        }
        li{
            padding: 0 10px;
            width: auto;
            @media(max-width: 899px){ 
                padding: 6px;
            }
            button{
                background: ${primaryColors.primary};
                color: ${primaryColors.white};
                padding: 8px 20px;
                font-weight: 600;
                border-radius: 8px;
                &:hover{
                    background: ${primaryColors.primary1};
                }
            }
        }
    }
}



`