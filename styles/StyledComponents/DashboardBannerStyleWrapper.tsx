import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const DashboardBannerStyleWrapper = styled(Box)`
    background: ${primaryColors.footerBg};
    border-radius: 15px;
    padding: 50px 40px;
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 90px;
    @media(max-width: 1399px){
        margin-top: 60px;
        padding: 40px 30px;
    }

    @media(max-width: 899px){
        margin-top: 0;
        flex-wrap: wrap;
        padding: 30px 20px 0;
    }

    .DashboardBanner_left{
            width: 60%;
        @media(max-width: 899px){
            width: 100%;
            text-align: center;
        }
        h1{
            color: ${primaryColors.white};
            font-size: 35px;
            margin-bottom: 15px;
            @media(max-width: 1399px){
                font-size: 30px;
                margin-bottom: 10px;
            }
            @media(max-width: 599px){
                font-size: 24px;
            }
            span{
                font-size: 35px;
                color: ${primaryColors.primary};
                font-weight: 700;
                @media(max-width: 1399px){
                    font-size: 30px;
                }
                @media(max-width: 599px){
                    font-size: 24px;
                }
            }
        }
        p{
            color: ${primaryColors.white};
            font-size: 18px;
            @media(max-width: 599px){
                font-size: 16px;
            }
        }
    }
    .doctorImg{
        position: absolute;
        top: -90px;
        height: calc(100% + 90px);
        right: 100px;
        z-index: 1;
        @media(max-width: 1399px){
            top: -60px;
            height: calc(100% + 60px);
        }
        @media(max-width: 899px){
            position: static;
            width: 100%;
            line-height: 0;
            font-size: 0;
            margin-bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-top: 20px;
        }
        img{
            height: 100%;
            object-fit: cover;
            width: auto;
        }
    }

`