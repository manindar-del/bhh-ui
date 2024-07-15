
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const DasboardHeaderWrapper = styled(Box)`
.wrapper_headerWrap{
    position: fixed;
    top: 0;
    right: 15px;
    width: calc(100% - 280px);
    margin-left: auto;
    left: auto;
    z-index: 9;
    padding: 10px 0;
    background: ${primaryColors.dashBoardBg};
    @media(max-width: 1699px){
        width: calc(100% - 250px);
    }
    @media(max-width: 899px){
        width: 100%;
        left: 0;
        right: 0;
        padding: 10px 15px;
    }
    .wrapper_allItems{
        margin-left: auto;
        display: flex;
        align-items: center;
    }
    .wrapper_allHeader{
        display: flex;
        align-items: center;
        background: ${primaryColors.white};
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(34, 41, 47, 0.2);
        padding: 10px 15px;
        .wrapper_left{
            padding-right: 10px;
            @media(max-width: 899px){
                display: none;
            }
            p{
                font-size: 15px;
                line-height: 1;
                margin-bottom: 8px;
                &.titleName{
                    font-size: 20px;
                    color: ${primaryColors.primary};
                    font-weight: 600;
                    margin-bottom: 0;
                }
            }
        }
    }
    .wrapper_search{
        position: relative;
        padding-right: 15px;
        @media(max-width: 899px){
            padding: 20px 50px 20px 15px;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            background: ${primaryColors.dashBoardBg};
            box-shadow: 0 0 10px 0 rgba(34, 41, 47, 0.2);
            z-index: 99;
            transform: translateY(-100%);
            transition: 0.3s ease-in-out;
        }
        &.active{
            transform: translateY(0);
            transition: 0.3s ease-in-out;
        }
        .cloneSearch_btn{
            display: none;
            @media(max-width: 899px){
                display: inline-flex;
                align-items: center;
                justify-content: center;
                min-width: auto;
                height: auto;
                padding: 0;
                position: absolute;
                right: 10px;
                top: 50%;
                transform: translateY(-50%);
            }
        }
        i{
            position: absolute;
            left: 8px;
            top: 50%;
            transform: translateY(-50%);
            line-height: 0;
            font-size: 0;
            margin-bottom: 0;
            @media(max-width: 899px){
                left: 25px;
            }
        }
        .MuiInputBase-root{
            padding-left: 35px;
            .MuiInputBase-input {
                padding: 0;
            }
        }
    }
    .notificationBtn{
        padding: 0;
        background: transparent;
        min-width: auto;
        height: 35px;
        width: 35px;
        border: 1px solid ${primaryColors.secondaryFont};
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s ease-in-out;
        &:hover{
            background: ${primaryColors.primary1};
            border-color: ${primaryColors.primary1};
            svg{
                path{
                    fill: ${primaryColors.white};
                }
            }
        }
        svg{
            path{
                transition: 0.3s ease-in-out;
            }
        }
    }
    .profileDrop_down{
        padding-left: 10px;
        button{
            min-width: auto;
            width: 35px;
            height: 35px;
            padding: 0;
            background: transparent;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50%;
            }
        }
    }
}
.menuOpenBtn{
    display: none;
    padding-right: 15px;
    @media(max-width: 899px){
        display: block;
    }
    button{
        min-width: initial;
        padding: 0;
        height: auto;
    }
}
.searchMobile_open{
    display: none;
    @media(max-width: 899px){
        display: inline-flex;
        padding-right: 10px;
        button{
            width: 35px;
            height: 35px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid ${primaryColors.footerBg};
            border-radius: 50%;
            min-width: inherit;
            padding: 0;
            &:hover{
                background: ${primaryColors.footerBg};
                svg{
                    path{
                        fill: ${primaryColors.white};
                    }
                }
            }
        }
    }
}
`