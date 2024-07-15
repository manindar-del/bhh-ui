
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const DashboardSidebarWrapper = styled(Box)`
position: relative;

.menuClose_btn{
    display: none;
    @media(max-width: 899px){
        width: 30px;
        height: 30px;
        position: absolute;
        right: -10px;
        top: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
}
&.active{
    .wrapper_sidebarMain{
        @media(max-width: 899px){
            left: 0;
            transform: translateX(0%);
            transition: 0.3s ease-in-out;
        }
    }
    .mobileOverlay{
        display: none;
        @media(max-width: 899px){
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 10;
            display: block;
        }
    }
}
.wrapper_sidebarMain{
    height: 100vh;
    background: ${primaryColors.white};    
    box-shadow: 0 0 10px 0 rgba(34, 41, 47, 0.2);
    z-index: 1;
    width: 250px;
    padding: 20px 25px;
    position: fixed;
    @media(max-width: 1699px){
        width: 220px;
    }
    @media(max-width: 899px){
        left: 0;
        transform: translateX(-100%);
        transition: 0.3s ease-in-out;
        z-index: 99;
        padding-top: 40px;
    }
    .topLogo{
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            height: auto;
            width: 100%;
        }
    }
    .innerWrapper_linkList{
        padding: 20px 0;
        ul{
            padding: 0;
            margin: 0;
            li{
                padding: 10px 0;
                a{
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 10px 20px;
                    background: ${primaryColors.white};
                    box-shadow: 0 0 15px 0 rgba(34, 41, 47, 0.05);
                    width: 100%;
                    border-radius: 10px;
                    text-decoration: none;
                    font-size: 16px;
                    font-weight: 600;
                    color: ${primaryColors.black};
                    transition: 0.5s ease-in-out;
                    @media(max-width: 1399px){
                        font-size: 14px;
                        padding: 8px 15px;
                    }
                    &:hover{
                        background: ${primaryColors.primary1};
                        color: ${primaryColors.white};
                        svg{
                            path{
                                fill: ${primaryColors.white};
                            }
                        }
                    }
                    &.active{
                        background: ${primaryColors.primary1};
                        color: ${primaryColors.white};
                        svg{
                            path{
                                fill: ${primaryColors.white};
                            }
                        }
                    }
                    svg{
                        margin-right: 8px;
                        path{
                            transition: 0.5s ease-in-out;
                        }
                    }
                }
            }
        }
    }
}

`