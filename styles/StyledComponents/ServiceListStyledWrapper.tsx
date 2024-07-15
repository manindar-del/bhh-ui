import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ServiceListStyledWrapper = styled(Box)`
    padding: 50px 0;
    .serviceList{
        background: ${primaryColors.serviceBg};
        border-radius: 15px;
        padding: 25px;
        .serviceList_row{
            display: flex;
            flex-wrap: wrap;
            text-align: center;
            .serviceList_col{
                width: calc(100% / 3);
                position: relative;

                @media (max-width: 767px) {
                    width: 100%;
                    margin-bottom: 20px;
                    padding-bottom: 20px;
                    &:last-child{
                        margin-bottom: 0;
                        padding-bottom: 0;
                    }
                }
                &::before{
                    position: absolute;
                    content: "";
                    left: 0;
                    top: 0;
                    bottom: 0;
                    width: 1px;
                    background: ${primaryColors.colordfe8f1};

                    @media (max-width: 767px) {
                        width: 100%;
                        height: 1px;
                        top: initial;
                    }
                }

                &:first-child{
                    &::before{
                        display: none;

                        @media (max-width: 767px) {
                            display: block;
                        }
                    }
                }
                &:last-child{
                    &::before{
                        @media (max-width: 767px) {
                        display: none;
                    }
                    }
                }
                
                figure{
                    margin-bottom: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                h3{
                    text-transform: capitalize;
                    color: ${primaryColors.white};
                    font-size: 16px;
                }
            }
        }

    }
`
