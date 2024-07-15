
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const DashboardWrapperStyle = styled(Box)`
.body_dashboard{
    position: relative;
    background: ${primaryColors.dashBoardBg};
    padding: 120px 15px 20px 15px;
    width: calc(100% - 250px);
    margin-left: auto;
    min-height: 100vh;
    @media(max-width: 1699px){
        width: calc(100% - 220px);
    }
    @media(max-width: 899px){
        width: 100%;
        padding: 100px 15px 15px;
    }
}


.wrapper_mainCard{
    position: relative;
    padding: 40px 0;
    @media(max-width: 1599px){
        padding: 30px 0 0;
    }
    .all_listCard{
        display: flex;
        flex-wrap: wrap;
        margin: 0 -10px;
        @media(max-width: 1599px){
            margin: 0 -6px;
        }
        .listWrapper_single{
            width: 14.25%;
            padding: 0 10px;
            @media(max-width: 1599px){
                padding: 0 6px;
            }
            @media(max-width: 1199px){
                width: 25%;
                padding: 6px;
            }
            @media(max-width: 899px){
                width: 33.33%;
            }
            @media(max-width: 599px){
                width: 50%;
            }
            @media(max-width: 374px){
                width: 100%;
            }
            >div{
                height: 100%;
            }
        }
    }
}
`